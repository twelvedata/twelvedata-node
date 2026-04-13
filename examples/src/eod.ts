import "dotenv/config";

import { MarketDataApi, CreateConfig } from "@twelvedata/twelvedata-node";

const config = CreateConfig();
const api = new MarketDataApi(config);

async function main() {
  const response = await api.getEod({
    symbol: "AAPL",
  });
  console.log(response.data);
}

main().catch(console.error);
