/**
 * Twelvedata WebSocket client.
 *
 * Wraps the `ws` library to provide:
 *   - real-time price streaming via Node's `EventEmitter` interface
 *   - application-level heartbeat (`{"action":"heartbeat"}`)
 *   - WebSocket-protocol ping/pong with timeout-based dead-connection detection
 *   - automatic reconnection with exponential backoff
 *   - automatic re-subscription to active symbols after reconnect
 */
import { EventEmitter } from "events";
import WebSocket from "ws";

import {
  DEFAULT_HEARTBEAT_INTERVAL_MS,
  DEFAULT_PING_INTERVAL_MS,
  DEFAULT_PING_TIMEOUT_MS,
  DEFAULT_RECONNECT_BACKOFF_FACTOR,
  DEFAULT_RECONNECT_INITIAL_DELAY_MS,
  DEFAULT_RECONNECT_MAX_ATTEMPTS,
  DEFAULT_RECONNECT_MAX_DELAY_MS,
  DEFAULT_WS_URL,
} from "./constants";
import {
  TwelvedataWebSocketError,
  WebSocketAuthError,
  WebSocketConnectionError,
  WebSocketReconnectError,
  WebSocketTimeoutError,
} from "./errors";
import type {
  HeartbeatEvent,
  PriceEvent,
  ReconnectOptions,
  SubscribeInput,
  SubscribeStatusEvent,
  SubscribeSymbol,
  TwelvedataWebSocketOptions,
  UnknownEvent,
  WebSocketEventMap,
} from "./types";

interface ResolvedReconnectConfig {
  enabled: boolean;
  initialDelayMs: number;
  maxDelayMs: number;
  maxAttempts: number;
  backoffFactor: number;
}

/**
 * Strongly-typed `EventEmitter` base. We don't extend a generic helper to keep
 * the dependency surface zero — declaration merging on the methods we actually
 * use is enough.
 */
export declare interface TwelvedataWebSocketClient {
  on<E extends keyof WebSocketEventMap>(
    event: E,
    listener: (...args: WebSocketEventMap[E]) => void,
  ): this;
  once<E extends keyof WebSocketEventMap>(
    event: E,
    listener: (...args: WebSocketEventMap[E]) => void,
  ): this;
  off<E extends keyof WebSocketEventMap>(
    event: E,
    listener: (...args: WebSocketEventMap[E]) => void,
  ): this;
  emit<E extends keyof WebSocketEventMap>(
    event: E,
    ...args: WebSocketEventMap[E]
  ): boolean;
}

export class TwelvedataWebSocketClient extends EventEmitter {
  private readonly apiKey: string;
  private readonly url: string;
  private readonly heartbeatIntervalMs: number;
  private readonly pingIntervalMs: number;
  private readonly pingTimeoutMs: number;
  private readonly reconnectConfig: ResolvedReconnectConfig;

  private ws: WebSocket | null = null;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  private pingTimer: NodeJS.Timeout | null = null;
  private pongTimeoutTimer: NodeJS.Timeout | null = null;
  private reconnectTimer: NodeJS.Timeout | null = null;

  private reconnectAttempts = 0;
  private userInitiatedClose = false;
  /**
   * True once the socket has reached OPEN at least once. Gates the
   * auto-reconnect loop so a failed initial `connect()` does not silently
   * spawn background reconnect attempts the caller never asked for.
   */
  private hasEverConnected = false;
  /**
   * Tracks an in-flight `openSocket()` promise so concurrent `connect()`
   * calls fold into a single attempt instead of opening multiple sockets.
   */
  private connectingPromise: Promise<void> | null = null;
  /**
   * True if the most recent `openSocket()` call actually constructed a
   * `WebSocket`. Lets the reconnect loop tell apart synchronous failures
   * (no `close` event will fire — we must reschedule ourselves) from
   * async failures (the socket's own `close` handler reschedules).
   */
  private lastAttemptCreatedSocket = false;
  /**
   * Set when an error occurs that retrying cannot fix (e.g. invalid API key).
   * Suppresses the auto-reconnect loop and is exposed via `connect()`'s rejection.
   */
  private fatalError: TwelvedataWebSocketError | null = null;
  /**
   * Keyed by canonical JSON form of the subscription so that string and
   * extended-object inputs that resolve to the same instrument are deduped.
   */
  private readonly subscriptions = new Map<string, string | SubscribeSymbol>();

