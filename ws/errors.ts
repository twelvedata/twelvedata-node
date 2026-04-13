/**
 * Error classes for the Twelvedata WebSocket client.
 *
 * Modeled after the REST `errors.ts` style: subclass `Error`, set `name`,
 * keep extra context as readonly fields.
 */

export class TwelvedataWebSocketError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TwelvedataWebSocketError";
  }
}

/** Raised when the underlying socket cannot be opened or fails mid-connection. */
export class WebSocketConnectionError extends TwelvedataWebSocketError {
  constructor(
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = "WebSocketConnectionError";
  }
}

/** Raised when an API key is missing or rejected by the server. */
export class WebSocketAuthError extends TwelvedataWebSocketError {
  constructor(message: string) {
    super(message);
    this.name = "WebSocketAuthError";
  }
}

/** Raised when no pong reply is received within the configured timeout. */
export class WebSocketTimeoutError extends TwelvedataWebSocketError {
  constructor(
    message: string,
    public readonly timeoutMs: number,
  ) {
    super(message);
    this.name = "WebSocketTimeoutError";
  }
}

/** Raised when reconnect attempts have been exhausted. */
export class WebSocketReconnectError extends TwelvedataWebSocketError {
  constructor(
    message: string,
    public readonly attempts: number,
  ) {
    super(message);
    this.name = "WebSocketReconnectError";
  }
}
