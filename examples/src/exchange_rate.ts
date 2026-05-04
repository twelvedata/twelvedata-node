import { CurrenciesApi, CreateConfig } from "@twelvedata/twelvedata-node";

const config = CreateConfig();
const api = new CurrenciesApi(config);

async function main() {
  const response = await api.getExchangeRate({
    symbol: "USD/EUR",
  });
  console.log(response);
}

main().catch(console.error);
