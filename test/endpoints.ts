import "dotenv/config";

import {
  AdvancedApi,
  AnalysisApi,
  CurrenciesApi,
  EtfsApi,
  FundamentalsApi,
  MarketDataApi,
  MutualFundsApi,
  ReferenceDataApi,
  RegulatoryApi,
  TechnicalIndicatorApi,
} from "../api";
import { CreateConfig } from "../configuration";
import { SourceEnum } from "../models";

const SYMBOL_STOCK = "AAPL";
const INTERVAL = "1day";
const TIMEZONE = "UTC";
const OUTPUTSIZE = 10;
const MIC_CODE = "XNAS";
const SYMBOL_ETF = "SPY";
const SYMBOL_FOREX = "EUR/USD";
const SYMBOL_CRYPTO = "BTC/USD";
const SYMBOL_MUTUAL_FUND = "VFINX";
const CURRENCY_AMOUNT = 100;
const START_DATE = "2025-01-01";
const END_DATE = "2025-01-31";
const FOREX_BASE = "EUR";
const FOREX_QUOTE = "USD";
const SANCTIONS_SOURCE = SourceEnum.OFAC;
const DELAY_MS = 200;

const config = CreateConfig();

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let passed = 0;
let failed = 0;

async function runTest(name: string, fn: () => Promise<void>): Promise<void> {
  try {
    await fn();
    console.log(`✓ ${name}`);
    passed++;
  } catch (e: any) {
    console.log(`✗ ${name}: ${e.message}`);
    failed++;
  }
  await delay(DELAY_MS);
}

