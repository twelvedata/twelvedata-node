# Twelve Data API client for Node.js

Twelve Data official library. This package supports all main features of the service:
- Real-time and historical market data: time series, quotes, end-of-day prices, exchange rates, and market movers.
- Fundamentals: financial statements, earnings, dividends, splits, company profiles, and key statistics.
- 100+ technical indicators: SMA, EMA, RSI, MACD, Bollinger Bands, Ichimoku, and many more.
- Analysis & estimates: analyst ratings, price targets, EPS trends, revenue and growth estimates.
- ETFs and mutual funds: summaries, composition, performance, risk, and ratings.

🔑 **API key** is required. If you don't have it yet, get it by [signing up here](https://twelvedata.com/pricing).

## Requirements
Ensure you have Node.js v18.0.0 or later. We recommend the latest LTS version. Use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) for Node version management across projects.

## Installation

```bash
npm install @twelvedata/twelvedata-node
# or
yarn add @twelvedata/twelvedata-node
```

🔗 View the package on [npm](https://www.npmjs.com/package/@twelvedata/twelvedata-node).

## Quick start

### 1. Set up a new project
```bash
npm init -y && npm pkg set type=module && npm i @twelvedata/twelvedata-node
```

### 2. Set up environment variables
Create `.env` file and add to it: `TWELVEDATA_API_KEY=your_api_key`.

### 3. Create `time-series.ts` script

> `CreateConfig()` reads `TWELVEDATA_API_KEY` from `process.env` when no
> `apiKey` argument is passed. The library does not load `.env` files itself —
> load them in your application (e.g. via `import "dotenv/config";`) or set
> the variable in your environment before calling `CreateConfig()`.

```typescript
import "dotenv/config";

import { MarketDataApi, CreateConfig, TwelvedataApiError } from "@twelvedata/twelvedata-node";

const config = CreateConfig();
const api = new MarketDataApi(config);

async function main() {
    try {
        const response = await api.getTimeSeries({
            interval: "1day",
            symbol: "AAPL",
            outputsize: 5,
        });
        console.log(response.data);
    } catch (error) {
        if (error instanceof TwelvedataApiError) {
            console.error("API error:", error);
        }
        console.error("Unexpected error:", error);
    }
}

main().catch(console.error);
```

### 4. Run the script
```bash
npx ts-node time-series.ts
```

👀 Check the full example and other examples [here](https://github.com/twelvedata/twelvedata-node/tree/master/examples).
## WebSocket

The library ships with a WebSocket client for streaming real-time prices from
Twelve Data. It handles authorization, sends both application-level heartbeats
and protocol-level pings, detects dead connections, and automatically
reconnects with exponential backoff — re-subscribing to your active symbols on
the way back up.

> WebSocket streaming is available on the **Pro** (individual) and **Venture**
> (business) plans and above. **Basic** and **Grow** plans are limited to one
> connection and up to 8 simultaneous subscriptions from the
> [trial symbol list](https://support.twelvedata.com/en/articles/5335783-trial).
> See the [WebSocket FAQ](https://support.twelvedata.com/en/articles/5194610-websocket-faq)
> for more details.
### Usage

The client reads `TWELVEDATA_API_KEY` from `process.env` when no `apiKey`
option is passed. The library does not load `.env` files itself — load them
in your application (e.g. via `dotenv/config`) or set the variable in your
environment before calling `connect()`.

```typescript
import "dotenv/config";

import {
    TwelvedataWebSocketClient,
    TwelvedataWebSocketError,
    WebSocketAuthError,
} from "@twelvedata/twelvedata-node";

const client = new TwelvedataWebSocketClient();

client.on("price", (event) => {
    console.log(`${event.symbol} @ ${event.price} (${event.timestamp})`);
});

client.on("subscribe-status", (event) => {
    console.log("Subscribed:", event.success.map((s) => s.symbol));
    if (event.fails.length) {
        console.warn("Failed:", event.fails);
    }
});

client.on("reconnecting", ({ attempt, delayMs }) => {
    console.log(`Reconnecting (attempt ${attempt}) in ${delayMs}ms…`);
});

client.on("error", (error) => {
    if (error instanceof TwelvedataWebSocketError) {
        console.error("WebSocket error:", error.name, error.message);
    } else {
        console.error("Unexpected error:", error);
    }
});

async function main() {
    try {
        await client.connect();
    } catch (error) {
        if (error instanceof WebSocketAuthError) {
            // Invalid / missing API key — not retried.
            process.exit(1);
        }
        throw error;
    }

    client.subscribe("AAPL,EUR/USD,BTC/USD");

    // Later, if you want to stop:
    // client.unsubscribe("BTC/USD");
    // client.disconnect();
}

main().catch(console.error);
```

For the full list of WebSocket error types and recommended handling, see
[WebSocket errors](error_handling.md#websocket-errors).

### WebSocket client configuration

All timing and retry knobs are exported as constants and can be overridden via
constructor options:

```typescript
import {
    TwelvedataWebSocketClient,
    DEFAULT_HEARTBEAT_INTERVAL_MS,
} from "@twelvedata/twelvedata-node";

const client = new TwelvedataWebSocketClient({
    apiKey: process.env.TWELVEDATA_API_KEY, // optional; falls back to env var
    heartbeatIntervalMs: DEFAULT_HEARTBEAT_INTERVAL_MS, // 10_000 by default
    pingIntervalMs: 30_000,
    pingTimeoutMs: 10_000,
    reconnect: {
        initialDelayMs: 1_000,
        maxDelayMs: 30_000,
        maxAttempts: 10,
        backoffFactor: 2,
    },
    // Pass `reconnect: false` to disable automatic reconnection entirely.
});
```

👀 Check the full example and other examples [here](https://github.com/twelvedata/twelvedata-node/tree/master/examples).

## Error Handling

See [error_handling.md](error_handling.md) for error types, properties, and usage examples.

For the complete list of API error codes and their meanings, see the [Twelve Data Errors documentation](https://twelvedata.com/docs/introduction/errors).

## API Reference

See [api_reference.md](api_reference.md) for the complete list of API endpoints and models.

## Documentation
Delve deeper with our [official documentation](https://twelvedata.com/docs).

## Examples
Explore practical scenarios in the [examples](https://github.com/twelvedata/twelvedata-node/tree/master/examples) directory.

## Support
- 🌐 Visit our [contact page](https://twelvedata.com/contact).
- 🛠 Or our [support center](https://support.twelvedata.com/).

## Stay updated
- Follow us on [𝕏](https://twitter.com/TwelveData).
- Follow us on [Telegram](https://t.me/twelvedata).

## Contributing
1. Fork and clone: `$ git clone https://github.com/twelvedata/twelvedata-node .`.
2. Branch out: `$ git checkout -b my-feature`.
3. Commit changes and test.
4. Push your branch and open a pull request with a comprehensive description.

For more guidance on contributing, see the [GitHub Docs](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) on GitHub.

## License

This project is licensed under the MIT. See the `LICENSE.txt` file in this repository for more details.