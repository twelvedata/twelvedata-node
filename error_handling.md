## API errors

All API errors are thrown as typed exceptions that extend `TwelvedataApiError`. You can use `instanceof` checks to handle specific HTTP error scenarios.

| Exception | HTTP Status | Description |
|---|---|---|
| `BadRequestError` | 400 | Invalid parameters were supplied to the API |
| `UnauthorizedError` | 401 | Invalid or missing API key |
| `ForbiddenError` | 403 | Access denied to the requested resource |
| `NotFoundError` | 404 | The requested resource does not exist |
| `ParameterTooLongError` | 414 | A request parameter exceeds the maximum allowed length |
| `TooManyRequestsError` | 429 | API rate limit exceeded |
| `InternalServerError` | 500 | Unexpected server-side error |

If the API returns an unrecognized HTTP status with a valid error body, a generic `TwelvedataApiError` is thrown. Non-API errors (network failures, timeouts, etc.) are not wrapped and propagate as-is.

Every `TwelvedataApiError` exposes the following properties:
- `statusCode` — HTTP status code (e.g. 400, 401)
- `code` — Twelvedata-specific error code
- `status` — Twelvedata error status string
- `message` — Human-readable error description

For the complete list of API error codes and their meanings, see the [Twelve Data Errors documentation](https://twelvedata.com/docs/introduction/errors).

```typescript
import {
    MarketDataApi,
    CreateConfig,
    TwelvedataApiError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ParameterTooLongError,
    TooManyRequestsError,
    InternalServerError,
} from "@twelvedata/twelvedata-node";

const config = CreateConfig();
const api = new MarketDataApi(config);

async function main() {
    try {
        const response = await api.getPrice({
            symbol: "AAPL",
        });
        console.log(response);
    } catch (error) {
        if (error instanceof TwelvedataApiError) {
            // All API errors have statusCode, code, status, and message
            console.error(`API error [${error.statusCode}]: ${error.message}`);

            if (error instanceof BadRequestError) {
                // Invalid parameters were supplied to the API
            }
            if (error instanceof UnauthorizedError) {
                // Invalid or missing API key
            }
            if (error instanceof ForbiddenError) {
                // Access denied to the requested resource
            }
            if (error instanceof NotFoundError) {
                // The requested resource does not exist
            }
            if (error instanceof ParameterTooLongError) {
                // A request parameter exceeds the maximum allowed length
            }
            if (error instanceof TooManyRequestsError) {
                // API rate limit exceeded — consider adding a delay and retrying
            }
            if (error instanceof InternalServerError) {
                // Unexpected server-side error — retry later
            }
        } else {
            // Non-API errors (network failures, timeouts, etc.)
            console.error(error);
        }
    }
}

main().catch(console.error);
```

## WebSocket errors

All WebSocket errors extend `TwelvedataWebSocketError`. They are surfaced in
two places: `connect()` rejects with the first error it encounters, and any
error that occurs after a successful connection is delivered via the
`error` event on the client. Fatal errors (e.g. an invalid API key) suppress
the auto-reconnect loop so the client fails fast instead of retrying
indefinitely.

| Exception | Raised when |
|---|---|
| `WebSocketAuthError` | API key is missing, invalid, or rejected by the server during the upgrade handshake. **Not retried.** |
| `WebSocketConnectionError` | Socket failed to open, a send failed, or the server returned an unexpected non-auth response. |
| `WebSocketTimeoutError` | No pong reply received within `pingTimeoutMs`. Triggers a reconnect. |
| `WebSocketReconnectError` | Reconnect attempts were exhausted (hit `reconnect.maxAttempts`). |

```typescript
import {
    TwelvedataWebSocketClient,
    TwelvedataWebSocketError,
    WebSocketAuthError,
    WebSocketReconnectError,
} from "@twelvedata/twelvedata-node";

const client = new TwelvedataWebSocketClient();

client.on("error", (error) => {
    if (error instanceof TwelvedataWebSocketError) {
        console.error(`WebSocket error [${error.name}]: ${error.message}`);

        if (error instanceof WebSocketReconnectError) {
            // Retries exhausted — client is inert until connect() is called again
        }
    } else {
        // Non-library error (e.g. low-level socket error propagated from `ws`)
        console.error(error);
    }
});

try {
    await client.connect();
} catch (error) {
    if (error instanceof WebSocketAuthError) {
        // Invalid / missing API key — not retried; fail fast.
        process.exit(1);
    }
    throw error;
}

client.subscribe("AAPL");
```