function assert(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

// --- CurrenciesApi ---

const currenciesApi = new CurrenciesApi(config);

// --- MarketDataApi ---

const marketDataApi = new MarketDataApi(config);

async function testMarketDataGetTimeSeries(): Promise<void> {
  const response = await marketDataApi.getTimeSeries({
    symbol: SYMBOL_STOCK,
    interval: INTERVAL,
    outputsize: OUTPUTSIZE,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.values) && response.data.values.length > 0,
    "expected non-empty values array",
  );
  console.log(response.data.values[0]);
}

async function testMarketDataGetExchangeRate(): Promise<void> {
  const response = await currenciesApi.getExchangeRate({
    symbol: SYMBOL_FOREX,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data.rate != null, "expected rate to be present");
  console.log(response.data);
}

async function testMarketDataGetPrice(): Promise<void> {
  const response = await marketDataApi.getPrice({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data.price != null, "expected price to be present");
  console.log(response.data);
}

async function testMarketDataGetQuote(): Promise<void> {
  const response = await marketDataApi.getQuote({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data.symbol != null, "expected symbol to be present");
  console.log(response.data);
}

async function testMarketDataGetEod(): Promise<void> {
  const response = await marketDataApi.getEod({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data.close != null, "expected close to be present");
  console.log(response.data);
}

async function testMarketDataGetCurrencyConversion(): Promise<void> {
  const response = await currenciesApi.getCurrencyConversion({
    symbol: SYMBOL_FOREX,
    amount: CURRENCY_AMOUNT,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data.rate != null, "expected rate to be present");
  console.log(response.data);
}

async function testMarketDataGetMarketMovers(): Promise<void> {
  const response = await marketDataApi.getMarketMovers({
    market: "stocks" as any,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.values) && response.data.values.length > 0,
    "expected non-empty values array",
  );
  console.log(response.data.values[0]);
}

async function testMarketDataGetTimeSeriesCross(): Promise<void> {
  const response = await marketDataApi.getTimeSeriesCross({
    base: FOREX_BASE,
    quote: FOREX_QUOTE,
    interval: INTERVAL,
    outputsize: OUTPUTSIZE,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.values) && response.data.values.length > 0,
    "expected non-empty values array",
  );
  console.log(response.data.values[0]);
}

// --- FundamentalsApi ---

const fundamentalsApi = new FundamentalsApi(config);

async function testFundamentalsGetIpoCalendar(): Promise<void> {
  const response = await fundamentalsApi.getIpoCalendar({
    startDate: START_DATE,
    endDate: END_DATE,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    response.data != null && Object.keys(response.data).length > 0,
    "expected non-empty response data",
  );
  console.log(response.data);
}

async function testFundamentalsGetEarningsCalendar(): Promise<void> {
  const response = await fundamentalsApi.getEarningsCalendar({});
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetDividendsCalendar(): Promise<void> {
  const response = await fundamentalsApi.getDividendsCalendar({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetSplitsCalendar(): Promise<void> {
  const response = await fundamentalsApi.getSplitsCalendar({
    startDate: START_DATE,
    endDate: END_DATE,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetEarnings(): Promise<void> {
  const response = await fundamentalsApi.getEarnings({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetDividends(): Promise<void> {
  const response = await fundamentalsApi.getDividends({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetSplits(): Promise<void> {
  const response = await fundamentalsApi.getSplits({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetBalanceSheet(): Promise<void> {
  const response = await fundamentalsApi.getBalanceSheet({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetCashFlow(): Promise<void> {
  const response = await fundamentalsApi.getCashFlow({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetIncomeStatement(): Promise<void> {
  const response = await fundamentalsApi.getIncomeStatement({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetProfile(): Promise<void> {
  const response = await fundamentalsApi.getProfile({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data.symbol != null, "expected symbol to be present");
  console.log(response.data);
}

async function testFundamentalsGetStatistics(): Promise<void> {
  const response = await fundamentalsApi.getStatistics({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data.statistics != null, "expected statistics to be present");
  console.log(response.data);
}

async function testFundamentalsGetMarketCap(): Promise<void> {
  const response = await fundamentalsApi.getMarketCap({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetKeyExecutives(): Promise<void> {
  const response = await fundamentalsApi.getKeyExecutives({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetLogo(): Promise<void> {
  const response = await fundamentalsApi.getLogo({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testFundamentalsGetPressReleases(): Promise<void> {
  const response = await fundamentalsApi.pressReleasesListParameters({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

// --- AnalysisApi ---

const analysisApi = new AnalysisApi(config);

async function testAnalysisGetAnalystRatingsUsEquities(): Promise<void> {
  const response = await analysisApi.getAnalystRatingsUsEquities({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testAnalysisGetPriceTarget(): Promise<void> {
  const response = await analysisApi.getPriceTarget({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testAnalysisGetRecommendations(): Promise<void> {
  const response = await analysisApi.getRecommendations({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testAnalysisGetEarningsEstimate(): Promise<void> {
  const response = await analysisApi.getEarningsEstimate({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testAnalysisGetEpsRevisions(): Promise<void> {
  const response = await analysisApi.getEpsRevisions({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testAnalysisGetEpsTrend(): Promise<void> {
  const response = await analysisApi.getEpsTrend({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testAnalysisGetGrowthEstimates(): Promise<void> {
  const response = await analysisApi.getGrowthEstimates({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testAnalysisGetRevenueEstimate(): Promise<void> {
  const response = await analysisApi.getRevenueEstimate({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

// --- EtfsApi ---

const etfsApi = new EtfsApi(config);

async function testEtfsGetETFsWorld(): Promise<void> {
  const response = await etfsApi.getETFsWorld({ symbol: SYMBOL_ETF });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data.etf != null, "expected etf to be present");
  console.log(response.data);
}

async function testEtfsGetETFsWorldSummary(): Promise<void> {
  const response = await etfsApi.getETFsWorldSummary({ symbol: SYMBOL_ETF });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testEtfsGetETFsWorldComposition(): Promise<void> {
  const response = await etfsApi.getETFsWorldComposition({
    symbol: SYMBOL_ETF,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testEtfsGetETFsWorldPerformance(): Promise<void> {
  const response = await etfsApi.getETFsWorldPerformance({
    symbol: SYMBOL_ETF,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testEtfsGetETFsWorldRisk(): Promise<void> {
  const response = await etfsApi.getETFsWorldRisk({ symbol: SYMBOL_ETF });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

// --- MutualFundsApi ---

const mutualFundsApi = new MutualFundsApi(config);

async function testMutualFundsGetMutualFundsWorld(): Promise<void> {
  const response = await mutualFundsApi.getMutualFundsWorld({
    symbol: SYMBOL_MUTUAL_FUND,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testMutualFundsGetMutualFundsWorldSummary(): Promise<void> {
  const response = await mutualFundsApi.getMutualFundsWorldSummary({
    symbol: SYMBOL_MUTUAL_FUND,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testMutualFundsGetMutualFundsWorldComposition(): Promise<void> {
  const response = await mutualFundsApi.getMutualFundsWorldComposition({
    symbol: SYMBOL_MUTUAL_FUND,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testMutualFundsGetMutualFundsWorldPerformance(): Promise<void> {
  const response = await mutualFundsApi.getMutualFundsWorldPerformance({
    symbol: SYMBOL_MUTUAL_FUND,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testMutualFundsGetMutualFundsWorldRisk(): Promise<void> {
  const response = await mutualFundsApi.getMutualFundsWorldRisk({
    symbol: SYMBOL_MUTUAL_FUND,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testMutualFundsGetMutualFundsWorldRatings(): Promise<void> {
  const response = await mutualFundsApi.getMutualFundsWorldRatings({
    symbol: SYMBOL_MUTUAL_FUND,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testMutualFundsGetMutualFundsWorldPurchaseInfo(): Promise<void> {
  const response = await mutualFundsApi.getMutualFundsWorldPurchaseInfo({
    symbol: SYMBOL_MUTUAL_FUND,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testMutualFundsGetMutualFundsWorldSustainability(): Promise<void> {
  const response = await mutualFundsApi.getMutualFundsWorldSustainability({
    symbol: SYMBOL_MUTUAL_FUND,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

// --- ReferenceDataApi ---

const referenceDataApi = new ReferenceDataApi(config);

async function testReferenceDataGetStocks(): Promise<void> {
  const response = await referenceDataApi.getStocks({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.data) && response.data.data.length > 0,
    "expected non-empty data array",
  );
  console.log(response.data.data[0]);
}

async function testReferenceDataGetETFsList(): Promise<void> {
  const response = await etfsApi.getETFsList({ symbol: SYMBOL_ETF });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.result?.list) &&
      (response.data.result?.list?.length ?? 0) > 0,
    "expected non-empty data array",
  );
  console.log(response.data.result?.list[0]);
}

async function testReferenceDataGetCryptocurrencies(): Promise<void> {
  const response = await referenceDataApi.getCryptocurrencies({
    symbol: SYMBOL_CRYPTO,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.data) && response.data.data.length > 0,
    "expected non-empty data array",
  );
  console.log(response.data.data[0]);
}

async function testReferenceDataGetForexPairs(): Promise<void> {
  const response = await referenceDataApi.getForexPairs({
    symbol: SYMBOL_FOREX,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.data) && response.data.data.length > 0,
    "expected non-empty data array",
  );
  console.log(response.data.data[0]);
}

async function testReferenceDataGetExchanges(): Promise<void> {
  const response = await referenceDataApi.getExchanges({});
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.data) && response.data.data.length > 0,
    "expected non-empty data array",
  );
  console.log(response.data.data[0]);
}

async function testReferenceDataGetCountries(): Promise<void> {
  const response = await referenceDataApi.getCountries({});
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.data) && response.data.data.length > 0,
    "expected non-empty data array",
  );
  console.log(response.data.data[0]);
}

async function testReferenceDataGetIntervals(): Promise<void> {
  const response = await referenceDataApi.getIntervals({});
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testReferenceDataGetMarketState(): Promise<void> {
  const response = await referenceDataApi.getMarketState({});
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data) && response.data.length > 0,
    "expected non-empty array",
  );
  console.log(response.data[0]);
}

async function testReferenceDataGetEarliestTimestamp(): Promise<void> {
  const response = await referenceDataApi.getEarliestTimestamp({
    symbol: SYMBOL_STOCK,
    interval: INTERVAL,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testReferenceDataGetSymbolSearch(): Promise<void> {
  const response = await referenceDataApi.getSymbolSearch({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testReferenceDataGetInstrumentType(): Promise<void> {
  const response = await referenceDataApi.getInstrumentType();
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testReferenceDataGetCrossListings(): Promise<void> {
  const response = await referenceDataApi.getCrossListings({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

// --- RegulatoryApi ---

const regulatoryApi = new RegulatoryApi(config);

async function testRegulatoryGetDirectHolders(): Promise<void> {
  const response = await regulatoryApi.getDirectHolders({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testRegulatoryGetFundHolders(): Promise<void> {
  const response = await regulatoryApi.getFundHolders({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testRegulatoryGetInstitutionalHolders(): Promise<void> {
  const response = await regulatoryApi.getInstitutionalHolders({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testRegulatoryGetInsiderTransactions(): Promise<void> {
  const response = await regulatoryApi.getInsiderTransactions({
    symbol: SYMBOL_STOCK,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testRegulatoryGetTaxInfo(): Promise<void> {
  const response = await regulatoryApi.getTaxInfo({ symbol: SYMBOL_STOCK });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

async function testRegulatoryGetSourceSanctionedEntities(): Promise<void> {
  const response = await regulatoryApi.getSourceSanctionedEntities({
    source: SANCTIONS_SOURCE,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

// --- TechnicalIndicatorApi (2 only) ---

const technicalIndicatorApi = new TechnicalIndicatorApi(config);

async function testTechnicalIndicatorGetTimeSeriesRsi(): Promise<void> {
  const response = await technicalIndicatorApi.getTimeSeriesRsi({
    symbol: SYMBOL_STOCK,
    interval: INTERVAL,
    outputsize: OUTPUTSIZE,
    timezone: TIMEZONE,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.values) && response.data.values.length > 0,
    "expected non-empty values array",
  );
  console.log(response.data.values[0]);
}

async function testTechnicalIndicatorGetTimeSeriesMacd(): Promise<void> {
  const response = await technicalIndicatorApi.getTimeSeriesMacd({
    symbol: SYMBOL_STOCK,
    interval: INTERVAL,
    outputsize: OUTPUTSIZE,
    timezone: TIMEZONE,
  });
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(
    Array.isArray(response.data.values) && response.data.values.length > 0,
    "expected non-empty values array",
  );
  console.log(response.data.values[0]);
}

// --- AdvancedApi ---

const advancedApi = new AdvancedApi(config);

async function testAdvancedGetApiUsage(): Promise<void> {
  const response = await advancedApi.getApiUsage({});
  assert(
    response.status === 200,
    `expected status 200, got ${response.status}`,
  );
  assert(response.data != null, "expected response data");
  console.log(response.data);
}

// --- Main ---

async function main(): Promise<void> {
  console.log("Running Twelvedata API tests...\n");

  await runTest("MarketData.getTimeSeries", testMarketDataGetTimeSeries);
  await runTest("MarketData.getExchangeRate", testMarketDataGetExchangeRate);
  await runTest("MarketData.getPrice", testMarketDataGetPrice);
  await runTest("MarketData.getQuote", testMarketDataGetQuote);
  await runTest("MarketData.getEod", testMarketDataGetEod);
  await runTest(
    "MarketData.getCurrencyConversion",
    testMarketDataGetCurrencyConversion,
  );
  await runTest("MarketData.getMarketMovers", testMarketDataGetMarketMovers);

  await runTest("MarketData.getTimeSeries", testMarketDataGetTimeSeries);
  await runTest(
    "MarketData.getTimeSeriesCross",
    testMarketDataGetTimeSeriesCross,
  );

  await runTest("Fundamentals.getIpoCalendar", testFundamentalsGetIpoCalendar);
  await runTest(
    "Fundamentals.getEarningsCalendar",
    testFundamentalsGetEarningsCalendar,
  );
  await runTest(
    "Fundamentals.getDividendsCalendar",
    testFundamentalsGetDividendsCalendar,
  );
  await runTest(
    "Fundamentals.getSplitsCalendar",
    testFundamentalsGetSplitsCalendar,
  );
  await runTest("Fundamentals.getEarnings", testFundamentalsGetEarnings);
  await runTest("Fundamentals.getDividends", testFundamentalsGetDividends);
  await runTest("Fundamentals.getSplits", testFundamentalsGetSplits);
  await runTest(
    "Fundamentals.getBalanceSheet",
    testFundamentalsGetBalanceSheet,
  );
  await runTest("Fundamentals.getCashFlow", testFundamentalsGetCashFlow);
  await runTest(
    "Fundamentals.getIncomeStatement",
    testFundamentalsGetIncomeStatement,
  );
  await runTest("Fundamentals.getProfile", testFundamentalsGetProfile);
  await runTest("Fundamentals.getStatistics", testFundamentalsGetStatistics);
  await runTest("Fundamentals.getMarketCap", testFundamentalsGetMarketCap);
  await runTest(
    "Fundamentals.getKeyExecutives",
    testFundamentalsGetKeyExecutives,
  );
  await runTest("Fundamentals.getLogo", testFundamentalsGetLogo);
  await runTest(
    "Fundamentals.pressReleasesListParameters",
    testFundamentalsGetPressReleases,
  );

  await runTest(
    "Analysis.getAnalystRatingsUsEquities",
    testAnalysisGetAnalystRatingsUsEquities,
  );
  await runTest("Analysis.getPriceTarget", testAnalysisGetPriceTarget);
  await runTest("Analysis.getRecommendations", testAnalysisGetRecommendations);
  await runTest(
    "Analysis.getEarningsEstimate",
    testAnalysisGetEarningsEstimate,
  );
  await runTest("Analysis.getEpsRevisions", testAnalysisGetEpsRevisions);
  await runTest("Analysis.getEpsTrend", testAnalysisGetEpsTrend);
  await runTest("Analysis.getGrowthEstimates", testAnalysisGetGrowthEstimates);
  await runTest("Analysis.getRevenueEstimate", testAnalysisGetRevenueEstimate);

  await runTest("Etfs.getETFsWorld", testEtfsGetETFsWorld);
  await runTest("Etfs.getETFsWorldSummary", testEtfsGetETFsWorldSummary);
  await runTest(
    "Etfs.getETFsWorldComposition",
    testEtfsGetETFsWorldComposition,
  );
  await runTest(
    "Etfs.getETFsWorldPerformance",
    testEtfsGetETFsWorldPerformance,
  );
  await runTest("Etfs.getETFsWorldRisk", testEtfsGetETFsWorldRisk);

  await runTest(
    "MutualFunds.getMutualFundsWorld",
    testMutualFundsGetMutualFundsWorld,
  );
  await runTest(
    "MutualFunds.getMutualFundsWorldSummary",
    testMutualFundsGetMutualFundsWorldSummary,
  );
  await runTest(
    "MutualFunds.getMutualFundsWorldComposition",
    testMutualFundsGetMutualFundsWorldComposition,
  );
  await runTest(
    "MutualFunds.getMutualFundsWorldPerformance",
    testMutualFundsGetMutualFundsWorldPerformance,
  );
  await runTest(
    "MutualFunds.getMutualFundsWorldRisk",
    testMutualFundsGetMutualFundsWorldRisk,
  );
  await runTest(
    "MutualFunds.getMutualFundsWorldRatings",
    testMutualFundsGetMutualFundsWorldRatings,
  );
  await runTest(
    "MutualFunds.getMutualFundsWorldPurchaseInfo",
    testMutualFundsGetMutualFundsWorldPurchaseInfo,
  );
  await runTest(
    "MutualFunds.getMutualFundsWorldSustainability",
    testMutualFundsGetMutualFundsWorldSustainability,
  );

  await runTest("ReferenceData.getStocks", testReferenceDataGetStocks);
  await runTest("ReferenceData.getETFsList", testReferenceDataGetETFsList);
  await runTest(
    "ReferenceData.getCryptocurrencies",
    testReferenceDataGetCryptocurrencies,
  );
  await runTest("ReferenceData.getForexPairs", testReferenceDataGetForexPairs);
  await runTest("ReferenceData.getExchanges", testReferenceDataGetExchanges);
  await runTest("ReferenceData.getCountries", testReferenceDataGetCountries);
  await runTest("ReferenceData.getIntervals", testReferenceDataGetIntervals);
  await runTest(
    "ReferenceData.getMarketState",
    testReferenceDataGetMarketState,
  );
  await runTest(
    "ReferenceData.getEarliestTimestamp",
    testReferenceDataGetEarliestTimestamp,
  );
  await runTest(
    "ReferenceData.getSymbolSearch",
    testReferenceDataGetSymbolSearch,
  );
  await runTest(
    "ReferenceData.getInstrumentType",
    testReferenceDataGetInstrumentType,
  );
  await runTest(
    "ReferenceData.getCrossListings",
    testReferenceDataGetCrossListings,
  );

  await runTest("Regulatory.getDirectHolders", testRegulatoryGetDirectHolders);
  await runTest("Regulatory.getFundHolders", testRegulatoryGetFundHolders);
  await runTest(
    "Regulatory.getInstitutionalHolders",
    testRegulatoryGetInstitutionalHolders,
  );
  await runTest(
    "Regulatory.getInsiderTransactions",
    testRegulatoryGetInsiderTransactions,
  );
  await runTest("Regulatory.getTaxInfo", testRegulatoryGetTaxInfo);
  await runTest(
    "Regulatory.getSourceSanctionedEntities",
    testRegulatoryGetSourceSanctionedEntities,
  );

  await runTest(
    "TechnicalIndicator.getTimeSeriesRsi",
    testTechnicalIndicatorGetTimeSeriesRsi,
  );
  await runTest(
    "TechnicalIndicator.getTimeSeriesMacd",
    testTechnicalIndicatorGetTimeSeriesMacd,
  );

  await runTest("Advanced.getApiUsage", testAdvancedGetApiUsage);

  const total = passed + failed;
  console.log(`\nPassed: ${passed} / ${total}`);
  if (failed > 0) {
    process.exit(1);
  }
}

main().catch(console.error);
