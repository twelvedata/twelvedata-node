# ReferenceDataApi

All URIs are relative to *https://api.twelvedata.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBonds**](#getbonds) | **GET** /bonds | Fixed income|
|[**getCommodities**](#getcommodities) | **GET** /commodities | Commodities|
|[**getCountries**](#getcountries) | **GET** /countries | Countries|
|[**getCrossListings**](#getcrosslistings) | **GET** /cross_listings | Cross listings|
|[**getCryptocurrencies**](#getcryptocurrencies) | **GET** /cryptocurrencies | Cryptocurrency pairs|
|[**getCryptocurrencyExchanges**](#getcryptocurrencyexchanges) | **GET** /cryptocurrency_exchanges | Cryptocurrency exchanges|
|[**getEarliestTimestamp**](#getearliesttimestamp) | **GET** /earliest_timestamp | Earliest timestamp|
|[**getEtf**](#getetf) | **GET** /etfs | ETFs|
|[**getExchangeSchedule**](#getexchangeschedule) | **GET** /exchange_schedule | Exchanges schedule|
|[**getExchanges**](#getexchanges) | **GET** /exchanges | Exchanges|
|[**getForexPairs**](#getforexpairs) | **GET** /forex_pairs | Forex pairs|
|[**getFunds**](#getfunds) | **GET** /funds | Funds|
|[**getInstrumentType**](#getinstrumenttype) | **GET** /instrument_type | Instrument type|
|[**getIntervals**](#getintervals) | **GET** /intervals | Intervals List|
|[**getMarketState**](#getmarketstate) | **GET** /market_state | Market state|
|[**getStocks**](#getstocks) | **GET** /stocks | Stocks|
|[**getSymbolSearch**](#getsymbolsearch) | **GET** /symbol_search | Symbol search|
|[**getTechnicalIndicators**](#gettechnicalindicators) | **GET** /technical_indicators | Technical indicators|

# **getBonds**
> GetBonds200Response getBonds()

The fixed income endpoint provides a daily updated list of available bonds. It returns an array containing detailed information about each bond, including identifiers, names, and other relevant attributes.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested (optional) (default to undefined)
let exchange: string; //Filter by exchange name (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //The separator used in the CSV response data (optional) (default to ';')
let showPlan: boolean; //Adds info on which plan symbol is available (optional) (default to false)
let page: number; //Page number of the results to fetch (optional) (default to 1)
let outputsize: number; //Determines the number of data points returned in the output (optional) (default to 5000)

const { status, data } = await apiInstance.getBonds(
    symbol,
    exchange,
    country,
    format,
    delimiter,
    showPlan,
    page,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested | (optional) defaults to undefined|
| **exchange** | [**string**] | Filter by exchange name | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | The separator used in the CSV response data | (optional) defaults to ';'|
| **showPlan** | [**boolean**] | Adds info on which plan symbol is available | (optional) defaults to false|
| **page** | [**number**] | Page number of the results to fetch | (optional) defaults to 1|
| **outputsize** | [**number**] | Determines the number of data points returned in the output | (optional) defaults to 5000|


### Return type

**GetBonds200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCommodities**
> GetCommodities200Response getCommodities()

The commodities endpoint provides a daily updated list of available commodity pairs, across precious metals, livestock, softs, grains, etc.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested (optional) (default to undefined)
let category: string; //Filter by category of commodity (optional) (default to undefined)
let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //The separator used in the CSV response data (optional) (default to ';')

const { status, data } = await apiInstance.getCommodities(
    symbol,
    category,
    format,
    delimiter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested | (optional) defaults to undefined|
| **category** | [**string**] | Filter by category of commodity | (optional) defaults to undefined|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | The separator used in the CSV response data | (optional) defaults to ';'|


### Return type

**GetCommodities200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCountries**
> GetCountries200Response getCountries()

The countries endpoint provides a comprehensive list of countries, including their ISO codes, official names, capitals, and currencies. This data is essential for applications requiring accurate country information for tasks such as localization, currency conversion, or geographic analysis.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

const { status, data } = await apiInstance.getCountries();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetCountries200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCrossListings**
> GetCrossListings200Response getCrossListings()

The cross_listings endpoint provides a daily updated list of cross-listed symbols for a specified financial instrument. Cross-listed symbols represent the same security available on multiple exchanges. This endpoint is useful for identifying all the exchanges where a particular security is traded, allowing users to access comprehensive trading information across different markets.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market identifier code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country to which stock exchange belongs to (optional) (default to undefined)

const { status, data } = await apiInstance.getCrossListings(
    symbol,
    exchange,
    micCode,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested | defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market identifier code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country to which stock exchange belongs to | (optional) defaults to undefined|


### Return type

**GetCrossListings200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCryptocurrencies**
> GetCryptocurrencies200Response getCryptocurrencies()

The cryptocurrencies endpoint provides a daily updated list of all available cryptos. It returns an array containing detailed information about each cryptocurrency, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of cryptocurrencies for applications that require up-to-date market listings or need to display available crypto assets to users.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested (optional) (default to undefined)
let exchange: string; //Filter by exchange name. E.g. `Binance`, `Coinbase`, etc. (optional) (default to undefined)
let currencyBase: string; //Filter by currency base (optional) (default to undefined)
let currencyQuote: string; //Filter by currency quote (optional) (default to undefined)
let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //The separator used in the CSV response data (optional) (default to ';')

const { status, data } = await apiInstance.getCryptocurrencies(
    symbol,
    exchange,
    currencyBase,
    currencyQuote,
    format,
    delimiter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested | (optional) defaults to undefined|
| **exchange** | [**string**] | Filter by exchange name. E.g. &#x60;Binance&#x60;, &#x60;Coinbase&#x60;, etc. | (optional) defaults to undefined|
| **currencyBase** | [**string**] | Filter by currency base | (optional) defaults to undefined|
| **currencyQuote** | [**string**] | Filter by currency quote | (optional) defaults to undefined|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | The separator used in the CSV response data | (optional) defaults to ';'|


### Return type

**GetCryptocurrencies200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCryptocurrencyExchanges**
> GetCryptocurrencyExchanges200Response getCryptocurrencyExchanges()

The cryptocurrency exchanges endpoint provides a daily updated list of available cryptocurrency exchanges. It returns an array containing details about each exchange, such as exchange names and identifiers.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //Specify the delimiter used when downloading the CSV file (optional) (default to ';')

const { status, data } = await apiInstance.getCryptocurrencyExchanges(
    format,
    delimiter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | Specify the delimiter used when downloading the CSV file | (optional) defaults to ';'|


### Return type

**GetCryptocurrencyExchanges200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEarliestTimestamp**
> GetEarliestTimestamp200Response getEarliestTimestamp()

The earliest_timestamp endpoint provides the earliest available date and time for a specified financial instrument at a given data interval. This endpoint is useful for determining the starting point of historical data availability for various assets, such as stocks or currencies, allowing users to understand the time range covered by the data.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let interval: IntervalEnum; //Interval between two consecutive points in time series. (default to undefined)
let symbol: string; //Symbol ticker of the instrument. (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded. (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard. (optional) (default to undefined)
let timezone: string; //Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>Exchange</code> for local exchange time</li> <li>2. <code>UTC</code> for datetime at universal UTC standard</li> <li>3. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a>.</li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional) (default to 'Exchange')

const { status, data } = await apiInstance.getEarliestTimestamp(
    interval,
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interval** | **IntervalEnum** | Interval between two consecutive points in time series. | defaults to undefined|
| **symbol** | [**string**] | Symbol ticker of the instrument. | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded. | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard. | (optional) defaults to undefined|
| **timezone** | [**string**] | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | (optional) defaults to 'Exchange'|


### Return type

**GetEarliestTimestamp200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEtf**
> GetEtf200Response getEtf()

The ETFs endpoint provides a daily updated list of all available Exchange-Traded Funds. It returns an array containing detailed information about each ETF, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of ETFs for portfolio management, investment tracking, or financial analysis.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cik: string; //The CIK of an instrument for which data is requested (optional) (default to undefined)
let exchange: string; //Filter by exchange name (optional) (default to undefined)
let micCode: string; //Filter by market identifier code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //The separator used in the CSV response data (optional) (default to ';')
let showPlan: boolean; //Adds info on which plan symbol is available (optional) (default to false)
let includeDelisted: boolean; //Include delisted identifiers (optional) (default to false)

const { status, data } = await apiInstance.getEtf(
    symbol,
    figi,
    isin,
    cusip,
    cik,
    exchange,
    micCode,
    country,
    format,
    delimiter,
    showPlan,
    includeDelisted
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cik** | [**string**] | The CIK of an instrument for which data is requested | (optional) defaults to undefined|
| **exchange** | [**string**] | Filter by exchange name | (optional) defaults to undefined|
| **micCode** | [**string**] | Filter by market identifier code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | The separator used in the CSV response data | (optional) defaults to ';'|
| **showPlan** | [**boolean**] | Adds info on which plan symbol is available | (optional) defaults to false|
| **includeDelisted** | [**boolean**] | Include delisted identifiers | (optional) defaults to false|


### Return type

**GetEtf200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExchangeSchedule**
> GetExchangeSchedule200Response getExchangeSchedule()

The exchanges schedule endpoint provides detailed information about various stock exchanges, including their trading hours and operational days. This data is essential for users who need to know when specific exchanges are open for trading, allowing them to plan their activities around the availability of these markets.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let micName: string; //Filter by exchange name (optional) (default to undefined)
let micCode: string; //Filter by market identifier code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let date: string; //<p> If a date is provided, the API returns the schedule for the specified date; otherwise, it returns the default (common) schedule. </p> The date can be specified in one of the following formats: <ul> <li>An exact date (e.g., <code>2021-10-27</code>)</li> <li>A human-readable keyword: <code>today</code> or <code>yesterday</code></li> <li>A full datetime string in UTC (e.g., <code>2025-04-11T20:00:00</code>) to retrieve the schedule corresponding to the day in the specified time.</li> </ul> When using a datetime value, the resulting schedule will correspond to the local calendar day at the specified time. For example, <code>2025-04-11T20:00:00 UTC</code> corresponds to: <ul> <li><code>2025-04-11</code> in the <code>America/New_York</code> timezone</li> <li><code>2025-04-12</code> in the <code>Australia/Sydney</code> timezone</li> </ul> (optional) (default to undefined)

const { status, data } = await apiInstance.getExchangeSchedule(
    micName,
    micCode,
    country,
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **micName** | [**string**] | Filter by exchange name | (optional) defaults to undefined|
| **micCode** | [**string**] | Filter by market identifier code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **date** | [**string**] | &lt;p&gt; If a date is provided, the API returns the schedule for the specified date; otherwise, it returns the default (common) schedule. &lt;/p&gt; The date can be specified in one of the following formats: &lt;ul&gt; &lt;li&gt;An exact date (e.g., &lt;code&gt;2021-10-27&lt;/code&gt;)&lt;/li&gt; &lt;li&gt;A human-readable keyword: &lt;code&gt;today&lt;/code&gt; or &lt;code&gt;yesterday&lt;/code&gt;&lt;/li&gt; &lt;li&gt;A full datetime string in UTC (e.g., &lt;code&gt;2025-04-11T20:00:00&lt;/code&gt;) to retrieve the schedule corresponding to the day in the specified time.&lt;/li&gt; &lt;/ul&gt; When using a datetime value, the resulting schedule will correspond to the local calendar day at the specified time. For example, &lt;code&gt;2025-04-11T20:00:00 UTC&lt;/code&gt; corresponds to: &lt;ul&gt; &lt;li&gt;&lt;code&gt;2025-04-11&lt;/code&gt; in the &lt;code&gt;America/New_York&lt;/code&gt; timezone&lt;/li&gt; &lt;li&gt;&lt;code&gt;2025-04-12&lt;/code&gt; in the &lt;code&gt;Australia/Sydney&lt;/code&gt; timezone&lt;/li&gt; &lt;/ul&gt; | (optional) defaults to undefined|


### Return type

**GetExchangeSchedule200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExchanges**
> GetExchanges200Response getExchanges()

The exchanges endpoint provides a comprehensive list of all available equity exchanges. It returns an array containing detailed information about each exchange, such as exchange code, name, country, and timezone. This data is updated daily.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let type: TypeEnum; //The asset class to which the instrument belongs (optional) (default to undefined)
let name: string; //Filter by exchange name (optional) (default to undefined)
let code: string; //Filter by market identifier code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //The separator used in the CSV response data (optional) (default to ';')
let showPlan: boolean; //Adds info on which plan symbol is available (optional) (default to false)

const { status, data } = await apiInstance.getExchanges(
    type,
    name,
    code,
    country,
    format,
    delimiter,
    showPlan
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | **TypeEnum** | The asset class to which the instrument belongs | (optional) defaults to undefined|
| **name** | [**string**] | Filter by exchange name | (optional) defaults to undefined|
| **code** | [**string**] | Filter by market identifier code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | The separator used in the CSV response data | (optional) defaults to ';'|
| **showPlan** | [**boolean**] | Adds info on which plan symbol is available | (optional) defaults to false|


### Return type

**GetExchanges200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getForexPairs**
> GetForexPairs200Response getForexPairs()

The forex pairs endpoint provides a comprehensive list of all available foreign exchange currency pairs. It returns an array of forex pairs, which is updated daily.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested (optional) (default to undefined)
let currencyBase: string; //Filter by currency base (optional) (default to undefined)
let currencyQuote: string; //Filter by currency quote (optional) (default to undefined)
let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //The separator used in the CSV response data (optional) (default to ';')

const { status, data } = await apiInstance.getForexPairs(
    symbol,
    currencyBase,
    currencyQuote,
    format,
    delimiter
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested | (optional) defaults to undefined|
| **currencyBase** | [**string**] | Filter by currency base | (optional) defaults to undefined|
| **currencyQuote** | [**string**] | Filter by currency quote | (optional) defaults to undefined|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | The separator used in the CSV response data | (optional) defaults to ';'|


### Return type

**GetForexPairs200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFunds**
> GetFunds200Response getFunds()

The funds endpoint provides a daily updated list of available investment funds. It returns an array containing detailed information about each fund, including identifiers, names, and other relevant attributes.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cik: string; //The CIK of an instrument for which data is requested (optional) (default to undefined)
let exchange: string; //Filter by exchange name (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //The separator used in the CSV response data (optional) (default to ';')
let showPlan: boolean; //Adds info on which plan symbol is available (optional) (default to false)
let page: number; //Page number of the results to fetch (optional) (default to 1)
let outputsize: number; //Determines the number of data points returned in the output (optional) (default to 5000)

const { status, data } = await apiInstance.getFunds(
    symbol,
    figi,
    isin,
    cusip,
    cik,
    exchange,
    country,
    format,
    delimiter,
    showPlan,
    page,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cik** | [**string**] | The CIK of an instrument for which data is requested | (optional) defaults to undefined|
| **exchange** | [**string**] | Filter by exchange name | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | The separator used in the CSV response data | (optional) defaults to ';'|
| **showPlan** | [**boolean**] | Adds info on which plan symbol is available | (optional) defaults to false|
| **page** | [**number**] | Page number of the results to fetch | (optional) defaults to 1|
| **outputsize** | [**number**] | Determines the number of data points returned in the output | (optional) defaults to 5000|


### Return type

**GetFunds200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInstrumentType**
> GetInstrumentType200Response getInstrumentType()

The instrument type endpoint lists all available financial instrument types, such as stocks, ETFs, and cryptos. This information is essential for users to identify and categorize different financial instruments when accessing or analyzing market data.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

const { status, data } = await apiInstance.getInstrumentType();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetInstrumentType200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIntervals**
> GetIntervals200Response getIntervals()

The intervals endpoint provides a list of supported time intervals that can be used for querying financial data.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

const { status, data } = await apiInstance.getIntervals();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetIntervals200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMarketState**
> Array<MarketStateResponseItem> getMarketState()

The market state endpoint provides real-time information on the operational status of all available stock exchanges. It returns data on whether each exchange is currently open or closed, along with the time remaining until the next opening or closing. This endpoint is useful for users who need to monitor exchange hours and plan their trading activities accordingly.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let exchange: string; //The exchange name where the instrument is traded. (optional) (default to undefined)
let code: string; //The Market Identifier Code (MIC) of the exchange where the instrument is traded. (optional) (default to undefined)
let country: string; //The country where the exchange is located. Takes country name or alpha code. (optional) (default to undefined)

const { status, data } = await apiInstance.getMarketState(
    exchange,
    code,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exchange** | [**string**] | The exchange name where the instrument is traded. | (optional) defaults to undefined|
| **code** | [**string**] | The Market Identifier Code (MIC) of the exchange where the instrument is traded. | (optional) defaults to undefined|
| **country** | [**string**] | The country where the exchange is located. Takes country name or alpha code. | (optional) defaults to undefined|


### Return type

**Array<MarketStateResponseItem>**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStocks**
> GetStocks200Response getStocks()

The stocks endpoint provides a daily updated list of all available stock symbols. It returns an array containing the symbols, which can be used to identify and access specific stock data across various services. This endpoint is essential for users needing to retrieve the latest stock symbol information for further data requests or integration into financial applications.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cik: string; //The CIK of an instrument for which data is requested (optional) (default to undefined)
let exchange: string; //Filter by exchange name (optional) (default to undefined)
let micCode: string; //Filter by market identifier code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let type: TypeEnum; //The asset class to which the instrument belongs (optional) (default to undefined)
let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //The separator used in the CSV response data (optional) (default to ';')
let showPlan: boolean; //Adds info on which plan symbol is available (optional) (default to false)
let includeDelisted: boolean; //Include delisted identifiers (optional) (default to false)

const { status, data } = await apiInstance.getStocks(
    symbol,
    figi,
    isin,
    cusip,
    cik,
    exchange,
    micCode,
    country,
    type,
    format,
    delimiter,
    showPlan,
    includeDelisted
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cik** | [**string**] | The CIK of an instrument for which data is requested | (optional) defaults to undefined|
| **exchange** | [**string**] | Filter by exchange name | (optional) defaults to undefined|
| **micCode** | [**string**] | Filter by market identifier code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **type** | **TypeEnum** | The asset class to which the instrument belongs | (optional) defaults to undefined|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | The separator used in the CSV response data | (optional) defaults to ';'|
| **showPlan** | [**boolean**] | Adds info on which plan symbol is available | (optional) defaults to false|
| **includeDelisted** | [**boolean**] | Include delisted identifiers | (optional) defaults to false|


### Return type

**GetStocks200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSymbolSearch**
> GetSymbolSearch200Response getSymbolSearch()

The symbol search endpoint allows users to find financial instruments by name or symbol. It returns a list of matching symbols, ordered by relevance, with the most relevant instrument first. This is useful for quickly locating specific stocks, ETFs, or other financial instruments when only partial information is available.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

let symbol: string; //Symbol to search. Supports: <ul> <li>Ticker symbol of instrument.</li> <li>International securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section</li> <li>The FIGI (Financial Instrument Global Identifier) parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above.</li> <li>Composite FIGI parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above.</li> <li>Share Class FIGI parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above.</li> </ul> (default to undefined)
let outputsize: number; //Number of matches in response. Max <code>120</code> (optional) (default to 30)
let showPlan: boolean; //Adds info on which plan symbol is available. (optional) (default to false)

const { status, data } = await apiInstance.getSymbolSearch(
    symbol,
    outputsize,
    showPlan
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol to search. Supports: &lt;ul&gt; &lt;li&gt;Ticker symbol of instrument.&lt;/li&gt; &lt;li&gt;International securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section&lt;/li&gt; &lt;li&gt;The FIGI (Financial Instrument Global Identifier) parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;li&gt;Composite FIGI parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;li&gt;Share Class FIGI parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;/ul&gt; | defaults to undefined|
| **outputsize** | [**number**] | Number of matches in response. Max &lt;code&gt;120&lt;/code&gt; | (optional) defaults to 30|
| **showPlan** | [**boolean**] | Adds info on which plan symbol is available. | (optional) defaults to false|


### Return type

**GetSymbolSearch200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTechnicalIndicators**
> GetTechnicalIndicators200Response getTechnicalIndicators()

The technical indicators endpoint provides a comprehensive list of available technical indicators, each represented as an object. This endpoint is useful for developers looking to integrate a variety of technical analysis tools into their applications, allowing for streamlined access to indicator data without needing to manually configure each one.

### Example

```typescript
import {
    ReferenceDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new ReferenceDataApi(configuration);

const { status, data } = await apiInstance.getTechnicalIndicators();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetTechnicalIndicators200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

