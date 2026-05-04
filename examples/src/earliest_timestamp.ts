import { ReferenceDataApi, CreateConfig } from "@twelvedata/twelvedata-node";

const config = CreateConfig();
const api = new ReferenceDataApi(config);

async function main() {
  const response = await api.getEarliestTimestamp({
    interval: "1day",
    symbol: "AAPL",
  });
  console.log(response);
}

main().catch(console.error);
