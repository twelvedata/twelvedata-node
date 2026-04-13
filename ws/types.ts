/**
 * TypeScript types for the Twelvedata WebSocket client.
 */

/** Reconnect strategy options. Pass `false` on the client to disable reconnect entirely. */
export interface ReconnectOptions {
  /** Initial delay before the first reconnect attempt, in milliseconds. */
  initialDelayMs?: number;
  /** Maximum delay between reconnect attempts, in milliseconds. */
  maxDelayMs?: number;
  /** Maximum number of reconnect attempts. Use `Infinity` to retry forever. */
  maxAttempts?: number;
  /** Multiplier applied to the delay after each failed attempt. */
  backoffFactor?: number;
}

/** Constructor options for {@link TwelvedataWebSocketClient}. */
export interface TwelvedataWebSocketOptions {
  /**
   * Twelvedata API key. Falls back to `process.env.TWELVEDATA_API_KEY` if not provided.
   * Throws if neither is available.
   */
  apiKey?: string;
  /** Override the WebSocket endpoint URL. Defaults to {@link DEFAULT_WS_URL}. */
  url?: string;
  /** Interval between application-level heartbeat frames, in milliseconds. */
  heartbeatIntervalMs?: number;
  /** Interval between WebSocket-protocol ping frames, in milliseconds. */
  pingIntervalMs?: number;
  /** Maximum time to wait for a pong reply before reconnecting, in milliseconds. */
  pingTimeoutMs?: number;
  /** Reconnect strategy. Set to `false` to disable automatic reconnection. */
  reconnect?: ReconnectOptions | false;
}

/**
 * Extended subscription descriptor. Use this when the bare symbol ticker is
 * ambiguous and you need to disambiguate by exchange, MIC code, or instrument type.
 */
export interface SubscribeSymbol {
  symbol: string;
  exchange?: string;
  mic_code?: string;
  type?: string;
}

/** Input accepted by `subscribe()` / `unsubscribe()`. */
export type SubscribeInput =
  | string
  | SubscribeSymbol
  | Array<string | SubscribeSymbol>;

/** Real-time price tick event from the server. */
export interface PriceEvent {
  event: "price";
  symbol: string;
  currency?: string;
  currency_base?: string;
  currency_quote?: string;
  exchange?: string;
  mic_code?: string;
  type?: string;
  timestamp: number;
  price: number;
  bid?: number;
  ask?: number;
  day_volume?: number;
  [key: string]: unknown;
}

/** Per-symbol entry inside a `subscribe-status` event. */
export interface SubscribeStatusItem {
  symbol: string;
  exchange?: string;
  mic_code?: string;
  country?: string;
  type?: string;
  [key: string]: unknown;
}

/** Status event returned in response to a `subscribe` / `unsubscribe` action. */
export interface SubscribeStatusEvent {
  event: "subscribe-status";
  status: "ok" | "error" | string;
  success: SubscribeStatusItem[];
  fails: SubscribeStatusItem[];
  [key: string]: unknown;
}

/** Server acknowledgement of a heartbeat. */
export interface HeartbeatEvent {
  event: "heartbeat";
  status?: string;
  [key: string]: unknown;
}

/** Catch-all for any other event the server may emit. */
export interface UnknownEvent {
  event?: string;
  [key: string]: unknown;
}

/** Payload emitted with the `reconnecting` event. */
export interface ReconnectingEventPayload {
  attempt: number;
  delayMs: number;
}

/** Payload emitted with the `reconnect` event (after a successful reconnection). */
export interface ReconnectEventPayload {
  attempt: number;
}

/**
 * Map of event names to listener payloads. Used to give `.on()` / `.emit()`
 * strong types via TypeScript declaration merging.
 */
export interface WebSocketEventMap {
  open: [];
  close: [code: number, reason: string];
  error: [error: Error];
  message: [data: UnknownEvent];
  price: [event: PriceEvent];
  "subscribe-status": [event: SubscribeStatusEvent];
  heartbeat: [event: HeartbeatEvent];
  reconnecting: [payload: ReconnectingEventPayload];
  reconnect: [payload: ReconnectEventPayload];
}