  constructor(options: TwelvedataWebSocketOptions = {}) {
    super();

    const apiKey = options.apiKey ?? process.env.TWELVEDATA_API_KEY;
    if (!apiKey) {
      throw new WebSocketAuthError(
        "TWELVEDATA_API_KEY environment variable is not set and no apiKey option was provided",
      );
    }
    this.apiKey = apiKey;
    this.url = options.url ?? DEFAULT_WS_URL;
    this.heartbeatIntervalMs =
      options.heartbeatIntervalMs ?? DEFAULT_HEARTBEAT_INTERVAL_MS;
    this.pingIntervalMs = options.pingIntervalMs ?? DEFAULT_PING_INTERVAL_MS;
    this.pingTimeoutMs = options.pingTimeoutMs ?? DEFAULT_PING_TIMEOUT_MS;
    this.reconnectConfig = resolveReconnect(options.reconnect);
  }

  /**
   * Open the WebSocket connection. Resolves on `open`, rejects if the very
   * first attempt fails. Background reconnects after a successful first open
   * are non-throwing and surface via the `reconnecting` / `reconnect` / `error` events.
   */
  connect(): Promise<void> {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      return Promise.resolve();
    }
    if (this.connectingPromise) {
      return this.connectingPromise;
    }
    this.userInitiatedClose = false;
    this.fatalError = null;
    const attempt = this.openSocket().finally(() => {
      this.connectingPromise = null;
    });
    this.connectingPromise = attempt;
    return attempt;
  }

  /** True if the underlying socket is in the OPEN state. */
  isConnected(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }

  /**
   * Subscribe to one or more symbols. Tracked internally so the subscription
   * is automatically replayed after a reconnect.
   */
  subscribe(input: SubscribeInput): void {
    const items = normalizeInput(input);
    if (items.length === 0) return;
    for (const item of items) {
      this.subscriptions.set(canonicalKey(item), item);
    }
    this.send({
      action: "subscribe",
      params: { symbols: serializeSymbols(items) },
    });
  }

  /** Unsubscribe from one or more symbols and stop tracking them. */
  unsubscribe(input: SubscribeInput): void {
    const items = normalizeInput(input);
    if (items.length === 0) return;
    for (const item of items) {
      this.subscriptions.delete(canonicalKey(item));
    }
    this.send({
      action: "unsubscribe",
      params: { symbols: serializeSymbols(items) },
    });
  }

  /** Reset the server-side subscription list and clear local tracking. */
  reset(): void {
    this.subscriptions.clear();
    this.send({ action: "reset" });
  }

  /** Send a single application-level heartbeat frame. */
  heartbeat(): void {
    this.send({ action: "heartbeat" });
  }

  /**
   * Close the connection cleanly and disable automatic reconnect. After this
   * the client is inert until `connect()` is called again. Tracked
   * subscriptions are preserved and will be replayed on the next successful
   * `connect()`; call `reset()` first if you want to discard them.
   */
  disconnect(): void {
    this.userInitiatedClose = true;
    this.clearReconnectTimer();
    this.stopHeartbeat();
    this.stopPing();
    this.reconnectAttempts = 0;
    this.fatalError = null;
    if (this.ws) {
      try {
        this.ws.close(1000, "client disconnect");
      } catch {
        // ignore — terminate as a fallback
        try {
          this.ws.terminate();
        } catch {
          /* noop */
        }
      }
    }
  }

  // ---- internal ----------------------------------------------------------

  private openSocket(): Promise<void> {
    this.lastAttemptCreatedSocket = false;
    return new Promise<void>((resolve, reject) => {
      let settled = false;
      // Set synchronously by `unexpected-response` so a racing `error`
      // event doesn't pre-empt the auth/non-auth classification.
      let classifyingUpgrade = false;
      let socket: WebSocket;
      try {
        socket = new WebSocket(this.buildUrl());
      } catch (err) {
        reject(new WebSocketConnectionError("Failed to open WebSocket", err));
        return;
      }
      this.ws = socket;
      this.lastAttemptCreatedSocket = true;

      const onOpen = () => {
        this.reconnectAttempts = 0;
        this.hasEverConnected = true;
        this.startHeartbeat();
        this.startPing();
        this.replaySubscriptions();
        this.emit("open");
        if (!settled) {
          settled = true;
          resolve();
        }
      };

      const onMessage = (data: WebSocket.RawData) => {
        this.handleMessage(data);
      };

      const onError = (err: Error) => {
        // `error` is always followed by `close`; defer reconnect handling there.
        // If `unexpected-response` already classified the failure as fatal,
        // skip the duplicate generic error.
        if (this.fatalError) {
          if (!settled) {
            settled = true;
            reject(this.fatalError);
          }
          return;
        }
        // An upgrade-failure classification is in flight — let it finish
        // so an auth failure isn't misreported as a generic connection error.
        if (classifyingUpgrade) {
          return;
        }
        this.emit("error", err);
        if (!settled) {
          settled = true;
          reject(new WebSocketConnectionError(err.message, err));
        }
      };

      const onClose = (code: number, reasonBuf: Buffer) => {
        const reason = reasonBuf?.toString() ?? "";
        this.stopHeartbeat();
        this.stopPing();
        this.emit("close", code, reason);
        this.ws = null;
        if (!this.userInitiatedClose && this.hasEverConnected) {
          this.scheduleReconnect();
        }
      };

      const onPong = () => {
        this.clearPongTimeout();
      };

      const onUnexpectedResponse = (
        _req: unknown,
        res: { statusCode?: number; on: (e: string, cb: (...a: any[]) => void) => void },
      ) => {
        classifyingUpgrade = true;
        const chunks: Buffer[] = [];
        let finalized = false;

        const finalize = (err: TwelvedataWebSocketError) => {
          if (finalized) return;
          finalized = true;
          this.fatalError = err;
          this.emit("error", err);
          if (!settled) {
            settled = true;
            reject(err);
          }
          // Force the socket closed so the close handler fires (which will
          // skip reconnect because `fatalError` is set).
          try {
            socket.terminate();
          } catch {
            /* noop */
          }
        };

        // Safety net: if the response stream stalls (no `end`), classify
        // from the status line alone after a short grace period.
        const safetyTimer = setTimeout(() => {
          const status = res.statusCode ?? 0;
          finalize(classifyUpgradeFailure(status, ""));
        }, 2_000);
        safetyTimer.unref?.();

        res.on("data", (chunk: Buffer) => chunks.push(chunk));
        res.on("end", () => {
          clearTimeout(safetyTimer);
          const status = res.statusCode ?? 0;
          const body = Buffer.concat(chunks).toString("utf8");
          finalize(classifyUpgradeFailure(status, body));
        });
      };

      socket.on("open", onOpen);
      socket.on("message", onMessage);
      socket.on("error", onError);
      socket.on("close", onClose);
      socket.on("pong", onPong);
      socket.on("unexpected-response", onUnexpectedResponse);
    });
  }

  private buildUrl(): string {
    const u = new URL(this.url);
    u.searchParams.set("apikey", this.apiKey);
    return u.toString();
  }

  private handleMessage(data: WebSocket.RawData): void {
    let parsed: UnknownEvent;
    try {
      const text = typeof data === "string" ? data : data.toString();
      parsed = JSON.parse(text) as UnknownEvent;
    } catch (err) {
      this.emit(
        "error",
        new TwelvedataWebSocketError(
          `Failed to parse WebSocket message: ${(err as Error).message}`,
        ),
      );
      return;
    }

    switch (parsed.event) {
      case "price":
        this.emit("price", parsed as unknown as PriceEvent);
        break;
      case "subscribe-status": {
        const event = parsed as unknown as SubscribeStatusEvent;
        // Server may return `null` instead of `[]` — normalize so callers
        // can rely on the documented array type.
        event.success = Array.isArray(event.success) ? event.success : [];
        event.fails = Array.isArray(event.fails) ? event.fails : [];
        this.emit("subscribe-status", event);
        break;
      }
      case "heartbeat":
        this.emit("heartbeat", parsed as unknown as HeartbeatEvent);
        break;
      default:
        this.emit("message", parsed);
    }
  }

  private send(payload: unknown): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      this.emit(
        "error",
        new WebSocketConnectionError(
          "Cannot send: WebSocket is not open",
        ),
      );
      return;
    }
    try {
      this.ws.send(JSON.stringify(payload));
    } catch (err) {
      this.emit(
        "error",
        new WebSocketConnectionError(
          `Failed to send WebSocket frame: ${(err as Error).message}`,
          err,
        ),
      );
    }
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    if (this.heartbeatIntervalMs <= 0) return;
    this.heartbeatTimer = setInterval(() => {
      this.heartbeat();
    }, this.heartbeatIntervalMs);
    // Don't keep the Node event loop alive solely for the heartbeat.
    this.heartbeatTimer.unref?.();
  }

  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  private startPing(): void {
    this.stopPing();
    if (this.pingIntervalMs <= 0) return;
    this.pingTimer = setInterval(() => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
      try {
        this.ws.ping();
      } catch {
        // If the ping itself throws, force a reconnect path.
        this.handleDeadConnection();
        return;
      }
      this.armPongTimeout();
    }, this.pingIntervalMs);
    this.pingTimer.unref?.();
  }

  private stopPing(): void {
    if (this.pingTimer) {
      clearInterval(this.pingTimer);
      this.pingTimer = null;
    }
    this.clearPongTimeout();
  }

  private armPongTimeout(): void {
    this.clearPongTimeout();
    if (this.pingTimeoutMs <= 0) return;
    this.pongTimeoutTimer = setTimeout(() => {
      this.emit(
        "error",
        new WebSocketTimeoutError(
          `No pong received within ${this.pingTimeoutMs}ms`,
          this.pingTimeoutMs,
        ),
      );
      this.handleDeadConnection();
    }, this.pingTimeoutMs);
    this.pongTimeoutTimer.unref?.();
  }

  private clearPongTimeout(): void {
    if (this.pongTimeoutTimer) {
      clearTimeout(this.pongTimeoutTimer);
      this.pongTimeoutTimer = null;
    }
  }

  private handleDeadConnection(): void {
    if (!this.ws) return;
    try {
      this.ws.terminate();
    } catch {
      /* noop — close handler will still run */
    }
    // The `close` event will trigger scheduleReconnect.
  }

  private scheduleReconnect(): void {
    if (!this.reconnectConfig.enabled) return;
    // Auth failures and other fatal errors cannot be fixed by retrying.
    if (this.fatalError) return;
    if (this.reconnectAttempts >= this.reconnectConfig.maxAttempts) {
      this.emit(
        "error",
        new WebSocketReconnectError(
          `Reconnect failed after ${this.reconnectAttempts} attempts`,
          this.reconnectAttempts,
        ),
      );
      return;
    }
    const attempt = this.reconnectAttempts + 1;
    const delay = Math.min(
      this.reconnectConfig.initialDelayMs *
        Math.pow(this.reconnectConfig.backoffFactor, this.reconnectAttempts),
      this.reconnectConfig.maxDelayMs,
    );
    this.reconnectAttempts = attempt;
    this.emit("reconnecting", { attempt, delayMs: delay });

    this.clearReconnectTimer();
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.openSocket()
        .then(() => {
          // `onOpen` already replayed tracked subscriptions.
          this.emit("reconnect", { attempt });
        })
        .catch(() => {
          // openSocket already emitted `error`. If a socket actually
          // reached the event loop, its `close` handler will re-trigger
          // the reconnect loop. If `new WebSocket` failed synchronously
          // there is no close event coming — schedule the next attempt
          // ourselves so the loop keeps making progress.
          if (
            !this.lastAttemptCreatedSocket &&
            !this.userInitiatedClose &&
            !this.fatalError
          ) {
            this.scheduleReconnect();
          }
        });
    }, delay);
    this.reconnectTimer.unref?.();
  }

  private clearReconnectTimer(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  private replaySubscriptions(): void {
    if (this.subscriptions.size === 0) return;
    const items = Array.from(this.subscriptions.values());
    this.send({
      action: "subscribe",
      params: { symbols: serializeSymbols(items) },
    });
  }
}

