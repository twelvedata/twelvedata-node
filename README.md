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

```typescript
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