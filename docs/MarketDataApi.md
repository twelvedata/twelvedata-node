# MarketDataApi

All URIs are relative to *https://api.twelvedata.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getEod**](#geteod) | **GET** /eod | End of day price|
|[**getMarketMovers**](#getmarketmovers) | **GET** /market_movers/{market} | Market movers|
|[**getPrice**](#getprice) | **GET** /price | Latest price|
|[**getQuote**](#getquote) | **GET** /quote | Quote|
|[**getTimeSeries**](#gettimeseries) | **GET** /time_series | Time series|
|[**getTimeSeriesCross**](#gettimeseriescross) | **GET** /time_series/cross | Time series cross|

# **getEod**
> GetEod200Response getEod()

The End of Day (EOD) Prices endpoint provides the closing price and other relevant metadata for a financial instrument at the end of a trading day. This endpoint is useful for retrieving daily historical data for stocks, ETFs, or other securities, allowing users to track performance over time and compare daily market movements.

### Example

```typescript
import {
    MarketDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MarketDataApi(configuration);

let symbol: string; //Symbol ticker of the instrument (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let type: TypeEnum; //The asset class to which the instrument belongs (optional) (default to undefined)
let date: string; //If not null, then return data from a specific date (optional) (default to undefined)
let prepost: boolean; //Parameter is optional. Only for the `Pro` plan (individual) and `Venture` plan (business) and above. Available at the `1min`, `5min`, `15min`, and `30min` intervals for US equities. Open, high, low, close values are supplied without volume (optional) (default to false)
let dp: number; //Specifies the number of decimal places for floating values Should be in range [0,11] inclusive (optional) (default to 5)

const { status, data } = await apiInstance.getEod(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    type,
    date,
    prepost,
    dp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of the instrument | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **type** | **TypeEnum** | The asset class to which the instrument belongs | (optional) defaults to undefined|
| **date** | [**string**] | If not null, then return data from a specific date | (optional) defaults to undefined|
| **prepost** | [**boolean**] | Parameter is optional. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume | (optional) defaults to false|
| **dp** | [**number**] | Specifies the number of decimal places for floating values Should be in range [0,11] inclusive | (optional) defaults to 5|


### Return type

**GetEod200Response**

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

# **getMarketMovers**
> MarketMoversResponseBody getMarketMovers()

The market movers endpoint provides a ranked list of the top-gaining and losing assets for the current trading day. It returns detailed data on the highest percentage price increases and decreases since the previous day\'s close. This endpoint supports international equities, forex, and cryptocurrencies, enabling users to quickly identify significant market movements across various asset classes.

### Example

```typescript
import {
    MarketDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MarketDataApi(configuration);

let market: MarketEnum; //Maket type (default to undefined)
let direction: DirectionEnum; //Specifies direction of the snapshot gainers or losers (optional) (default to undefined)
let outputsize: number; //Specifies the size of the snapshot. Can be in a range from `1` to `50` (optional) (default to 30)
let country: string; //Country of the snapshot, applicable to non-currencies only. Takes country name or alpha code (optional) (default to 'USA')
let priceGreaterThan: string; //Takes values with price grater than specified value (optional) (default to undefined)
let dp: string; //Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive (optional) (default to '5')

const { status, data } = await apiInstance.getMarketMovers(
    market,
    direction,
    outputsize,
    country,
    priceGreaterThan,
    dp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **market** | **MarketEnum** | Maket type | defaults to undefined|
| **direction** | **DirectionEnum** | Specifies direction of the snapshot gainers or losers | (optional) defaults to undefined|
| **outputsize** | [**number**] | Specifies the size of the snapshot. Can be in a range from &#x60;1&#x60; to &#x60;50&#x60; | (optional) defaults to 30|
| **country** | [**string**] | Country of the snapshot, applicable to non-currencies only. Takes country name or alpha code | (optional) defaults to 'USA'|
| **priceGreaterThan** | [**string**] | Takes values with price grater than specified value | (optional) defaults to undefined|
| **dp** | [**string**] | Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive | (optional) defaults to '5'|


### Return type

**MarketMoversResponseBody**

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

# **getPrice**
> GetPrice200Response getPrice()

The latest price endpoint provides the latest market price for a specified financial instrument. It returns a single data point representing the current (or the most recently available) trading price.

### Example

```typescript
import {
    MarketDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MarketDataApi(configuration);

let symbol: string; //Symbol ticker of the instrument (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let type: TypeEnum; //The asset class to which the instrument belongs (optional) (default to undefined)
let format: FormatEnum; //Value can be JSON or CSV (optional) (default to undefined)
let delimiter: string; //Specify the delimiter used when downloading the CSV file (optional) (default to ';')
let prepost: boolean; //Parameter is optional. Only for Pro or Venture, and above plans. Available at the `1min`, `5min`, `15min`, and `30min` intervals for US equities. Open, high, low, close values are supplied without volume. (optional) (default to false)
let dp: number; //Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive (optional) (default to 5)

const { status, data } = await apiInstance.getPrice(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    type,
    format,
    delimiter,
    prepost,
    dp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of the instrument | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **type** | **TypeEnum** | The asset class to which the instrument belongs | (optional) defaults to undefined|
| **format** | **FormatEnum** | Value can be JSON or CSV | (optional) defaults to undefined|
| **delimiter** | [**string**] | Specify the delimiter used when downloading the CSV file | (optional) defaults to ';'|
| **prepost** | [**boolean**] | Parameter is optional. Only for Pro or Venture, and above plans. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume. | (optional) defaults to false|
| **dp** | [**number**] | Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive | (optional) defaults to 5|


### Return type

**GetPrice200Response**

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

# **getQuote**
> GetQuote200Response getQuote()

The quote endpoint provides real-time data for a selected financial instrument, returning essential information such as the latest price, open, high, low, close, volume, and price change. This endpoint is ideal for users needing up-to-date market data to track price movements and trading activity for specific stocks, ETFs, or other securities.

### Example

```typescript
import {
    MarketDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MarketDataApi(configuration);

let symbol: string; //Symbol ticker of the instrument (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let interval: IntervalEnum; //Interval of the quote (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let volumeTimePeriod: number; //Number of periods for Average Volume (optional) (default to 9)
let type: TypeEnum; //The asset class to which the instrument belongs (optional) (default to undefined)
let format: FormatEnum; //Value can be JSON or CSV Default JSON (optional) (default to undefined)
let delimiter: string; //Specify the delimiter used when downloading the CSV file (optional) (default to ';')
let prepost: boolean; //Parameter is optional. Only for the `Pro` plan (individual) and `Venture` plan (business) and above. Available at the `1min`, `5min`, `15min`, and `30min` intervals for US equities. Open, high, low, close values are supplied without volume. (optional) (default to false)
let eod: boolean; //If true, then return data for closed day (optional) (default to false)
let rollingPeriod: number; //Number of hours for calculate rolling change at period. By default set to 24, it can be in range [1, 168]. (optional) (default to 24)
let dp: number; //Specifies the number of decimal places for floating values Should be in range [0,11] inclusive (optional) (default to 5)
let timezone: string; //Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>Exchange</code> for local exchange time</li> <li>2. <code>UTC</code> for datetime at universal UTC standard</li> <li>3. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a>.</li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional) (default to 'Exchange')

const { status, data } = await apiInstance.getQuote(
    symbol,
    figi,
    isin,
    cusip,
    interval,
    exchange,
    micCode,
    country,
    volumeTimePeriod,
    type,
    format,
    delimiter,
    prepost,
    eod,
    rollingPeriod,
    dp,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of the instrument | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **interval** | **IntervalEnum** | Interval of the quote | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **volumeTimePeriod** | [**number**] | Number of periods for Average Volume | (optional) defaults to 9|
| **type** | **TypeEnum** | The asset class to which the instrument belongs | (optional) defaults to undefined|
| **format** | **FormatEnum** | Value can be JSON or CSV Default JSON | (optional) defaults to undefined|
| **delimiter** | [**string**] | Specify the delimiter used when downloading the CSV file | (optional) defaults to ';'|
| **prepost** | [**boolean**] | Parameter is optional. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume. | (optional) defaults to false|
| **eod** | [**boolean**] | If true, then return data for closed day | (optional) defaults to false|
| **rollingPeriod** | [**number**] | Number of hours for calculate rolling change at period. By default set to 24, it can be in range [1, 168]. | (optional) defaults to 24|
| **dp** | [**number**] | Specifies the number of decimal places for floating values Should be in range [0,11] inclusive | (optional) defaults to 5|
| **timezone** | [**string**] | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | (optional) defaults to 'Exchange'|


### Return type

**GetQuote200Response**

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

# **getTimeSeries**
> GetTimeSeries200Response getTimeSeries()

The time series endpoint provides detailed historical data for a specified financial instrument. It returns two main components: metadata, which includes essential information about the instrument, and a time series dataset. The time series consists of chronological entries with Open, High, Low, and Close prices, and for applicable instruments, it also includes trading volume. This endpoint is ideal for retrieving comprehensive historical price data for analysis or visualization purposes.

### Example

```typescript
import {
    MarketDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MarketDataApi(configuration);

let interval: IntervalEnum; //Interval between two consecutive points in time series (default to undefined)
let symbol: string; //Symbol ticker of the instrument. E.g. `AAPL`, `EUR/USD`, `ETH/BTC`, ... (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let figi: string; //The FIGI of an instrument for which data is requested. This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let outputsize: number; //Number of data points to retrieve. Supports values in the range from `1` to `5000`. Default `30` when no date parameters are set, otherwise set to maximum (optional) (default to 30)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //The country where the instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let type: TypeEnum; //The asset class to which the instrument belongs (optional) (default to undefined)
let timezone: string; //Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>Exchange</code> for local exchange time</li> <li>2. <code>UTC</code> for datetime at universal UTC standard</li> <li>3. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a></li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional) (default to 'Exchange')
let startDate: string; //Can be used separately and together with `end_date`. Format `2006-01-02` or `2006-01-02T15:04:05`  Default location: <ul> <li>Forex and Cryptocurrencies - <code>UTC</code></li> <li>Stocks - where exchange is located (e.g. for AAPL it will be <code>America/New_York</code>)</li> </ul> Both parameters take into account if <code>timezone</code> parameter is provided.<br/> If <code>timezone</code> is given then, <code>start_date</code> and <code>end_date</code> will be used in the specified location  Examples: <ul> <li>1. <code>&symbol=AAPL&start_date=2019-08-09T15:50:00&…</code><br/> Returns all records starting from 2019-08-09T15:50:00 New York time up to current date</li> <li>2. <code>&symbol=EUR/USD&timezone=Asia/Singapore&start_date=2019-08-09T15:50:00&…</code><br/> Returns all records starting from 2019-08-09T15:50:00 Singapore time up to current date</li> <li>3. <code>&symbol=ETH/BTC&timezone=Europe/Zurich&start_date=2019-08-09T15:50:00&end_date=2019-08-09T15:55:00&...</code><br/> Returns all records starting from 2019-08-09T15:50:00 Zurich time up to 2019-08-09T15:55:00</li> </ul> (optional) (default to undefined)
let endDate: string; //The ending date and time for data selection, see `start_date` description for details. (optional) (default to undefined)
let date: string; //Specifies the exact date to get the data for. Could be the exact date, e.g. `2021-10-27`, or in human language `today` or `yesterday` (optional) (default to undefined)
let order: OrderEnum; //Sorting order of the output (optional) (default to undefined)
let prepost: boolean; //Returns quotes that include pre-market and post-market data. Only for the `Pro` plan (individual) and `Venture` plan (business) and above. Available at the `1min`, `5min`, `15min`, and `30min` intervals for US equities. Open, high, low, close values are supplied without volume (optional) (default to false)
let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //The separator used in the CSV response data (optional) (default to ';')
let dp: number; //Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. By default, the number of decimal places is automatically determined based on the values provided (optional) (default to -1)
let previousClose: boolean; //A boolean parameter to include the previous closing price in the time_series data. If true, adds previous bar close price value to the current object (optional) (default to false)
let adjust: AdjustEnum; //Adjusting mode for prices (optional) (default to undefined)

const { status, data } = await apiInstance.getTimeSeries(
    interval,
    symbol,
    isin,
    figi,
    cusip,
    outputsize,
    exchange,
    micCode,
    country,
    type,
    timezone,
    startDate,
    endDate,
    date,
    order,
    prepost,
    format,
    delimiter,
    dp,
    previousClose,
    adjust
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interval** | **IntervalEnum** | Interval between two consecutive points in time series | defaults to undefined|
| **symbol** | [**string**] | Symbol ticker of the instrument. E.g. &#x60;AAPL&#x60;, &#x60;EUR/USD&#x60;, &#x60;ETH/BTC&#x60;, ... | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **figi** | [**string**] | The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;5000&#x60;. Default &#x60;30&#x60; when no date parameters are set, otherwise set to maximum | (optional) defaults to 30|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **type** | **TypeEnum** | The asset class to which the instrument belongs | (optional) defaults to undefined|
| **timezone** | [**string**] | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | (optional) defaults to 'Exchange'|
| **startDate** | [**string**] | Can be used separately and together with &#x60;end_date&#x60;. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;  Default location: &lt;ul&gt; &lt;li&gt;Forex and Cryptocurrencies - &lt;code&gt;UTC&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Stocks - where exchange is located (e.g. for AAPL it will be &lt;code&gt;America/New_York&lt;/code&gt;)&lt;/li&gt; &lt;/ul&gt; Both parameters take into account if &lt;code&gt;timezone&lt;/code&gt; parameter is provided.&lt;br/&gt; If &lt;code&gt;timezone&lt;/code&gt; is given then, &lt;code&gt;start_date&lt;/code&gt; and &lt;code&gt;end_date&lt;/code&gt; will be used in the specified location  Examples: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;&amp;symbol&#x3D;AAPL&amp;start_date&#x3D;2019-08-09T15:50:00&amp;…&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 New York time up to current date&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;&amp;symbol&#x3D;EUR/USD&amp;timezone&#x3D;Asia/Singapore&amp;start_date&#x3D;2019-08-09T15:50:00&amp;…&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 Singapore time up to current date&lt;/li&gt; &lt;li&gt;3. &lt;code&gt;&amp;symbol&#x3D;ETH/BTC&amp;timezone&#x3D;Europe/Zurich&amp;start_date&#x3D;2019-08-09T15:50:00&amp;end_date&#x3D;2019-08-09T15:55:00&amp;...&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 Zurich time up to 2019-08-09T15:55:00&lt;/li&gt; &lt;/ul&gt; | (optional) defaults to undefined|
| **endDate** | [**string**] | The ending date and time for data selection, see &#x60;start_date&#x60; description for details. | (optional) defaults to undefined|
| **date** | [**string**] | Specifies the exact date to get the data for. Could be the exact date, e.g. &#x60;2021-10-27&#x60;, or in human language &#x60;today&#x60; or &#x60;yesterday&#x60; | (optional) defaults to undefined|
| **order** | **OrderEnum** | Sorting order of the output | (optional) defaults to undefined|
| **prepost** | [**boolean**] | Returns quotes that include pre-market and post-market data. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume | (optional) defaults to false|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | The separator used in the CSV response data | (optional) defaults to ';'|
| **dp** | [**number**] | Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. By default, the number of decimal places is automatically determined based on the values provided | (optional) defaults to -1|
| **previousClose** | [**boolean**] | A boolean parameter to include the previous closing price in the time_series data. If true, adds previous bar close price value to the current object | (optional) defaults to false|
| **adjust** | **AdjustEnum** | Adjusting mode for prices | (optional) defaults to undefined|


### Return type

**GetTimeSeries200Response**

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

# **getTimeSeriesCross**
> GetTimeSeriesCross200Response getTimeSeriesCross()

The Time Series Cross endpoint calculates and returns historical cross-rate data for exotic forex pairs, cryptocurrencies, or stocks (e.g., Apple Inc. price in Indian Rupees) on the fly. It provides metadata about the requested symbol and a time series array with Open, High, Low, and Close prices, sorted descending by time, enabling analysis of price history and market trends.

### Example

```typescript
import {
    MarketDataApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MarketDataApi(configuration);

let base: string; //Base currency symbol (default to undefined)
let quote: string; //Quote currency symbol (default to undefined)
let interval: IntervalEnum; //Interval between two consecutive points in time series (default to undefined)
let baseType: string; //Base instrument type according to the `/instrument_type` endpoint (optional) (default to undefined)
let baseExchange: string; //Base exchange (optional) (default to undefined)
let baseMicCode: string; //Base MIC code (optional) (default to undefined)
let quoteType: string; //Quote instrument type according to the `/instrument_type` endpoint (optional) (default to undefined)
let quoteExchange: string; //Quote exchange (optional) (default to undefined)
let quoteMicCode: string; //Quote MIC code (optional) (default to undefined)
let outputsize: number; //Number of data points to retrieve. Supports values in the range from `1` to `5000`. Default `30` when no date parameters are set, otherwise set to maximum (optional) (default to undefined)
let format: FormatEnum; //Format of the response data (optional) (default to undefined)
let delimiter: string; //Delimiter used in CSV file (optional) (default to ';')
let prepost: boolean; //Only for the `Pro` plan (individual) and `Venture` plan (business) and above. Available at the `1min`, `5min`, `15min`, and `30min` intervals for US equities. Open, high, low, close values are supplied without volume. (optional) (default to false)
let startDate: string; //Start date for the time series data (optional) (default to undefined)
let endDate: string; //End date for the time series data (optional) (default to undefined)
let adjust: boolean; //Specifies if there should be an adjustment (optional) (default to true)
let dp: number; //Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. (optional) (default to 5)
let timezone: string; //Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>Exchange</code> for local exchange time</li> <li>2. <code>UTC</code> for datetime at universal UTC standard</li> <li>3. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a>.</li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional) (default to undefined)

const { status, data } = await apiInstance.getTimeSeriesCross(
    base,
    quote,
    interval,
    baseType,
    baseExchange,
    baseMicCode,
    quoteType,
    quoteExchange,
    quoteMicCode,
    outputsize,
    format,
    delimiter,
    prepost,
    startDate,
    endDate,
    adjust,
    dp,
    timezone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **base** | [**string**] | Base currency symbol | defaults to undefined|
| **quote** | [**string**] | Quote currency symbol | defaults to undefined|
| **interval** | **IntervalEnum** | Interval between two consecutive points in time series | defaults to undefined|
| **baseType** | [**string**] | Base instrument type according to the &#x60;/instrument_type&#x60; endpoint | (optional) defaults to undefined|
| **baseExchange** | [**string**] | Base exchange | (optional) defaults to undefined|
| **baseMicCode** | [**string**] | Base MIC code | (optional) defaults to undefined|
| **quoteType** | [**string**] | Quote instrument type according to the &#x60;/instrument_type&#x60; endpoint | (optional) defaults to undefined|
| **quoteExchange** | [**string**] | Quote exchange | (optional) defaults to undefined|
| **quoteMicCode** | [**string**] | Quote MIC code | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;5000&#x60;. Default &#x60;30&#x60; when no date parameters are set, otherwise set to maximum | (optional) defaults to undefined|
| **format** | **FormatEnum** | Format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | Delimiter used in CSV file | (optional) defaults to ';'|
| **prepost** | [**boolean**] | Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume. | (optional) defaults to false|
| **startDate** | [**string**] | Start date for the time series data | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for the time series data | (optional) defaults to undefined|
| **adjust** | [**boolean**] | Specifies if there should be an adjustment | (optional) defaults to true|
| **dp** | [**number**] | Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. | (optional) defaults to 5|
| **timezone** | [**string**] | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | (optional) defaults to undefined|


### Return type

**GetTimeSeriesCross200Response**

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

