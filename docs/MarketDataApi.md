# MarketDataApi

All URIs are relative to *https://api.twelvedata.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getEod**](MarketDataApi.md#geteod) | **GET** /eod | End of day price |
| [**getMarketMovers**](MarketDataApi.md#getmarketmovers) | **GET** /market_movers/{market} | Market movers |
| [**getPrice**](MarketDataApi.md#getprice) | **GET** /price | Latest price |
| [**getQuote**](MarketDataApi.md#getquote) | **GET** /quote | Quote |
| [**getTimeSeries**](MarketDataApi.md#gettimeseries) | **GET** /time_series | Time series |
| [**getTimeSeriesCross**](MarketDataApi.md#gettimeseriescross) | **GET** /time_series/cross | Time series cross |



## getEod

> GetEod200Response getEod(symbol, figi, isin, cusip, exchange, micCode, country, type, date, prepost, dp)

End of day price

The End of Day (EOD) Prices endpoint provides the closing price and other relevant metadata for a financial instrument at the end of a trading day. This endpoint is useful for retrieving daily historical data for stocks, ETFs, or other securities, allowing users to track performance over time and compare daily market movements.

### Example

```ts
import {
  Configuration,
  MarketDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetEodRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MarketDataApi(config);

  const body = {
    // string | Symbol ticker of the instrument (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BHTMY7,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
    // string | Market Identifier Code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Country where instrument is traded, e.g., `United States` or `US` (optional)
    country: United States,
    // TypeEnum | The asset class to which the instrument belongs (optional)
    type: ETF,
    // string | If not null, then return data from a specific date (optional)
    date: 2006-01-02,
    // boolean | Parameter is optional. Only for the `Pro` plan (individual) and `Venture` plan (business) and above. Available at the `1min`, `5min`, `15min`, and `30min` intervals for US equities. Open, high, low, close values are supplied without volume (optional)
    prepost: true,
    // number | Specifies the number of decimal places for floating values Should be in range [0,11] inclusive (optional)
    dp: 789,
  } satisfies GetEodRequest;

  try {
    const data = await api.getEod(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **symbol** | `string` | Symbol ticker of the instrument | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **type** | `TypeEnum` | The asset class to which the instrument belongs | [Optional] [Defaults to `undefined`] [Enum: American Depositary Receipt, Bond, Bond Fund, Closed-end Fund, Common Stock, Depositary Receipt, Digital Currency, ETF, Exchange-Traded Note, Global Depositary Receipt, Limited Partnership, Mutual Fund, Physical Currency, Preferred Stock, REIT, Right, Structured Product, Trust, Unit, Warrant] |
| **date** | `string` | If not null, then return data from a specific date | [Optional] [Defaults to `undefined`] |
| **prepost** | `boolean` | Parameter is optional. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume | [Optional] [Defaults to `false`] |
| **dp** | `number` | Specifies the number of decimal places for floating values Should be in range [0,11] inclusive | [Optional] [Defaults to `5`] |

### Return type

[**GetEod200Response**](GetEod200Response.md)

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **414** |  |  -  |
| **429** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMarketMovers

> MarketMoversResponseBody getMarketMovers(market, direction, outputsize, country, priceGreaterThan, dp)

Market movers

The market movers endpoint provides a ranked list of the top-gaining and losing assets for the current trading day. It returns detailed data on the highest percentage price increases and decreases since the previous day\&#39;s close. This endpoint supports international equities, forex, and cryptocurrencies, enabling users to quickly identify significant market movements across various asset classes.

### Example

```ts
import {
  Configuration,
  MarketDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetMarketMoversRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MarketDataApi(config);

  const body = {
    // MarketEnum | Maket type
    market: stocks,
    // DirectionEnum | Specifies direction of the snapshot gainers or losers (optional)
    direction: ...,
    // number | Specifies the size of the snapshot. Can be in a range from `1` to `50` (optional)
    outputsize: 789,
    // string | Country of the snapshot, applicable to non-currencies only. Takes country name or alpha code (optional)
    country: country_example,
    // string | Takes values with price grater than specified value (optional)
    priceGreaterThan: 175.5,
    // string | Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive (optional)
    dp: dp_example,
  } satisfies GetMarketMoversRequest;

  try {
    const data = await api.getMarketMovers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **market** | `MarketEnum` | Maket type | [Defaults to `undefined`] [Enum: stocks, etf, mutual_funds, forex, crypto] |
| **direction** | `DirectionEnum` | Specifies direction of the snapshot gainers or losers | [Optional] [Defaults to `undefined`] [Enum: gainers, losers] |
| **outputsize** | `number` | Specifies the size of the snapshot. Can be in a range from &#x60;1&#x60; to &#x60;50&#x60; | [Optional] [Defaults to `30`] |
| **country** | `string` | Country of the snapshot, applicable to non-currencies only. Takes country name or alpha code | [Optional] [Defaults to `&#39;USA&#39;`] |
| **priceGreaterThan** | `string` | Takes values with price grater than specified value | [Optional] [Defaults to `undefined`] |
| **dp** | `string` | Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive | [Optional] [Defaults to `&#39;5&#39;`] |

### Return type

[**MarketMoversResponseBody**](MarketMoversResponseBody.md)

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **414** |  |  -  |
| **429** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPrice

> GetPrice200Response getPrice(symbol, figi, isin, cusip, exchange, micCode, country, type, format, delimiter, prepost, dp)

Latest price

The latest price endpoint provides the latest market price for a specified financial instrument. It returns a single data point representing the current (or the most recently available) trading price.

### Example

```ts
import {
  Configuration,
  MarketDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetPriceRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MarketDataApi(config);

  const body = {
    // string | Symbol ticker of the instrument (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BHTMY7,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
    // string | Market Identifier Code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Country where instrument is traded, e.g., `United States` or `US` (optional)
    country: United States,
    // TypeEnum | The asset class to which the instrument belongs (optional)
    type: ETF,
    // FormatEnum | Value can be JSON or CSV (optional)
    format: ...,
    // string | Specify the delimiter used when downloading the CSV file (optional)
    delimiter: delimiter_example,
    // boolean | Parameter is optional. Only for Pro or Venture, and above plans. Available at the `1min`, `5min`, `15min`, and `30min` intervals for US equities. Open, high, low, close values are supplied without volume. (optional)
    prepost: true,
    // number | Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive (optional)
    dp: 789,
  } satisfies GetPriceRequest;

  try {
    const data = await api.getPrice(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **symbol** | `string` | Symbol ticker of the instrument | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **type** | `TypeEnum` | The asset class to which the instrument belongs | [Optional] [Defaults to `undefined`] [Enum: American Depositary Receipt, Bond, Bond Fund, Closed-end Fund, Common Stock, Depositary Receipt, Digital Currency, ETF, Exchange-Traded Note, Global Depositary Receipt, Limited Partnership, Mutual Fund, Physical Currency, Preferred Stock, REIT, Right, Structured Product, Trust, Unit, Warrant] |
| **format** | `FormatEnum` | Value can be JSON or CSV | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | Specify the delimiter used when downloading the CSV file | [Optional] [Defaults to `&#39;;&#39;`] |
| **prepost** | `boolean` | Parameter is optional. Only for Pro or Venture, and above plans. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume. | [Optional] [Defaults to `false`] |
| **dp** | `number` | Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive | [Optional] [Defaults to `5`] |

### Return type

[**GetPrice200Response**](GetPrice200Response.md)

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **414** |  |  -  |
| **429** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getQuote

> GetQuote200Response getQuote(symbol, figi, isin, cusip, interval, exchange, micCode, country, volumeTimePeriod, type, format, delimiter, prepost, eod, rollingPeriod, dp, timezone)

Quote

The quote endpoint provides real-time data for a selected financial instrument, returning essential information such as the latest price, open, high, low, close, volume, and price change. This endpoint is ideal for users needing up-to-date market data to track price movements and trading activity for specific stocks, ETFs, or other securities.

### Example

```ts
import {
  Configuration,
  MarketDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetQuoteRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MarketDataApi(config);

  const body = {
    // string | Symbol ticker of the instrument (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BHTMY7,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // IntervalEnum | Interval of the quote (optional)
    interval: ...,
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
    // string | Market Identifier Code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Country where instrument is traded, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of periods for Average Volume (optional)
    volumeTimePeriod: 789,
    // TypeEnum | The asset class to which the instrument belongs (optional)
    type: ETF,
    // FormatEnum | Value can be JSON or CSV Default JSON (optional)
    format: ...,
    // string | Specify the delimiter used when downloading the CSV file (optional)
    delimiter: delimiter_example,
    // boolean | Parameter is optional. Only for the `Pro` plan (individual) and `Venture` plan (business) and above. Available at the `1min`, `5min`, `15min`, and `30min` intervals for US equities. Open, high, low, close values are supplied without volume. (optional)
    prepost: true,
    // boolean | If true, then return data for closed day (optional)
    eod: true,
    // number | Number of hours for calculate rolling change at period. By default set to 24, it can be in range [1, 168]. (optional)
    rollingPeriod: 789,
    // number | Specifies the number of decimal places for floating values Should be in range [0,11] inclusive (optional)
    dp: 789,
    // string | Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>Exchange</code> for local exchange time</li> <li>2. <code>UTC</code> for datetime at universal UTC standard</li> <li>3. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a>.</li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional)
    timezone: timezone_example,
  } satisfies GetQuoteRequest;

  try {
    const data = await api.getQuote(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **symbol** | `string` | Symbol ticker of the instrument | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **interval** | `IntervalEnum` | Interval of the quote | [Optional] [Defaults to `undefined`] [Enum: 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 8h, 1day, 1week, 1month] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **volumeTimePeriod** | `number` | Number of periods for Average Volume | [Optional] [Defaults to `9`] |
| **type** | `TypeEnum` | The asset class to which the instrument belongs | [Optional] [Defaults to `undefined`] [Enum: American Depositary Receipt, Bond, Bond Fund, Closed-end Fund, Common Stock, Depositary Receipt, Digital Currency, ETF, Exchange-Traded Note, Global Depositary Receipt, Limited Partnership, Mutual Fund, Physical Currency, Preferred Stock, REIT, Right, Structured Product, Trust, Unit, Warrant] |
| **format** | `FormatEnum` | Value can be JSON or CSV Default JSON | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | Specify the delimiter used when downloading the CSV file | [Optional] [Defaults to `&#39;;&#39;`] |
| **prepost** | `boolean` | Parameter is optional. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume. | [Optional] [Defaults to `false`] |
| **eod** | `boolean` | If true, then return data for closed day | [Optional] [Defaults to `false`] |
| **rollingPeriod** | `number` | Number of hours for calculate rolling change at period. By default set to 24, it can be in range [1, 168]. | [Optional] [Defaults to `24`] |
| **dp** | `number` | Specifies the number of decimal places for floating values Should be in range [0,11] inclusive | [Optional] [Defaults to `5`] |
| **timezone** | `string` | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | [Optional] [Defaults to `&#39;Exchange&#39;`] |

### Return type

[**GetQuote200Response**](GetQuote200Response.md)

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **414** |  |  -  |
| **429** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTimeSeries

> GetTimeSeries200Response getTimeSeries(interval, symbol, isin, figi, cusip, outputsize, exchange, micCode, country, type, timezone, startDate, endDate, date, order, prepost, format, delimiter, dp, previousClose, adjust)

Time series

The time series endpoint provides detailed historical data for a specified financial instrument. It returns two main components: metadata, which includes essential information about the instrument, and a time series dataset. The time series consists of chronological entries with Open, High, Low, and Close prices, and for applicable instruments, it also includes trading volume. This endpoint is ideal for retrieving comprehensive historical price data for analysis or visualization purposes.

### Example

```ts
import {
  Configuration,
  MarketDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetTimeSeriesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MarketDataApi(config);

  const body = {
    // IntervalEnum | Interval between two consecutive points in time series
    interval: 1min,
    // string | Symbol ticker of the instrument. E.g. `AAPL`, `EUR/USD`, `ETH/BTC`, ... (optional)
    symbol: AAPL,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The FIGI of an instrument for which data is requested. This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // number | Number of data points to retrieve. Supports values in the range from `1` to `5000`. Default `30` when no date parameters are set, otherwise set to maximum (optional)
    outputsize: 789,
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
    // string | Market Identifier Code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | The country where the instrument is traded, e.g., `United States` or `US` (optional)
    country: United States,
    // TypeEnum | The asset class to which the instrument belongs (optional)
    type: Common Stock,
    // string | Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>Exchange</code> for local exchange time</li> <li>2. <code>UTC</code> for datetime at universal UTC standard</li> <li>3. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a></li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional)
    timezone: timezone_example,
    // string | Can be used separately and together with `end_date`. Format `2006-01-02` or `2006-01-02T15:04:05`  Default location: <ul> <li>Forex and Cryptocurrencies - <code>UTC</code></li> <li>Stocks - where exchange is located (e.g. for AAPL it will be <code>America/New_York</code>)</li> </ul> Both parameters take into account if <code>timezone</code> parameter is provided.<br/> If <code>timezone</code> is given then, <code>start_date</code> and <code>end_date</code> will be used in the specified location  Examples: <ul> <li>1. <code>&symbol=AAPL&start_date=2019-08-09T15:50:00&…</code><br/> Returns all records starting from 2019-08-09T15:50:00 New York time up to current date</li> <li>2. <code>&symbol=EUR/USD&timezone=Asia/Singapore&start_date=2019-08-09T15:50:00&…</code><br/> Returns all records starting from 2019-08-09T15:50:00 Singapore time up to current date</li> <li>3. <code>&symbol=ETH/BTC&timezone=Europe/Zurich&start_date=2019-08-09T15:50:00&end_date=2019-08-09T15:55:00&...</code><br/> Returns all records starting from 2019-08-09T15:50:00 Zurich time up to 2019-08-09T15:55:00</li> </ul> (optional)
    startDate: 2024-08-22T15:04:05,
    // string | The ending date and time for data selection, see `start_date` description for details. (optional)
    endDate: 2024-08-22T16:04:05,
    // string | Specifies the exact date to get the data for. Could be the exact date, e.g. `2021-10-27`, or in human language `today` or `yesterday` (optional)
    date: 2021-10-27,
    // OrderEnum | Sorting order of the output (optional)
    order: ...,
    // boolean | Returns quotes that include pre-market and post-market data. Only for the `Pro` plan (individual) and `Venture` plan (business) and above. Available at the `1min`, `5min`, `15min`, and `30min` intervals for US equities. Open, high, low, close values are supplied without volume (optional)
    prepost: true,
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | The separator used in the CSV response data (optional)
    delimiter: delimiter_example,
    // number | Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. By default, the number of decimal places is automatically determined based on the values provided (optional)
    dp: 789,
    // boolean | A boolean parameter to include the previous closing price in the time_series data. If true, adds previous bar close price value to the current object (optional)
    previousClose: true,
    // AdjustEnum | Adjusting mode for prices (optional)
    adjust: ...,
  } satisfies GetTimeSeriesRequest;

  try {
    const data = await api.getTimeSeries(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **interval** | `IntervalEnum` | Interval between two consecutive points in time series | [Defaults to `undefined`] [Enum: 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 8h, 1day, 1week, 1month] |
| **symbol** | `string` | Symbol ticker of the instrument. E.g. &#x60;AAPL&#x60;, &#x60;EUR/USD&#x60;, &#x60;ETH/BTC&#x60;, ... | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;5000&#x60;. Default &#x60;30&#x60; when no date parameters are set, otherwise set to maximum | [Optional] [Defaults to `30`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **type** | `TypeEnum` | The asset class to which the instrument belongs | [Optional] [Defaults to `undefined`] [Enum: American Depositary Receipt, Bond, Bond Fund, Closed-end Fund, Common Stock, Depositary Receipt, Digital Currency, ETF, Exchange-Traded Note, Global Depositary Receipt, Limited Partnership, Mutual Fund, Physical Currency, Preferred Stock, REIT, Right, Structured Product, Trust, Unit, Warrant] |
| **timezone** | `string` | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | [Optional] [Defaults to `&#39;Exchange&#39;`] |
| **startDate** | `string` | Can be used separately and together with &#x60;end_date&#x60;. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;  Default location: &lt;ul&gt; &lt;li&gt;Forex and Cryptocurrencies - &lt;code&gt;UTC&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Stocks - where exchange is located (e.g. for AAPL it will be &lt;code&gt;America/New_York&lt;/code&gt;)&lt;/li&gt; &lt;/ul&gt; Both parameters take into account if &lt;code&gt;timezone&lt;/code&gt; parameter is provided.&lt;br/&gt; If &lt;code&gt;timezone&lt;/code&gt; is given then, &lt;code&gt;start_date&lt;/code&gt; and &lt;code&gt;end_date&lt;/code&gt; will be used in the specified location  Examples: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;&amp;symbol&#x3D;AAPL&amp;start_date&#x3D;2019-08-09T15:50:00&amp;…&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 New York time up to current date&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;&amp;symbol&#x3D;EUR/USD&amp;timezone&#x3D;Asia/Singapore&amp;start_date&#x3D;2019-08-09T15:50:00&amp;…&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 Singapore time up to current date&lt;/li&gt; &lt;li&gt;3. &lt;code&gt;&amp;symbol&#x3D;ETH/BTC&amp;timezone&#x3D;Europe/Zurich&amp;start_date&#x3D;2019-08-09T15:50:00&amp;end_date&#x3D;2019-08-09T15:55:00&amp;...&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 Zurich time up to 2019-08-09T15:55:00&lt;/li&gt; &lt;/ul&gt; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | The ending date and time for data selection, see &#x60;start_date&#x60; description for details. | [Optional] [Defaults to `undefined`] |
| **date** | `string` | Specifies the exact date to get the data for. Could be the exact date, e.g. &#x60;2021-10-27&#x60;, or in human language &#x60;today&#x60; or &#x60;yesterday&#x60; | [Optional] [Defaults to `undefined`] |
| **order** | `OrderEnum` | Sorting order of the output | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **prepost** | `boolean` | Returns quotes that include pre-market and post-market data. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume | [Optional] [Defaults to `false`] |
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | The separator used in the CSV response data | [Optional] [Defaults to `&#39;;&#39;`] |
| **dp** | `number` | Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. By default, the number of decimal places is automatically determined based on the values provided | [Optional] [Defaults to `-1`] |
| **previousClose** | `boolean` | A boolean parameter to include the previous closing price in the time_series data. If true, adds previous bar close price value to the current object | [Optional] [Defaults to `false`] |
| **adjust** | `AdjustEnum` | Adjusting mode for prices | [Optional] [Defaults to `undefined`] [Enum: all, splits, dividends, none] |

### Return type

[**GetTimeSeries200Response**](GetTimeSeries200Response.md)

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **414** |  |  -  |
| **429** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTimeSeriesCross

> GetTimeSeriesCross200Response getTimeSeriesCross(base, quote, interval, baseType, baseExchange, baseMicCode, quoteType, quoteExchange, quoteMicCode, outputsize, format, delimiter, prepost, startDate, endDate, adjust, dp, timezone)

Time series cross

The Time Series Cross endpoint calculates and returns historical cross-rate data for exotic forex pairs, cryptocurrencies, or stocks (e.g., Apple Inc. price in Indian Rupees) on the fly. It provides metadata about the requested symbol and a time series array with Open, High, Low, and Close prices, sorted descending by time, enabling analysis of price history and market trends.

### Example

```ts
import {
  Configuration,
  MarketDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetTimeSeriesCrossRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MarketDataApi(config);

  const body = {
    // string | Base currency symbol
    base: JPY,
    // string | Quote currency symbol
    quote: BTC,
    // IntervalEnum | Interval between two consecutive points in time series
    interval: 1min,
    // string | Base instrument type according to the `/instrument_type` endpoint (optional)
    baseType: Physical Currency,
    // string | Base exchange (optional)
    baseExchange: Binance,
    // string | Base MIC code (optional)
    baseMicCode: XNGS,
    // string | Quote instrument type according to the `/instrument_type` endpoint (optional)
    quoteType: Digital Currency,
    // string | Quote exchange (optional)
    quoteExchange: Coinbase,
    // string | Quote MIC code (optional)
    quoteMicCode: XNYS,
    // number | Number of data points to retrieve. Supports values in the range from `1` to `5000`. Default `30` when no date parameters are set, otherwise set to maximum (optional)
    outputsize: 30,
    // FormatEnum | Format of the response data (optional)
    format: JSON,
    // string | Delimiter used in CSV file (optional)
    delimiter: ;,
    // boolean | Only for the `Pro` plan (individual) and `Venture` plan (business) and above. Available at the `1min`, `5min`, `15min`, and `30min` intervals for US equities. Open, high, low, close values are supplied without volume. (optional)
    prepost: true,
    // string | Start date for the time series data (optional)
    startDate: 2025-01-01,
    // string | End date for the time series data (optional)
    endDate: 2025-01-31,
    // boolean | Specifies if there should be an adjustment (optional)
    adjust: true,
    // number | Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. (optional)
    dp: 5,
    // string | Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>Exchange</code> for local exchange time</li> <li>2. <code>UTC</code> for datetime at universal UTC standard</li> <li>3. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a>.</li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional)
    timezone: UTC,
  } satisfies GetTimeSeriesCrossRequest;

  try {
    const data = await api.getTimeSeriesCross(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **base** | `string` | Base currency symbol | [Defaults to `undefined`] |
| **quote** | `string` | Quote currency symbol | [Defaults to `undefined`] |
| **interval** | `IntervalEnum` | Interval between two consecutive points in time series | [Defaults to `undefined`] [Enum: 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 8h, 1day, 1week, 1month] |
| **baseType** | `string` | Base instrument type according to the &#x60;/instrument_type&#x60; endpoint | [Optional] [Defaults to `undefined`] |
| **baseExchange** | `string` | Base exchange | [Optional] [Defaults to `undefined`] |
| **baseMicCode** | `string` | Base MIC code | [Optional] [Defaults to `undefined`] |
| **quoteType** | `string` | Quote instrument type according to the &#x60;/instrument_type&#x60; endpoint | [Optional] [Defaults to `undefined`] |
| **quoteExchange** | `string` | Quote exchange | [Optional] [Defaults to `undefined`] |
| **quoteMicCode** | `string` | Quote MIC code | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;5000&#x60;. Default &#x60;30&#x60; when no date parameters are set, otherwise set to maximum | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | Format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | Delimiter used in CSV file | [Optional] [Defaults to `&#39;;&#39;`] |
| **prepost** | `boolean` | Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume. | [Optional] [Defaults to `false`] |
| **startDate** | `string` | Start date for the time series data | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for the time series data | [Optional] [Defaults to `undefined`] |
| **adjust** | `boolean` | Specifies if there should be an adjustment | [Optional] [Defaults to `true`] |
| **dp** | `number` | Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. | [Optional] [Defaults to `5`] |
| **timezone** | `string` | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetTimeSeriesCross200Response**](GetTimeSeriesCross200Response.md)

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **414** |  |  -  |
| **429** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

