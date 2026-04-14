# CurrenciesApi

All URIs are relative to *https://api.twelvedata.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCurrencyConversion**](CurrenciesApi.md#getcurrencyconversion) | **GET** /currency_conversion | Currency conversion |
| [**getExchangeRate**](CurrenciesApi.md#getexchangerate) | **GET** /exchange_rate | Exchange rate |



## getCurrencyConversion

> GetCurrencyConversion200Response getCurrencyConversion(symbol, amount, date, format, delimiter, dp, timezone)

Currency conversion

The currency conversion endpoint provides real-time exchange rates and calculates the converted amount for specified currency pairs, including both forex and cryptocurrencies. This endpoint is useful for obtaining up-to-date conversion values between two currencies, facilitating tasks such as financial reporting, e-commerce transactions, and travel budgeting.

### Example

```ts
import {
  Configuration,
  CurrenciesApi,
} from '@twelvedata/twelvedata-node';
import type { GetCurrencyConversionRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new CurrenciesApi(config);

  const body = {
    // string | The currency pair you want to request can be either forex or cryptocurrency. Slash(`/`) delimiter is used. E.g. `EUR/USD` or `BTC/ETH` will be correct
    symbol: EUR/USD,
    // number | Amount of base currency to be converted into quote currency. Supports values in the range from `0` and above
    amount: 100,
    // string | If not null, will use exchange rate from a specific date or time. Format `2006-01-02` or `2006-01-02T15:04:05`. Is set in the local exchange time zone, use timezone parameter to specify a specific time zone (optional)
    date: 2006-01-02T15:04:05,
    // FormatEnum | Value can be `JSON` or `CSV`. Default `JSON` (optional)
    format: ...,
    // string | Specify the delimiter used when downloading the `CSV` file. Default semicolon `;` (optional)
    delimiter: delimiter_example,
    // number | The number of decimal places for the data (optional)
    dp: 789,
    // string | Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>Exchange</code> for local exchange time</li> <li>2. <code>UTC</code> for datetime at universal UTC standard</li> <li>3. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a>.</li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional)
    timezone: UTC,
  } satisfies GetCurrencyConversionRequest;

  try {
    const data = await api.getCurrencyConversion(body);
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
| **symbol** | `string` | The currency pair you want to request can be either forex or cryptocurrency. Slash(&#x60;/&#x60;) delimiter is used. E.g. &#x60;EUR/USD&#x60; or &#x60;BTC/ETH&#x60; will be correct | [Defaults to `undefined`] |
| **amount** | `number` | Amount of base currency to be converted into quote currency. Supports values in the range from &#x60;0&#x60; and above | [Defaults to `undefined`] |
| **date** | `string` | If not null, will use exchange rate from a specific date or time. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;. Is set in the local exchange time zone, use timezone parameter to specify a specific time zone | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | Value can be &#x60;JSON&#x60; or &#x60;CSV&#x60;. Default &#x60;JSON&#x60; | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | Specify the delimiter used when downloading the &#x60;CSV&#x60; file. Default semicolon &#x60;;&#x60; | [Optional] [Defaults to `&#39;;&#39;`] |
| **dp** | `number` | The number of decimal places for the data | [Optional] [Defaults to `5`] |
| **timezone** | `string` | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCurrencyConversion200Response**](GetCurrencyConversion200Response.md)

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


## getExchangeRate

> GetExchangeRate200Response getExchangeRate(symbol, date, format, delimiter, dp, timezone)

Exchange rate

The exchange rate endpoint provides real-time exchange rates for specified currency pairs, including both forex and cryptocurrency. It returns the current exchange rate value between two currencies, allowing users to quickly access up-to-date conversion rates for financial transactions or market analysis.

### Example

```ts
import {
  Configuration,
  CurrenciesApi,
} from '@twelvedata/twelvedata-node';
import type { GetExchangeRateRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new CurrenciesApi(config);

  const body = {
    // string | The currency pair you want to request can be either forex or cryptocurrency. Slash(`/`) delimiter is used. E.g. `EUR/USD` or `BTC/ETH` will be correct
    symbol: EUR/USD,
    // string | If not null, will use exchange rate from a specific date or time. Format `2006-01-02` or `2006-01-02T15:04:05`. Is set in the local exchange time zone, use timezone parameter to specify a specific time zone (optional)
    date: 2006-01-02T15:04:05,
    // FormatEnum | Value can be `JSON` or `CSV`. Default `JSON` (optional)
    format: ...,
    // string | Specify the delimiter used when downloading the `CSV` file. Default semicolon `;` (optional)
    delimiter: delimiter_example,
    // number | The number of decimal places for the data (optional)
    dp: 789,
    // string | Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>Exchange</code> for local exchange time</li> <li>2. <code>UTC</code> for datetime at universal UTC standard</li> <li>3. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a>.</li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional)
    timezone: UTC,
  } satisfies GetExchangeRateRequest;

  try {
    const data = await api.getExchangeRate(body);
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
| **symbol** | `string` | The currency pair you want to request can be either forex or cryptocurrency. Slash(&#x60;/&#x60;) delimiter is used. E.g. &#x60;EUR/USD&#x60; or &#x60;BTC/ETH&#x60; will be correct | [Defaults to `undefined`] |
| **date** | `string` | If not null, will use exchange rate from a specific date or time. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;. Is set in the local exchange time zone, use timezone parameter to specify a specific time zone | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | Value can be &#x60;JSON&#x60; or &#x60;CSV&#x60;. Default &#x60;JSON&#x60; | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | Specify the delimiter used when downloading the &#x60;CSV&#x60; file. Default semicolon &#x60;;&#x60; | [Optional] [Defaults to `&#39;;&#39;`] |
| **dp** | `number` | The number of decimal places for the data | [Optional] [Defaults to `5`] |
| **timezone** | `string` | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetExchangeRate200Response**](GetExchangeRate200Response.md)

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

