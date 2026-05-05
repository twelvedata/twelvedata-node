# FundamentalsApi

All URIs are relative to *https://api.twelvedata.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBalanceSheet**](FundamentalsApi.md#getbalancesheet) | **GET** /balance_sheet | Balance sheet |
| [**getBalanceSheetConsolidated**](FundamentalsApi.md#getbalancesheetconsolidated) | **GET** /balance_sheet/consolidated | Balance sheet consolidated |
| [**getCashFlow**](FundamentalsApi.md#getcashflow) | **GET** /cash_flow | Cash flow |
| [**getCashFlowConsolidated**](FundamentalsApi.md#getcashflowconsolidated) | **GET** /cash_flow/consolidated | Cash flow consolidated |
| [**getDividends**](FundamentalsApi.md#getdividends) | **GET** /dividends | Dividends |
| [**getDividendsCalendar**](FundamentalsApi.md#getdividendscalendar) | **GET** /dividends_calendar | Dividends calendar |
| [**getEarnings**](FundamentalsApi.md#getearnings) | **GET** /earnings | Earnings |
| [**getEarningsCalendar**](FundamentalsApi.md#getearningscalendar) | **GET** /earnings_calendar | Earnings calendar |
| [**getIncomeStatement**](FundamentalsApi.md#getincomestatement) | **GET** /income_statement | Income statement |
| [**getIncomeStatementConsolidated**](FundamentalsApi.md#getincomestatementconsolidated) | **GET** /income_statement/consolidated | Income statement consolidated |
| [**getIpoCalendar**](FundamentalsApi.md#getipocalendar) | **GET** /ipo_calendar | IPO calendar |
| [**getKeyExecutives**](FundamentalsApi.md#getkeyexecutives) | **GET** /key_executives | Key executives |
| [**getLastChanges**](FundamentalsApi.md#getlastchanges) | **GET** /last_change/{endpoint} | Last changes |
| [**getLogo**](FundamentalsApi.md#getlogo) | **GET** /logo | Logo |
| [**getMarketCap**](FundamentalsApi.md#getmarketcap) | **GET** /market_cap | Market capitalization |
| [**getProfile**](FundamentalsApi.md#getprofile) | **GET** /profile | Profile |
| [**getSplits**](FundamentalsApi.md#getsplits) | **GET** /splits | Splits |
| [**getSplitsCalendar**](FundamentalsApi.md#getsplitscalendar) | **GET** /splits_calendar | Splits calendar |
| [**getStatistics**](FundamentalsApi.md#getstatistics) | **GET** /statistics | Statistics |
| [**pressReleasesListParameters**](FundamentalsApi.md#pressreleaseslistparameters) | **GET** /press_releases | Press releases |



## getBalanceSheet

> GetBalanceSheet200Response getBalanceSheet(symbol, figi, isin, cusip, exchange, micCode, country, period, startDate, endDate, outputsize)

Balance sheet

The balance sheet endpoint provides a detailed financial statement for a company, outlining its assets, liabilities, and shareholders\&#39; equity. This endpoint returns structured data that includes current and non-current assets, total liabilities, and equity figures, enabling users to assess a company\&#39;s financial health and stability.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetBalanceSheetRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
    // PeriodEnum | The reporting period for the balane sheet data (optional)
    period: ...,
    // string | Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format `2006-01-02` (optional)
    startDate: 2024-01-01,
    // string | End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format `2006-01-02` (optional)
    endDate: 2024-05-01,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetBalanceSheetRequest;

  try {
    const data = await api.getBalanceSheet(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **period** | `PeriodEnum` | The reporting period for the balane sheet data | [Optional] [Defaults to `undefined`] [Enum: annual, quarterly] |
| **startDate** | `string` | Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `6`] |

### Return type

[**GetBalanceSheet200Response**](GetBalanceSheet200Response.md)

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


## getBalanceSheetConsolidated

> GetBalanceSheetConsolidated200Response getBalanceSheetConsolidated(symbol, figi, isin, cusip, exchange, micCode, country, period, startDate, endDate, outputsize)

Balance sheet consolidated

The balance sheet consolidated endpoint provides a detailed overview of a company\&#39;s raw balance sheet, including a comprehensive summary of its assets, liabilities, and shareholders\&#39; equity. This endpoint is useful for retrieving financial data that reflects the overall financial position of a company, allowing users to access critical information about its financial health and structure.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetBalanceSheetConsolidatedRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
    // PeriodEnum | The reporting period for the balance sheet data. (optional)
    period: ...,
    // string | Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format `2006-01-02` (optional)
    startDate: startDate_example,
    // string | End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format `2006-01-02` (optional)
    endDate: endDate_example,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetBalanceSheetConsolidatedRequest;

  try {
    const data = await api.getBalanceSheetConsolidated(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **period** | `PeriodEnum` | The reporting period for the balance sheet data. | [Optional] [Defaults to `undefined`] [Enum: annual, quarterly] |
| **startDate** | `string` | Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `6`] |

### Return type

[**GetBalanceSheetConsolidated200Response**](GetBalanceSheetConsolidated200Response.md)

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


## getCashFlow

> GetCashFlow200Response getCashFlow(symbol, figi, isin, cusip, exchange, micCode, country, period, startDate, endDate, outputsize)

Cash flow

The cash flow endpoint provides detailed information on a company\&#39;s cash flow activities, including the net cash and cash equivalents moving in and out of the business. This data includes operating, investing, and financing cash flows, offering a comprehensive view of the company\&#39;s liquidity and financial health.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetCashFlowRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
    // PeriodEnum | The reporting period for the cash flow statements (optional)
    period: ...,
    // string | Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format `2006-01-02` (optional)
    startDate: 2024-01-01,
    // string | End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format `2006-01-02` (optional)
    endDate: 2024-12-31,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetCashFlowRequest;

  try {
    const data = await api.getCashFlow(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **period** | `PeriodEnum` | The reporting period for the cash flow statements | [Optional] [Defaults to `undefined`] [Enum: annual, quarterly] |
| **startDate** | `string` | Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `6`] |

### Return type

[**GetCashFlow200Response**](GetCashFlow200Response.md)

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


## getCashFlowConsolidated

> GetCashFlowConsolidated200Response getCashFlowConsolidated(symbol, figi, isin, cusip, exchange, micCode, country, period, startDate, endDate, outputsize)

Cash flow consolidated

The cash flow consolidated endpoint provides raw data on a company\&#39;s consolidated cash flow, including the net cash and cash equivalents moving in and out of the business. It returns information on operating, investing, and financing activities, helping users track liquidity and financial health over a specified period.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetCashFlowConsolidatedRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
    // PeriodEnum | The reporting period for the cash flow statements (optional)
    period: ...,
    // string | Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format `2006-01-02` (optional)
    startDate: 2024-01-01,
    // string | End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format `2006-01-02` (optional)
    endDate: 2024-12-31,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetCashFlowConsolidatedRequest;

  try {
    const data = await api.getCashFlowConsolidated(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **period** | `PeriodEnum` | The reporting period for the cash flow statements | [Optional] [Defaults to `undefined`] [Enum: annual, quarterly] |
| **startDate** | `string` | Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `6`] |

### Return type

[**GetCashFlowConsolidated200Response**](GetCashFlowConsolidated200Response.md)

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


## getDividends

> GetDividends200Response getDividends(symbol, figi, isin, cusip, exchange, micCode, country, range, startDate, endDate, adjust)

Dividends

The dividends endpoint provides historical dividend data for a specified stock, in many cases covering over a decade. It returns information on dividend payouts, including the ex-date, amount, and frequency. This endpoint is ideal for users tracking dividend histories or evaluating the income potential of stocks.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetDividendsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
    // string | Market Identifier Code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Country where instrument is traded, e.g., `United States` or `US` (optional)
    country: US,
    // RangeEnum | Specifies the time range for which to retrieve dividend data. Accepts values such as `last` (most recent dividend), `next` (upcoming dividend), `1m` - `5y` for respective periods, or `full` for all available data. If provided together with `start_date` and/or `end_date`, this parameter takes precedence. (optional)
    range: ...,
    // string | Start date for the dividend data query. Only dividends with dates on or after this date will be returned. Format `2006-01-02`. If provided together with `range` parameter, `range` will take precedence. (optional)
    startDate: 2024-01-01,
    // string | End date for the dividend data query. Only dividends with dates on or after this date will be returned. Format `2006-01-02`. If provided together with `range` parameter, `range` will take precedence. (optional)
    endDate: 2024-12-31,
    // boolean | Specifies if there should be an adjustment (optional)
    adjust: true,
  } satisfies GetDividendsRequest;

  try {
    const data = await api.getDividends(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **range** | `RangeEnum` | Specifies the time range for which to retrieve dividend data. Accepts values such as &#x60;last&#x60; (most recent dividend), &#x60;next&#x60; (upcoming dividend), &#x60;1m&#x60; - &#x60;5y&#x60; for respective periods, or &#x60;full&#x60; for all available data. If provided together with &#x60;start_date&#x60; and/or &#x60;end_date&#x60;, this parameter takes precedence. | [Optional] [Defaults to `undefined`] [Enum: last, next, 1m, 3m, 6m, ytd, 1y, 2y, 5y, full] |
| **startDate** | `string` | Start date for the dividend data query. Only dividends with dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;. If provided together with &#x60;range&#x60; parameter, &#x60;range&#x60; will take precedence. | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for the dividend data query. Only dividends with dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;. If provided together with &#x60;range&#x60; parameter, &#x60;range&#x60; will take precedence. | [Optional] [Defaults to `undefined`] |
| **adjust** | `boolean` | Specifies if there should be an adjustment | [Optional] [Defaults to `true`] |

### Return type

[**GetDividends200Response**](GetDividends200Response.md)

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


## getDividendsCalendar

> Array&lt;DividendsCalendarItem&gt; getDividendsCalendar(symbol, figi, isin, cusip, exchange, micCode, country, startDate, endDate, outputsize, page)

Dividends calendar

The dividends calendar endpoint provides a detailed schedule of upcoming and past dividend events for specified date ranges. By using the &#x60;start_date&#x60; and &#x60;end_date&#x60; parameters, users can retrieve a list of companies issuing dividends, including the ex-dividend date and dividend amount. This endpoint is ideal for tracking dividend payouts and planning investment strategies based on dividend schedules.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetDividendsCalendarRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
    // string | Market Identifier Code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Country where instrument is traded, e.g., `United States` or `US` (optional)
    country: US,
    // string | Start date for the dividends calendar query. Only dividends with ex-dates on or after this date will be returned. Format `2006-01-02` (optional)
    startDate: 2024-01-01,
    // string | End date for the dividends calendar query. Only dividends with ex-dates on or before this date will be returned. Format `2006-01-02` (optional)
    endDate: 2024-12-31,
    // number | Number of data points to retrieve. Supports values in the range from `1` to `500`. Default `100` when no date parameters are set, otherwise set to maximum (optional)
    outputsize: 789,
    // number | Page number (optional)
    page: 789,
  } satisfies GetDividendsCalendarRequest;

  try {
    const data = await api.getDividendsCalendar(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **startDate** | `string` | Start date for the dividends calendar query. Only dividends with ex-dates on or after this date will be returned. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for the dividends calendar query. Only dividends with ex-dates on or before this date will be returned. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;500&#x60;. Default &#x60;100&#x60; when no date parameters are set, otherwise set to maximum | [Optional] [Defaults to `100`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |

### Return type

[**Array&lt;DividendsCalendarItem&gt;**](DividendsCalendarItem.md)

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


## getEarnings

> GetEarnings200Response getEarnings(symbol, figi, isin, cusip, exchange, micCode, country, type, period, outputsize, format, delimiter, startDate, endDate, dp)

Earnings

The earnings endpoint provides comprehensive earnings data for a specified company, including both the estimated and actual Earnings Per Share (EPS) figures. This endpoint delivers historical earnings information, allowing users to track a company\&#39;s financial performance over time.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetEarningsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
    type: Common Stock,
    // PeriodEarningsEnum | Type of earning, returns only 1 record. When is not empty, dates and outputsize parameters are ignored (optional)
    period: ...,
    // number | Number of data points to retrieve. Supports values in the range from `1` to `1000`. Default `10` when no date parameters are set, otherwise set to maximum (optional)
    outputsize: 789,
    // FormatEnum | The format of the response data (optional)
    format: ...,
    // string | The separator used in the CSV response data (optional)
    delimiter: delimiter_example,
    // string | The date from which the data is requested. The date format is `YYYY-MM-DD`. (optional)
    startDate: 2024-04-01,
    // string | The date to which the data is requested. The date format is `YYYY-MM-DD`. (optional)
    endDate: 2024-04-30,
    // number | The number of decimal places in the response data. Should be in range [0,11] inclusive (optional)
    dp: 789,
  } satisfies GetEarningsRequest;

  try {
    const data = await api.getEarnings(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **type** | `TypeEnum` | The asset class to which the instrument belongs | [Optional] [Defaults to `undefined`] [Enum: American Depositary Receipt, Bond, Bond Fund, Closed-end Fund, Common Stock, Depositary Receipt, Digital Currency, ETF, Exchange-Traded Note, Global Depositary Receipt, Limited Partnership, Mutual Fund, Physical Currency, Preferred Stock, REIT, Right, Structured Product, Trust, Unit, Warrant] |
| **period** | `PeriodEarningsEnum` | Type of earning, returns only 1 record. When is not empty, dates and outputsize parameters are ignored | [Optional] [Defaults to `undefined`] [Enum: latest, next] |
| **outputsize** | `number` | Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;1000&#x60;. Default &#x60;10&#x60; when no date parameters are set, otherwise set to maximum | [Optional] [Defaults to `10`] |
| **format** | `FormatEnum` | The format of the response data | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | The separator used in the CSV response data | [Optional] [Defaults to `&#39;;&#39;`] |
| **startDate** | `string` | The date from which the data is requested. The date format is &#x60;YYYY-MM-DD&#x60;. | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | The date to which the data is requested. The date format is &#x60;YYYY-MM-DD&#x60;. | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | The number of decimal places in the response data. Should be in range [0,11] inclusive | [Optional] [Defaults to `2`] |

### Return type

[**GetEarnings200Response**](GetEarnings200Response.md)

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


## getEarningsCalendar

> GetEarningsCalendar200Response getEarningsCalendar(exchange, micCode, country, format, delimiter, startDate, endDate, dp)

Earnings calendar

The earnings calendar endpoint provides a schedule of company earnings announcements for a specified date range. By default, it returns earnings data for the current day. Users can customize the date range using the &#x60;start_date&#x60; and &#x60;end_date&#x60; parameters to retrieve earnings information for specific periods. This endpoint is useful for tracking upcoming earnings reports and planning around key financial announcements.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetEarningsCalendarRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
    // string | Market Identifier Code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Country where instrument is traded, e.g., `United States` or `US` (optional)
    country: United States,
    // FormatEnum | Value can be JSON or CSV (optional)
    format: ...,
    // string | Specify the delimiter used when downloading the CSV file (optional)
    delimiter: delimiter_example,
    // string | Can be used separately and together with end_date. Format `2006-01-02` or `2006-01-02T15:04:05` (optional)
    startDate: 2024-04-01,
    // string | Can be used separately and together with start_date. Format `2006-01-02` or `2006-01-02T15:04:05` (optional)
    endDate: 2024-04-30,
    // number | Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive (optional)
    dp: 789,
  } satisfies GetEarningsCalendarRequest;

  try {
    const data = await api.getEarningsCalendar(body);
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
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **format** | `FormatEnum` | Value can be JSON or CSV | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | Specify the delimiter used when downloading the CSV file | [Optional] [Defaults to `&#39;;&#39;`] |
| **startDate** | `string` | Can be used separately and together with end_date. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | Can be used separately and together with start_date. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive | [Optional] [Defaults to `2`] |

### Return type

[**GetEarningsCalendar200Response**](GetEarningsCalendar200Response.md)

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


## getIncomeStatement

> GetIncomeStatement200Response getIncomeStatement(symbol, figi, isin, cusip, exchange, micCode, country, period, startDate, endDate, outputsize)

Income statement

The income statement endpoint provides detailed financial data on a company\&#39;s income statement, including revenues, expenses, and net income for specified periods, either annually or quarterly. This endpoint is essential for retrieving comprehensive financial performance metrics of a company, allowing users to access historical and current financial results.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetIncomeStatementRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
    // PeriodEnum | The reporting period for the income statement data (optional)
    period: annual,
    // string | Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format `2006-01-02` (optional)
    startDate: 2024-01-01,
    // string | End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format `2006-01-02` (optional)
    endDate: 2024-12-31,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetIncomeStatementRequest;

  try {
    const data = await api.getIncomeStatement(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **period** | `PeriodEnum` | The reporting period for the income statement data | [Optional] [Defaults to `undefined`] [Enum: annual, quarterly] |
| **startDate** | `string` | Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `6`] |

### Return type

[**GetIncomeStatement200Response**](GetIncomeStatement200Response.md)

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


## getIncomeStatementConsolidated

> GetIncomeStatementConsolidated200Response getIncomeStatementConsolidated(symbol, figi, isin, cusip, exchange, micCode, country, period, startDate, endDate, outputsize)

Income statement consolidated

The income statement consolidated endpoint provides a company\&#39;s raw income statement, detailing revenue, expenses, and net income for specified periods, either annually or quarterly. This data is essential for evaluating a company\&#39;s financial performance over time, allowing users to access comprehensive financial results in a structured format.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetIncomeStatementConsolidatedRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
    // PeriodEnum | The reporting period for the income statement data (optional)
    period: ...,
    // string | Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format `2006-01-02` (optional)
    startDate: 2024-01-01,
    // string | End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format `2006-01-02` (optional)
    endDate: 2024-12-31,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetIncomeStatementConsolidatedRequest;

  try {
    const data = await api.getIncomeStatementConsolidated(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **period** | `PeriodEnum` | The reporting period for the income statement data | [Optional] [Defaults to `undefined`] [Enum: annual, quarterly] |
| **startDate** | `string` | Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `6`] |

### Return type

[**GetIncomeStatementConsolidated200Response**](GetIncomeStatementConsolidated200Response.md)

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


## getIpoCalendar

> { [key: string]: Array&lt;GetIpoCalendar200ResponseValueInner&gt;; } getIpoCalendar(exchange, micCode, country, startDate, endDate)

IPO calendar

The IPO Calendar endpoint provides detailed information on initial public offerings (IPOs), including those that have occurred in the past, are happening today, or are scheduled for the future. Users can access data such as company names, IPO dates, and offering details, allowing them to track and monitor IPO activity efficiently.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetIpoCalendarRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
    // string | Market Identifier Code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Country where instrument is traded, e.g., `United States` or `US` (optional)
    country: United States,
    // string | The earliest IPO date to include in the results. Format: `2006-01-02` (optional)
    startDate: 2021-01-01,
    // string | The latest IPO date to include in the results. Format: `2006-01-02` (optional)
    endDate: 2021-12-31,
  } satisfies GetIpoCalendarRequest;

  try {
    const data = await api.getIpoCalendar(body);
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
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **startDate** | `string` | The earliest IPO date to include in the results. Format: &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | The latest IPO date to include in the results. Format: &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

**{ [key: string]: Array<GetIpoCalendar200ResponseValueInner>; }**

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


## getKeyExecutives

> GetKeyExecutives200Response getKeyExecutives(symbol, figi, isin, cusip, exchange, micCode, country)

Key executives

The key executives endpoint provides detailed information about a company\&#39;s key executives identified by a specific stock symbol. It returns data such as names, titles, and roles of the executives, which can be useful for understanding the leadership structure of the company.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetKeyExecutivesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
  } satisfies GetKeyExecutivesRequest;

  try {
    const data = await api.getKeyExecutives(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetKeyExecutives200Response**](GetKeyExecutives200Response.md)

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


## getLastChanges

> GetLastChanges200Response getLastChanges(endpoint, startDate, symbol, exchange, micCode, country, page, outputsize)

Last changes

The last change endpoint provides the most recent updates to fundamental data for a specified dataset. It returns a timestamp indicating when the data was last modified, allowing users to efficiently manage API requests by only fetching new data when changes occur. This helps optimize data retrieval and reduce unnecessary API credit usage.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetLastChangesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // EndpointEnum | Endpoint name
    endpoint: statistics,
    // string | The starting date and time for data selection, in `2006-01-02T15:04:05` format (optional)
    startDate: 2023-10-14T00:00:00,
    // string | Filter by symbol (optional)
    symbol: AAPL,
    // string | Filter by exchange name (optional)
    exchange: NASDAQ,
    // string | Filter by market identifier code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Page number (optional)
    page: 789,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetLastChangesRequest;

  try {
    const data = await api.getLastChanges(body);
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
| **endpoint** | `EndpointEnum` | Endpoint name | [Defaults to `undefined`] [Enum: price_target, recommendations, statistics, insider_transactions, profile, mutual_funds_world_summary, mutual_funds_world, institutional_holders, analyst_rating, income_statement, income_statement_quarterly, cash_flow, cash_flow_quarterly, balance_sheet, balance_sheet_quarterly, mutual_funds_list, mutual_funds_world_sustainability, mutual_funds_world_summary, mutual_funds_world_risk, mutual_funds_world_purchase_info, mutual_funds_world_composition, mutual_funds_world_performance, mutual_funds_world, etfs_list, etfs_world, etfs_world_summary, etfs_world_performance, etfs_world_risk, etfs_world_composition, dividends, splits] |
| **startDate** | `string` | The starting date and time for data selection, in &#x60;2006-01-02T15:04:05&#x60; format | [Optional] [Defaults to `undefined`] |
| **symbol** | `string` | Filter by symbol | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Filter by market identifier code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `30`] |

### Return type

[**GetLastChanges200Response**](GetLastChanges200Response.md)

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


## getLogo

> GetLogo200Response getLogo(symbol, exchange, micCode, country)

Logo

The logo endpoint provides the official logo image for a specified company, cryptocurrency, or forex pair. This endpoint is useful for integrating visual branding elements into financial applications, websites, or reports, ensuring that users can easily identify and associate the correct logo with the respective financial asset.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetLogoRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested, e.g., `AAPL`, `BTC/USD`, `EUR/USD`.
    symbol: BTC/USD,
    // string | The exchange name where the instrument is traded, e.g., `NASDAQ`, `NSE` (optional)
    exchange: NASDAQ,
    // string | The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., `XNAS`, `XLON` (optional)
    micCode: XNAS,
    // string | The country where the instrument is traded, e.g., `United States` or `US` (optional)
    country: United States,
  } satisfies GetLogoRequest;

  try {
    const data = await api.getLogo(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested, e.g., &#x60;AAPL&#x60;, &#x60;BTC/USD&#x60;, &#x60;EUR/USD&#x60;. | [Defaults to `undefined`] |
| **exchange** | `string` | The exchange name where the instrument is traded, e.g., &#x60;NASDAQ&#x60;, &#x60;NSE&#x60; | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., &#x60;XNAS&#x60;, &#x60;XLON&#x60; | [Optional] [Defaults to `undefined`] |
| **country** | `string` | The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetLogo200Response**](GetLogo200Response.md)

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


## getMarketCap

> GetMarketCap200Response getMarketCap(symbol, figi, isin, cusip, exchange, micCode, country, startDate, endDate, page, outputsize)

Market capitalization

The Market Capitalization History endpoint provides historical data on a company\&#39;s market capitalization over a specified time period. It returns a time series of market cap values, allowing users to track changes in a company\&#39;s market value.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMarketCapRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Filter by symbol (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Filter by exchange name (optional)
    exchange: NASDAQ,
    // string | Filter by market identifier code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Start date for market capitalization data retrieval. Data will be returned from this date onwards. Format `2006-01-02` (optional)
    startDate: 2023-01-01,
    // string | End date for market capitalization data retrieval. Data will be returned up to and including this date. Format `2006-01-02` (optional)
    endDate: 2023-12-31,
    // number | Page number (optional)
    page: 789,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetMarketCapRequest;

  try {
    const data = await api.getMarketCap(body);
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
| **symbol** | `string` | Filter by symbol | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Filter by market identifier code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **startDate** | `string` | Start date for market capitalization data retrieval. Data will be returned from this date onwards. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for market capitalization data retrieval. Data will be returned up to and including this date. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `10`] |

### Return type

[**GetMarketCap200Response**](GetMarketCap200Response.md)

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


## getProfile

> GetProfile200Response getProfile(symbol, figi, isin, cusip, exchange, micCode, country)

Profile

The profile endpoint provides detailed company information, including the company\&#39;s name, industry, sector, CEO, headquarters location, and market capitalization. This data is useful for obtaining a comprehensive overview of a company\&#39;s business and financial standing.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetProfileRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
  } satisfies GetProfileRequest;

  try {
    const data = await api.getProfile(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetProfile200Response**](GetProfile200Response.md)

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


## getSplits

> GetSplits200Response getSplits(symbol, figi, isin, cusip, exchange, micCode, country, range, startDate, endDate)

Splits

The splits endpoint provides historical data on stock split events for a specified company. It returns details including the date of each split and the corresponding split factor.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetSplitsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
    // RangeSplitsEnum | Range of data to be returned (optional)
    range: ...,
    // string | The starting date for data selection. Format `2006-01-02` (optional)
    startDate: 2020-01-01,
    // string | The ending date for data selection. Format `2006-01-02` (optional)
    endDate: 2020-12-31,
  } satisfies GetSplitsRequest;

  try {
    const data = await api.getSplits(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **range** | `RangeSplitsEnum` | Range of data to be returned | [Optional] [Defaults to `undefined`] [Enum: last, 1m, 3m, 6m, ytd, 1y, 2y, 5y, full] |
| **startDate** | `string` | The starting date for data selection. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | The ending date for data selection. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetSplits200Response**](GetSplits200Response.md)

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


## getSplitsCalendar

> Array&lt;SplitsCalendarResponseItem&gt; getSplitsCalendar(symbol, figi, isin, cusip, exchange, micCode, country, startDate, endDate, outputsize, page)

Splits calendar

The splits calendar endpoint provides a detailed calendar of stock split events within a specified date range. By setting the &#x60;start_date&#x60; and &#x60;end_date&#x60; parameters, users can retrieve a list of upcoming or past stock splits, including the company name, split ratio, and effective date. This endpoint is useful for tracking changes in stock structure and planning investment strategies around these events.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetSplitsCalendarRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
    // string | The starting date (inclusive) for filtering split events in the calendar. Format `2006-01-02` (optional)
    startDate: 2024-01-01,
    // string | The ending date (inclusive) for filtering split events in the calendar. Format `2006-01-02` (optional)
    endDate: 2024-12-31,
    // number | Number of data points to retrieve. Supports values in the range from `1` to `500`. Default `100` when no date parameters are set, otherwise set to maximum (optional)
    outputsize: 789,
    // string | Page number (optional)
    page: page_example,
  } satisfies GetSplitsCalendarRequest;

  try {
    const data = await api.getSplitsCalendar(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **startDate** | `string` | The starting date (inclusive) for filtering split events in the calendar. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | The ending date (inclusive) for filtering split events in the calendar. Format &#x60;2006-01-02&#x60; | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;500&#x60;. Default &#x60;100&#x60; when no date parameters are set, otherwise set to maximum | [Optional] [Defaults to `100`] |
| **page** | `string` | Page number | [Optional] [Defaults to `&#39;1&#39;`] |

### Return type

[**Array&lt;SplitsCalendarResponseItem&gt;**](SplitsCalendarResponseItem.md)

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


## getStatistics

> GetStatistics200Response getStatistics(symbol, figi, isin, cusip, exchange, micCode, country)

Statistics

The statistics endpoint provides a comprehensive snapshot of a company\&#39;s key financial statistics, including valuation metrics, revenue figures, profit margins, and other essential financial data. This endpoint is ideal for users seeking detailed insights into a company\&#39;s financial health and performance metrics.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { GetStatisticsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
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
  } satisfies GetStatisticsRequest;

  try {
    const data = await api.getStatistics(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetStatistics200Response**](GetStatistics200Response.md)

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


## pressReleasesListParameters

> PressReleasesListParameters200Response pressReleasesListParameters(symbol, figi, isin, cusip, exchange, micCode, startDate, endDate, timezone, language, outputsize)

Press releases

The press releases endpoint offers structured, real-time access to official company press releases and corporate announcements from public entities across global markets.

### Example

```ts
import {
  Configuration,
  FundamentalsApi,
} from '@twelvedata/twelvedata-node';
import type { PressReleasesListParametersRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new FundamentalsApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
    // string | Market Identifier Code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Begin date for filtering items. Returns press releases with release date on or after this date. Format `2025-12-24T02:07:00` (optional)
    startDate: 2025-12-01T00:00:00,
    // string | End date for filtering items. Returns press releases with release date on or before this date. Format `2025-12-24T02:07:00` (optional)
    endDate: 2025-12-31T23:59:00,
    // string | Time zone for date filtering. Default is the identifier time zone. (optional)
    timezone: America/New_York,
    // string | Comma-separated list of languages to filter press releases by language. (optional)
    language: en,en-US,
    // number | Number of latest press releases returned. Only used if no data range is specified. Maximum value is `10`.  type: number (optional)
    outputsize: 5,
  } satisfies PressReleasesListParametersRequest;

  try {
    const data = await api.pressReleasesListParameters(body);
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
| **symbol** | `string` | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **startDate** | `string` | Begin date for filtering items. Returns press releases with release date on or after this date. Format &#x60;2025-12-24T02:07:00&#x60; | [Optional] [Defaults to `undefined`] |
| **endDate** | `string` | End date for filtering items. Returns press releases with release date on or before this date. Format &#x60;2025-12-24T02:07:00&#x60; | [Optional] [Defaults to `undefined`] |
| **timezone** | `string` | Time zone for date filtering. Default is the identifier time zone. | [Optional] [Defaults to `undefined`] |
| **language** | `string` | Comma-separated list of languages to filter press releases by language. | [Optional] [Defaults to `undefined`] |
| **outputsize** | `number` | Number of latest press releases returned. Only used if no data range is specified. Maximum value is &#x60;10&#x60;.  type: number | [Optional] [Defaults to `2`] |

### Return type

[**PressReleasesListParameters200Response**](PressReleasesListParameters200Response.md)

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

