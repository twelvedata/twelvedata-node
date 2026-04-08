import {
  TechnicalIndicatorApi,
  CreateConfig,
} from "@twelvedata/twelvedata-node";

const config = CreateConfig();
const api = new TechnicalIndicatorApi(config);

async function main() {
  const response = await api.getTimeSeriesBBands({
    interval: "1day",
    symbol: "AAPL",
    outputsize: 10,
  });
  console.log(response.data);
}

main().catch(console.error);
