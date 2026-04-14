# ReferenceDataApi

All URIs are relative to *https://api.twelvedata.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBonds**](ReferenceDataApi.md#getbonds) | **GET** /bonds | Fixed income |
| [**getCommodities**](ReferenceDataApi.md#getcommodities) | **GET** /commodities | Commodities |
| [**getCountries**](ReferenceDataApi.md#getcountries) | **GET** /countries | Countries |
| [**getCrossListings**](ReferenceDataApi.md#getcrosslistings) | **GET** /cross_listings | Cross listings |
| [**getCryptocurrencies**](ReferenceDataApi.md#getcryptocurrencies) | **GET** /cryptocurrencies | Cryptocurrency pairs |
| [**getCryptocurrencyExchanges**](ReferenceDataApi.md#getcryptocurrencyexchanges) | **GET** /cryptocurrency_exchanges | Cryptocurrency exchanges |
| [**getEarliestTimestamp**](ReferenceDataApi.md#getearliesttimestamp) | **GET** /earliest_timestamp | Earliest timestamp |
| [**getEtf**](ReferenceDataApi.md#getetf) | **GET** /etfs | ETFs |
| [**getExchangeSchedule**](ReferenceDataApi.md#getexchangeschedule) | **GET** /exchange_schedule | Exchanges schedule |
| [**getExchanges**](ReferenceDataApi.md#getexchanges) | **GET** /exchanges | Exchanges |
| [**getForexPairs**](ReferenceDataApi.md#getforexpairs) | **GET** /forex_pairs | Forex pairs |
| [**getFunds**](ReferenceDataApi.md#getfunds) | **GET** /funds | Funds |
| [**getInstrumentType**](ReferenceDataApi.md#getinstrumenttype) | **GET** /instrument_type | Instrument type |
| [**getIntervals**](ReferenceDataApi.md#getintervals) | **GET** /intervals | Intervals List |
| [**getMarketState**](ReferenceDataApi.md#getmarketstate) | **GET** /market_state | Market state |
| [**getStocks**](ReferenceDataApi.md#getstocks) | **GET** /stocks | Stocks |
| [**getSymbolSearch**](ReferenceDataApi.md#getsymbolsearch) | **GET** /symbol_search | Symbol search |
| [**getTechnicalIndicators**](ReferenceDataApi.md#gettechnicalindicators) | **GET** /technical_indicators | Technical indicators |



## getBonds

> GetBonds200Response getBonds(symbol, exchange, country, format, delimiter, showPlan, page, outputsize)

Fixed income

The fixed income endpoint provides a daily updated list of available bonds. It returns an array containing detailed information about each bond, including identifiers, names, and other relevant attributes.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetBondsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested (optional)
    symbol: US2Y,
    // string | Filter by exchange name (optional)
    exchange: NYSE,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | The separator used in the CSV response data (optional)
    delimiter: delimiter_example,
    // boolean | Adds info on which plan symbol is available (optional)
    showPlan: true,
    // number | Page number of the results to fetch (optional)
    page: 789,
    // number | Determines the number of data points returned in the output (optional)
    outputsize: 789,
  } satisfies GetBondsRequest;

  try {
    const data = await api.getBonds(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | The separator used in the CSV response data | [Optional] [Defaults to `&#39;;&#39;`] |
| **showPlan** | `boolean` | Adds info on which plan symbol is available | [Optional] [Defaults to `false`] |
| **page** | `number` | Page number of the results to fetch | [Optional] [Defaults to `1`] |
| **outputsize** | `number` | Determines the number of data points returned in the output | [Optional] [Defaults to `5000`] |

### Return type

[**GetBonds200Response**](GetBonds200Response.md)

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


## getCommodities

> GetCommodities200Response getCommodities(symbol, category, format, delimiter)

Commodities

The commodities endpoint provides a daily updated list of available commodity pairs, across precious metals, livestock, softs, grains, etc.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetCommoditiesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested (optional)
    symbol: XAU/USD,
    // string | Filter by category of commodity (optional)
    category: Precious Metal,
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | The separator used in the CSV response data (optional)
    delimiter: delimiter_example,
  } satisfies GetCommoditiesRequest;

  try {
    const data = await api.getCommodities(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **category** | `string` | Filter by category of commodity | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | The separator used in the CSV response data | [Optional] [Defaults to `&#39;;&#39;`] |

### Return type

[**GetCommodities200Response**](GetCommodities200Response.md)

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


## getCountries

> GetCountries200Response getCountries()

Countries

The countries endpoint provides a comprehensive list of countries, including their ISO codes, official names, capitals, and currencies. This data is essential for applications requiring accurate country information for tasks such as localization, currency conversion, or geographic analysis.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetCountriesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  try {
    const data = await api.getCountries();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetCountries200Response**](GetCountries200Response.md)

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


## getCrossListings

> GetCrossListings200Response getCrossListings(symbol, exchange, micCode, country)

Cross listings

The cross_listings endpoint provides a daily updated list of cross-listed symbols for a specified financial instrument. Cross-listed symbols represent the same security available on multiple exchanges. This endpoint is useful for identifying all the exchanges where a particular security is traded, allowing users to access comprehensive trading information across different markets.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetCrossListingsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested
    symbol: AAPL,
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
    // string | Market identifier code (MIC) under ISO 10383 standard (optional)
    micCode: XNGS,
    // string | Country to which stock exchange belongs to (optional)
    country: United States,
  } satisfies GetCrossListingsRequest;

  try {
    const data = await api.getCrossListings(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested | [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market identifier code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country to which stock exchange belongs to | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCrossListings200Response**](GetCrossListings200Response.md)

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


## getCryptocurrencies

> GetCryptocurrencies200Response getCryptocurrencies(symbol, exchange, currencyBase, currencyQuote, format, delimiter)

Cryptocurrency pairs

The cryptocurrencies endpoint provides a daily updated list of all available cryptos. It returns an array containing detailed information about each cryptocurrency, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of cryptocurrencies for applications that require up-to-date market listings or need to display available crypto assets to users.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetCryptocurrenciesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested (optional)
    symbol: BTC/USD,
    // string | Filter by exchange name. E.g. `Binance`, `Coinbase`, etc. (optional)
    exchange: Binance,
    // string | Filter by currency base (optional)
    currencyBase: BTC,
    // string | Filter by currency quote (optional)
    currencyQuote: USD,
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | The separator used in the CSV response data (optional)
    delimiter: delimiter_example,
  } satisfies GetCryptocurrenciesRequest;

  try {
    const data = await api.getCryptocurrencies(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name. E.g. &#x60;Binance&#x60;, &#x60;Coinbase&#x60;, etc. | [Optional] [Defaults to `undefined`] |
| **currencyBase** | `string` | Filter by currency base | [Optional] [Defaults to `undefined`] |
| **currencyQuote** | `string` | Filter by currency quote | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | The separator used in the CSV response data | [Optional] [Defaults to `&#39;;&#39;`] |

### Return type

[**GetCryptocurrencies200Response**](GetCryptocurrencies200Response.md)

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


## getCryptocurrencyExchanges

> GetCryptocurrencyExchanges200Response getCryptocurrencyExchanges(format, delimiter)

Cryptocurrency exchanges

The cryptocurrency exchanges endpoint provides a daily updated list of available cryptocurrency exchanges. It returns an array containing details about each exchange, such as exchange names and identifiers.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetCryptocurrencyExchangesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | Specify the delimiter used when downloading the CSV file (optional)
    delimiter: delimiter_example,
  } satisfies GetCryptocurrencyExchangesRequest;

  try {
    const data = await api.getCryptocurrencyExchanges(body);
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
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | Specify the delimiter used when downloading the CSV file | [Optional] [Defaults to `&#39;;&#39;`] |

### Return type

[**GetCryptocurrencyExchanges200Response**](GetCryptocurrencyExchanges200Response.md)

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


## getEarliestTimestamp

> GetEarliestTimestamp200Response getEarliestTimestamp(interval, symbol, figi, isin, cusip, exchange, micCode, timezone)

Earliest timestamp

The earliest_timestamp endpoint provides the earliest available date and time for a specified financial instrument at a given data interval. This endpoint is useful for determining the starting point of historical data availability for various assets, such as stocks or currencies, allowing users to understand the time range covered by the data.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetEarliestTimestampRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // IntervalEnum | Interval between two consecutive points in time series.
    interval: 1day,
    // string | Symbol ticker of the instrument. (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9XRY4,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Exchange where instrument is traded. (optional)
    exchange: Nasdaq,
    // string | Market Identifier Code (MIC) under ISO 10383 standard. (optional)
    micCode: XNAS,
    // string | Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>Exchange</code> for local exchange time</li> <li>2. <code>UTC</code> for datetime at universal UTC standard</li> <li>3. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a>.</li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional)
    timezone: timezone_example,
  } satisfies GetEarliestTimestampRequest;

  try {
    const data = await api.getEarliestTimestamp(body);
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
| **interval** | `IntervalEnum` | Interval between two consecutive points in time series. | [Defaults to `undefined`] [Enum: 1min, 5min, 15min, 30min, 45min, 1h, 2h, 4h, 8h, 1day, 1week, 1month] |
| **symbol** | `string` | Symbol ticker of the instrument. | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded. | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard. | [Optional] [Defaults to `undefined`] |
| **timezone** | `string` | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | [Optional] [Defaults to `&#39;Exchange&#39;`] |

### Return type

[**GetEarliestTimestamp200Response**](GetEarliestTimestamp200Response.md)

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


## getEtf

> GetEtf200Response getEtf(symbol, figi, isin, cusip, cik, exchange, micCode, country, format, delimiter, showPlan, includeDelisted)

ETFs

The ETFs endpoint provides a daily updated list of all available Exchange-Traded Funds. It returns an array containing detailed information about each ETF, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of ETFs for portfolio management, investment tracking, or financial analysis.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetEtfRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested (optional)
    symbol: SPY,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BDTF76,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | The CIK of an instrument for which data is requested (optional)
    cik: 95953,
    // string | Filter by exchange name (optional)
    exchange: NYSE,
    // string | Filter by market identifier code (MIC) under ISO 10383 standard (optional)
    micCode: XNYS,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | The separator used in the CSV response data (optional)
    delimiter: delimiter_example,
    // boolean | Adds info on which plan symbol is available (optional)
    showPlan: true,
    // boolean | Include delisted identifiers (optional)
    includeDelisted: true,
  } satisfies GetEtfRequest;

  try {
    const data = await api.getEtf(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cik** | `string` | The CIK of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Filter by market identifier code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | The separator used in the CSV response data | [Optional] [Defaults to `&#39;;&#39;`] |
| **showPlan** | `boolean` | Adds info on which plan symbol is available | [Optional] [Defaults to `false`] |
| **includeDelisted** | `boolean` | Include delisted identifiers | [Optional] [Defaults to `false`] |

### Return type

[**GetEtf200Response**](GetEtf200Response.md)

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


## getExchangeSchedule

> GetExchangeSchedule200Response getExchangeSchedule(micName, micCode, country, date)

Exchanges schedule

The exchanges schedule endpoint provides detailed information about various stock exchanges, including their trading hours and operational days. This data is essential for users who need to know when specific exchanges are open for trading, allowing them to plan their activities around the availability of these markets.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetExchangeScheduleRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | Filter by exchange name (optional)
    micName: NASDAQ,
    // string | Filter by market identifier code (MIC) under ISO 10383 standard (optional)
    micCode: XNGS,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | <p> If a date is provided, the API returns the schedule for the specified date; otherwise, it returns the default (common) schedule. </p> The date can be specified in one of the following formats: <ul> <li>An exact date (e.g., <code>2021-10-27</code>)</li> <li>A human-readable keyword: <code>today</code> or <code>yesterday</code></li> <li>A full datetime string in UTC (e.g., <code>2025-04-11T20:00:00</code>) to retrieve the schedule corresponding to the day in the specified time.</li> </ul> When using a datetime value, the resulting schedule will correspond to the local calendar day at the specified time. For example, <code>2025-04-11T20:00:00 UTC</code> corresponds to: <ul> <li><code>2025-04-11</code> in the <code>America/New_York</code> timezone</li> <li><code>2025-04-12</code> in the <code>Australia/Sydney</code> timezone</li> </ul> (optional)
    date: 2021-10-27,
  } satisfies GetExchangeScheduleRequest;

  try {
    const data = await api.getExchangeSchedule(body);
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
| **micName** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Filter by market identifier code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **date** | `string` | &lt;p&gt; If a date is provided, the API returns the schedule for the specified date; otherwise, it returns the default (common) schedule. &lt;/p&gt; The date can be specified in one of the following formats: &lt;ul&gt; &lt;li&gt;An exact date (e.g., &lt;code&gt;2021-10-27&lt;/code&gt;)&lt;/li&gt; &lt;li&gt;A human-readable keyword: &lt;code&gt;today&lt;/code&gt; or &lt;code&gt;yesterday&lt;/code&gt;&lt;/li&gt; &lt;li&gt;A full datetime string in UTC (e.g., &lt;code&gt;2025-04-11T20:00:00&lt;/code&gt;) to retrieve the schedule corresponding to the day in the specified time.&lt;/li&gt; &lt;/ul&gt; When using a datetime value, the resulting schedule will correspond to the local calendar day at the specified time. For example, &lt;code&gt;2025-04-11T20:00:00 UTC&lt;/code&gt; corresponds to: &lt;ul&gt; &lt;li&gt;&lt;code&gt;2025-04-11&lt;/code&gt; in the &lt;code&gt;America/New_York&lt;/code&gt; timezone&lt;/li&gt; &lt;li&gt;&lt;code&gt;2025-04-12&lt;/code&gt; in the &lt;code&gt;Australia/Sydney&lt;/code&gt; timezone&lt;/li&gt; &lt;/ul&gt; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetExchangeSchedule200Response**](GetExchangeSchedule200Response.md)

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


## getExchanges

> GetExchanges200Response getExchanges(type, name, code, country, format, delimiter, showPlan)

Exchanges

The exchanges endpoint provides a comprehensive list of all available equity exchanges. It returns an array containing detailed information about each exchange, such as exchange code, name, country, and timezone. This data is updated daily.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetExchangesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // TypeEnum | The asset class to which the instrument belongs (optional)
    type: ETF,
    // string | Filter by exchange name (optional)
    name: NASDAQ,
    // string | Filter by market identifier code (MIC) under ISO 10383 standard (optional)
    code: XBUE,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | The separator used in the CSV response data (optional)
    delimiter: delimiter_example,
    // boolean | Adds info on which plan symbol is available (optional)
    showPlan: true,
  } satisfies GetExchangesRequest;

  try {
    const data = await api.getExchanges(body);
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
| **type** | `TypeEnum` | The asset class to which the instrument belongs | [Optional] [Defaults to `undefined`] [Enum: American Depositary Receipt, Bond, Bond Fund, Closed-end Fund, Common Stock, Depositary Receipt, Digital Currency, ETF, Exchange-Traded Note, Global Depositary Receipt, Limited Partnership, Mutual Fund, Physical Currency, Preferred Stock, REIT, Right, Structured Product, Trust, Unit, Warrant] |
| **name** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |
| **code** | `string` | Filter by market identifier code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | The separator used in the CSV response data | [Optional] [Defaults to `&#39;;&#39;`] |
| **showPlan** | `boolean` | Adds info on which plan symbol is available | [Optional] [Defaults to `false`] |

### Return type

[**GetExchanges200Response**](GetExchanges200Response.md)

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


## getForexPairs

> GetForexPairs200Response getForexPairs(symbol, currencyBase, currencyQuote, format, delimiter)

Forex pairs

The forex pairs endpoint provides a comprehensive list of all available foreign exchange currency pairs. It returns an array of forex pairs, which is updated daily.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetForexPairsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested (optional)
    symbol: EUR/USD,
    // string | Filter by currency base (optional)
    currencyBase: EUR,
    // string | Filter by currency quote (optional)
    currencyQuote: USD,
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | The separator used in the CSV response data (optional)
    delimiter: delimiter_example,
  } satisfies GetForexPairsRequest;

  try {
    const data = await api.getForexPairs(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **currencyBase** | `string` | Filter by currency base | [Optional] [Defaults to `undefined`] |
| **currencyQuote** | `string` | Filter by currency quote | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | The separator used in the CSV response data | [Optional] [Defaults to `&#39;;&#39;`] |

### Return type

[**GetForexPairs200Response**](GetForexPairs200Response.md)

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


## getFunds

> GetFunds200Response getFunds(symbol, figi, isin, cusip, cik, exchange, country, format, delimiter, showPlan, page, outputsize)

Funds

The funds endpoint provides a daily updated list of available investment funds. It returns an array containing detailed information about each fund, including identifiers, names, and other relevant attributes.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetFundsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested (optional)
    symbol: FXAIX,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BHTMY7,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | The CIK of an instrument for which data is requested (optional)
    cik: 95953,
    // string | Filter by exchange name (optional)
    exchange: Nasdaq,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | The separator used in the CSV response data (optional)
    delimiter: delimiter_example,
    // boolean | Adds info on which plan symbol is available (optional)
    showPlan: true,
    // number | Page number of the results to fetch (optional)
    page: 789,
    // number | Determines the number of data points returned in the output (optional)
    outputsize: 789,
  } satisfies GetFundsRequest;

  try {
    const data = await api.getFunds(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cik** | `string` | The CIK of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | The separator used in the CSV response data | [Optional] [Defaults to `&#39;;&#39;`] |
| **showPlan** | `boolean` | Adds info on which plan symbol is available | [Optional] [Defaults to `false`] |
| **page** | `number` | Page number of the results to fetch | [Optional] [Defaults to `1`] |
| **outputsize** | `number` | Determines the number of data points returned in the output | [Optional] [Defaults to `5000`] |

### Return type

[**GetFunds200Response**](GetFunds200Response.md)

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


## getInstrumentType

> GetInstrumentType200Response getInstrumentType()

Instrument type

The instrument type endpoint lists all available financial instrument types, such as stocks, ETFs, and cryptos. This information is essential for users to identify and categorize different financial instruments when accessing or analyzing market data.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetInstrumentTypeRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  try {
    const data = await api.getInstrumentType();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetInstrumentType200Response**](GetInstrumentType200Response.md)

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


## getIntervals

> GetIntervals200Response getIntervals()

Intervals List

The intervals endpoint provides a list of supported time intervals that can be used for querying financial data.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetIntervalsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  try {
    const data = await api.getIntervals();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetIntervals200Response**](GetIntervals200Response.md)

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


## getMarketState

> Array&lt;MarketStateResponseItem&gt; getMarketState(exchange, code, country)

Market state

The market state endpoint provides real-time information on the operational status of all available stock exchanges. It returns data on whether each exchange is currently open or closed, along with the time remaining until the next opening or closing. This endpoint is useful for users who need to monitor exchange hours and plan their trading activities accordingly.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetMarketStateRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | The exchange name where the instrument is traded. (optional)
    exchange: NYSE,
    // string | The Market Identifier Code (MIC) of the exchange where the instrument is traded. (optional)
    code: XNYS,
    // string | The country where the exchange is located. Takes country name or alpha code. (optional)
    country: United States,
  } satisfies GetMarketStateRequest;

  try {
    const data = await api.getMarketState(body);
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
| **exchange** | `string` | The exchange name where the instrument is traded. | [Optional] [Defaults to `undefined`] |
| **code** | `string` | The Market Identifier Code (MIC) of the exchange where the instrument is traded. | [Optional] [Defaults to `undefined`] |
| **country** | `string` | The country where the exchange is located. Takes country name or alpha code. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;MarketStateResponseItem&gt;**](MarketStateResponseItem.md)

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


## getStocks

> GetStocks200Response getStocks(symbol, figi, isin, cusip, cik, exchange, micCode, country, type, format, delimiter, showPlan, includeDelisted)

Stocks

The stocks endpoint provides a daily updated list of all available stock symbols. It returns an array containing the symbols, which can be used to identify and access specific stock data across various services. This endpoint is essential for users needing to retrieve the latest stock symbol information for further data requests or integration into financial applications.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetStocksRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | The CIK of an instrument for which data is requested (optional)
    cik: 95953,
    // string | Filter by exchange name (optional)
    exchange: NASDAQ,
    // string | Filter by market identifier code (MIC) under ISO 10383 standard (optional)
    micCode: XNGS,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // TypeEnum | The asset class to which the instrument belongs (optional)
    type: Common Stock,
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | The separator used in the CSV response data (optional)
    delimiter: delimiter_example,
    // boolean | Adds info on which plan symbol is available (optional)
    showPlan: true,
    // boolean | Include delisted identifiers (optional)
    includeDelisted: true,
  } satisfies GetStocksRequest;

  try {
    const data = await api.getStocks(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cik** | `string` | The CIK of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Filter by market identifier code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **type** | `TypeEnum` | The asset class to which the instrument belongs | [Optional] [Defaults to `undefined`] [Enum: American Depositary Receipt, Bond, Bond Fund, Closed-end Fund, Common Stock, Depositary Receipt, Digital Currency, ETF, Exchange-Traded Note, Global Depositary Receipt, Limited Partnership, Mutual Fund, Physical Currency, Preferred Stock, REIT, Right, Structured Product, Trust, Unit, Warrant] |
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | The separator used in the CSV response data | [Optional] [Defaults to `&#39;;&#39;`] |
| **showPlan** | `boolean` | Adds info on which plan symbol is available | [Optional] [Defaults to `false`] |
| **includeDelisted** | `boolean` | Include delisted identifiers | [Optional] [Defaults to `false`] |

### Return type

[**GetStocks200Response**](GetStocks200Response.md)

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


## getSymbolSearch

> GetSymbolSearch200Response getSymbolSearch(symbol, outputsize, showPlan)

Symbol search

The symbol search endpoint allows users to find financial instruments by name or symbol. It returns a list of matching symbols, ordered by relevance, with the most relevant instrument first. This is useful for quickly locating specific stocks, ETFs, or other financial instruments when only partial information is available.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetSymbolSearchRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  const body = {
    // string | Symbol to search. Supports: <ul> <li>Ticker symbol of instrument.</li> <li>International securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section</li> <li>The FIGI (Financial Instrument Global Identifier) parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above.</li> <li>Composite FIGI parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above.</li> <li>Share Class FIGI parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above.</li> </ul>
    symbol: AAPL,
    // number | Number of matches in response. Max <code>120</code> (optional)
    outputsize: 789,
    // boolean | Adds info on which plan symbol is available. (optional)
    showPlan: true,
  } satisfies GetSymbolSearchRequest;

  try {
    const data = await api.getSymbolSearch(body);
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
| **symbol** | `string` | Symbol to search. Supports: &lt;ul&gt; &lt;li&gt;Ticker symbol of instrument.&lt;/li&gt; &lt;li&gt;International securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section&lt;/li&gt; &lt;li&gt;The FIGI (Financial Instrument Global Identifier) parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;li&gt;Composite FIGI parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;li&gt;Share Class FIGI parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;/ul&gt; | [Defaults to `undefined`] |
| **outputsize** | `number` | Number of matches in response. Max &lt;code&gt;120&lt;/code&gt; | [Optional] [Defaults to `30`] |
| **showPlan** | `boolean` | Adds info on which plan symbol is available. | [Optional] [Defaults to `false`] |

### Return type

[**GetSymbolSearch200Response**](GetSymbolSearch200Response.md)

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


## getTechnicalIndicators

> GetTechnicalIndicators200Response getTechnicalIndicators()

Technical indicators

The technical indicators endpoint provides a comprehensive list of available technical indicators, each represented as an object. This endpoint is useful for developers looking to integrate a variety of technical analysis tools into their applications, allowing for streamlined access to indicator data without needing to manually configure each one.

### Example

```ts
import {
  Configuration,
  ReferenceDataApi,
} from '@twelvedata/twelvedata-node';
import type { GetTechnicalIndicatorsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new ReferenceDataApi(config);

  try {
    const data = await api.getTechnicalIndicators();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetTechnicalIndicators200Response**](GetTechnicalIndicators200Response.md)

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

