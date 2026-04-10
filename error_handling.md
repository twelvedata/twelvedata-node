## Error Handling

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
        console.log(response.data);
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
