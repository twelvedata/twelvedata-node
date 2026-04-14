import "dotenv/config";

import {
  TechnicalIndicatorApi,
  CreateConfig,
} from "@twelvedata/twelvedata-node";

const config = CreateConfig();
const api = new TechnicalIndicatorApi(config);

async function main() {
  const response = await api.getTimeSeriesRsi({
    interval: "1day",
    symbol: "AAPL",
    timezone: "UTC",
    outputsize: 10,
  });
  console.log(response);
}

main().catch(console.error);