// ---- helpers -------------------------------------------------------------

function resolveReconnect(
  opt: ReconnectOptions | false | undefined,
): ResolvedReconnectConfig {
  if (opt === false) {
    return {
      enabled: false,
      initialDelayMs: DEFAULT_RECONNECT_INITIAL_DELAY_MS,
      maxDelayMs: DEFAULT_RECONNECT_MAX_DELAY_MS,
      maxAttempts: 0,
      backoffFactor: DEFAULT_RECONNECT_BACKOFF_FACTOR,
    };
  }
  return {
    enabled: true,
    initialDelayMs: opt?.initialDelayMs ?? DEFAULT_RECONNECT_INITIAL_DELAY_MS,
    maxDelayMs: opt?.maxDelayMs ?? DEFAULT_RECONNECT_MAX_DELAY_MS,
    maxAttempts: opt?.maxAttempts ?? DEFAULT_RECONNECT_MAX_ATTEMPTS,
    backoffFactor: opt?.backoffFactor ?? DEFAULT_RECONNECT_BACKOFF_FACTOR,
  };
}

function normalizeInput(input: SubscribeInput): Array<string | SubscribeSymbol> {
  const raw = Array.isArray(input) ? input.filter(Boolean) : [input];
  const out: Array<string | SubscribeSymbol> = [];
  for (const item of raw) {
    if (typeof item === "string") {
      // Split comma-separated tickers so canonical-key dedup works at the
      // individual symbol level (e.g. "AAPL,MSFT" + "AAPL" → {AAPL, MSFT}).
      for (const part of item.split(",")) {
        const trimmed = part.trim();
        if (trimmed) out.push(trimmed);
      }
    } else {
      out.push(item);
    }
  }
  return out;
}

