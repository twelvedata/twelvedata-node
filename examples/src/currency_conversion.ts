import "dotenv/config";

import { CurrenciesApi, CreateConfig } from "@twelvedata/twelvedata-node";

const config = CreateConfig();
const api = new CurrenciesApi(config);

async function main() {
  const response = await api.getCurrencyConversion({
    symbol: "USD/EUR",
    amount: 100,
  });
  console.log(response);
}

main().catch(console.error);
