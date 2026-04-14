/**
 * Default constants for the Twelvedata WebSocket client.
 *
 * All values are exported so they can be referenced by callers and overridden
 * via {@link TwelvedataWebSocketOptions} on the client constructor.
 */

/** Default WebSocket endpoint for real-time price streaming. */
export const DEFAULT_WS_URL = "wss://ws.twelvedata.com/v1/quotes/price";

/**
 * How often to send the application-level `{"action":"heartbeat"}` frame.
 * Twelvedata recommends ~10 seconds to keep the connection stable.
 */
export const DEFAULT_HEARTBEAT_INTERVAL_MS = 10_000;

/** How often to send a WebSocket-protocol ping frame. */
export const DEFAULT_PING_INTERVAL_MS = 30_000;

/**
 * Maximum time to wait for a pong reply before treating the connection as
 * dead and forcing a reconnect.
 */
export const DEFAULT_PING_TIMEOUT_MS = 10_000;

/** Initial delay between reconnect attempts, in milliseconds. */
export const DEFAULT_RECONNECT_INITIAL_DELAY_MS = 1_000;

/** Upper bound on the reconnect delay, in milliseconds. */
export const DEFAULT_RECONNECT_MAX_DELAY_MS = 30_000;

/** Maximum number of reconnect attempts before giving up. Set to `Infinity` to retry forever. */
export const DEFAULT_RECONNECT_MAX_ATTEMPTS = 10;

/** Multiplier applied to the reconnect delay after each failed attempt. */
export const DEFAULT_RECONNECT_BACKOFF_FACTOR = 2;