/**
 * Build the value sent as `params.symbols`. A single string is sent as-is
 * (allowing callers to use the comma-separated form documented by Twelvedata),
 * a single object is wrapped in an array, and arrays are passed through.
 */
function serializeSymbols(
  items: Array<string | SubscribeSymbol>,
): string | SubscribeSymbol[] {
  if (items.length === 1 && typeof items[0] === "string") {
    return items[0];
  }
  if (items.every((i): i is string => typeof i === "string")) {
    return items.join(",");
  }
  return items.map((i) => (typeof i === "string" ? { symbol: i } : i));
}

/**
 * Inspect a non-101 upgrade response and return the most specific error class.
 * Twelvedata returns a JSON body like `{"code":401,"message":"...","status":"error"}`
 * for authentication failures, but the HTTP status itself can vary
 * (observed: 200 with an error body, 401, 403).
 */
function classifyUpgradeFailure(
  status: number,
  body: string,
): TwelvedataWebSocketError {
  let parsed: { code?: number; message?: string; status?: string } | null = null;
  try {
    parsed = JSON.parse(body);
  } catch {
    /* not JSON — fall through */
  }

  const message =
    parsed?.message ??
    (body ? body.slice(0, 200) : `HTTP ${status} from WebSocket upgrade`);
  const code = parsed?.code ?? status;

  const isAuth =
    code === 401 ||
    code === 403 ||
    status === 401 ||
    status === 403 ||
    /api[\s_-]?key|unauthor|forbidden|invalid token/i.test(message);

  if (isAuth) {
    return new WebSocketAuthError(`Authentication failed: ${message}`);
  }
  return new WebSocketConnectionError(
    `Unexpected server response (HTTP ${status}): ${message}`,
  );
}

function canonicalKey(item: string | SubscribeSymbol): string {
  if (typeof item === "string") return `s:${item}`;
  return `o:${JSON.stringify({
    symbol: item.symbol,
    exchange: item.exchange ?? "",
    mic_code: item.mic_code ?? "",
    type: item.type ?? "",
  })}`;
}
