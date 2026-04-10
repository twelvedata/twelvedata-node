# FundamentalsApi

All URIs are relative to *https://api.twelvedata.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBalanceSheet**](#getbalancesheet) | **GET** /balance_sheet | Balance sheet|
|[**getBalanceSheetConsolidated**](#getbalancesheetconsolidated) | **GET** /balance_sheet/consolidated | Balance sheet consolidated|
|[**getCashFlow**](#getcashflow) | **GET** /cash_flow | Cash flow|
|[**getCashFlowConsolidated**](#getcashflowconsolidated) | **GET** /cash_flow/consolidated | Cash flow consolidated|
|[**getDividends**](#getdividends) | **GET** /dividends | Dividends|
|[**getDividendsCalendar**](#getdividendscalendar) | **GET** /dividends_calendar | Dividends calendar|
|[**getEarnings**](#getearnings) | **GET** /earnings | Earnings|
|[**getEarningsCalendar**](#getearningscalendar) | **GET** /earnings_calendar | Earnings calendar|
|[**getIncomeStatement**](#getincomestatement) | **GET** /income_statement | Income statement|
|[**getIncomeStatementConsolidated**](#getincomestatementconsolidated) | **GET** /income_statement/consolidated | Income statement consolidated|
|[**getIpoCalendar**](#getipocalendar) | **GET** /ipo_calendar | IPO calendar|
|[**getKeyExecutives**](#getkeyexecutives) | **GET** /key_executives | Key executives|
|[**getLastChanges**](#getlastchanges) | **GET** /last_change/{endpoint} | Last changes|
|[**getLogo**](#getlogo) | **GET** /logo | Logo|
|[**getMarketCap**](#getmarketcap) | **GET** /market_cap | Market capitalization|
|[**getProfile**](#getprofile) | **GET** /profile | Profile|
|[**getSplits**](#getsplits) | **GET** /splits | Splits|
|[**getSplitsCalendar**](#getsplitscalendar) | **GET** /splits_calendar | Splits calendar|
|[**getStatistics**](#getstatistics) | **GET** /statistics | Statistics|
|[**pressReleasesListParameters**](#pressreleaseslistparameters) | **GET** /press_releases | Press releases|

# **getBalanceSheet**
> GetBalanceSheet200Response getBalanceSheet()

The balance sheet endpoint provides a detailed financial statement for a company, outlining its assets, liabilities, and shareholders\' equity. This endpoint returns structured data that includes current and non-current assets, total liabilities, and equity figures, enabling users to assess a company\'s financial health and stability.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let period: PeriodEnum; //The reporting period for the balane sheet data (optional) (default to undefined)
let startDate: string; //Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format `2006-01-02` (optional) (default to undefined)
let endDate: string; //End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format `2006-01-02` (optional) (default to undefined)
let outputsize: number; //Number of records in response (optional) (default to 6)

const { status, data } = await apiInstance.getBalanceSheet(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    period,
    startDate,
    endDate,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **period** | **PeriodEnum** | The reporting period for the balane sheet data | (optional) defaults to undefined|
| **startDate** | [**string**] | Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of records in response | (optional) defaults to 6|


### Return type

**GetBalanceSheet200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBalanceSheetConsolidated**
> GetBalanceSheetConsolidated200Response getBalanceSheetConsolidated()

The balance sheet consolidated endpoint provides a detailed overview of a company\'s raw balance sheet, including a comprehensive summary of its assets, liabilities, and shareholders\' equity. This endpoint is useful for retrieving financial data that reflects the overall financial position of a company, allowing users to access critical information about its financial health and structure.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let period: PeriodEnum; //The reporting period for the balance sheet data. (optional) (default to undefined)
let startDate: string; //Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format `2006-01-02` (optional) (default to undefined)
let endDate: string; //End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format `2006-01-02` (optional) (default to undefined)
let outputsize: number; //Number of records in response (optional) (default to 6)

const { status, data } = await apiInstance.getBalanceSheetConsolidated(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    period,
    startDate,
    endDate,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **period** | **PeriodEnum** | The reporting period for the balance sheet data. | (optional) defaults to undefined|
| **startDate** | [**string**] | Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of records in response | (optional) defaults to 6|


### Return type

**GetBalanceSheetConsolidated200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCashFlow**
> GetCashFlow200Response getCashFlow()

The cash flow endpoint provides detailed information on a company\'s cash flow activities, including the net cash and cash equivalents moving in and out of the business. This data includes operating, investing, and financing cash flows, offering a comprehensive view of the company\'s liquidity and financial health.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let period: PeriodEnum; //The reporting period for the cash flow statements (optional) (default to undefined)
let startDate: string; //Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format `2006-01-02` (optional) (default to undefined)
let endDate: string; //End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format `2006-01-02` (optional) (default to undefined)
let outputsize: number; //Number of records in response (optional) (default to 6)

const { status, data } = await apiInstance.getCashFlow(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    period,
    startDate,
    endDate,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **period** | **PeriodEnum** | The reporting period for the cash flow statements | (optional) defaults to undefined|
| **startDate** | [**string**] | Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of records in response | (optional) defaults to 6|


### Return type

**GetCashFlow200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCashFlowConsolidated**
> GetCashFlowConsolidated200Response getCashFlowConsolidated()

The cash flow consolidated endpoint provides raw data on a company\'s consolidated cash flow, including the net cash and cash equivalents moving in and out of the business. It returns information on operating, investing, and financing activities, helping users track liquidity and financial health over a specified period.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let period: PeriodEnum; //The reporting period for the cash flow statements (optional) (default to undefined)
let startDate: string; //Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format `2006-01-02` (optional) (default to undefined)
let endDate: string; //End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format `2006-01-02` (optional) (default to undefined)
let outputsize: number; //Number of records in response (optional) (default to 6)

const { status, data } = await apiInstance.getCashFlowConsolidated(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    period,
    startDate,
    endDate,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **period** | **PeriodEnum** | The reporting period for the cash flow statements | (optional) defaults to undefined|
| **startDate** | [**string**] | Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of records in response | (optional) defaults to 6|


### Return type

**GetCashFlowConsolidated200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDividends**
> GetDividends200Response getDividends()

The dividends endpoint provides historical dividend data for a specified stock, in many cases covering over a decade. It returns information on dividend payouts, including the amount, payment date, and frequency. This endpoint is ideal for users tracking dividend histories or evaluating the income potential of stocks.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let range: RangeEnum; //Specifies the time range for which to retrieve dividend data. Accepts values such as `last` (most recent dividend), `next` (upcoming dividend), `1m` - `5y` for respective periods, or `full` for all available data. If provided together with `start_date` and/or `end_date`, this parameter takes precedence. (optional) (default to undefined)
let startDate: string; //Start date for the dividend data query. Only dividends with dates on or after this date will be returned. Format `2006-01-02`. If provided together with `range` parameter, `range` will take precedence. (optional) (default to undefined)
let endDate: string; //End date for the dividend data query. Only dividends with dates on or after this date will be returned. Format `2006-01-02`. If provided together with `range` parameter, `range` will take precedence. (optional) (default to undefined)
let adjust: boolean; //Specifies if there should be an adjustment (optional) (default to true)

const { status, data } = await apiInstance.getDividends(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    range,
    startDate,
    endDate,
    adjust
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **range** | **RangeEnum** | Specifies the time range for which to retrieve dividend data. Accepts values such as &#x60;last&#x60; (most recent dividend), &#x60;next&#x60; (upcoming dividend), &#x60;1m&#x60; - &#x60;5y&#x60; for respective periods, or &#x60;full&#x60; for all available data. If provided together with &#x60;start_date&#x60; and/or &#x60;end_date&#x60;, this parameter takes precedence. | (optional) defaults to undefined|
| **startDate** | [**string**] | Start date for the dividend data query. Only dividends with dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;. If provided together with &#x60;range&#x60; parameter, &#x60;range&#x60; will take precedence. | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for the dividend data query. Only dividends with dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;. If provided together with &#x60;range&#x60; parameter, &#x60;range&#x60; will take precedence. | (optional) defaults to undefined|
| **adjust** | [**boolean**] | Specifies if there should be an adjustment | (optional) defaults to true|


### Return type

**GetDividends200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDividendsCalendar**
> Array<DividendsCalendarItem> getDividendsCalendar()

The dividends calendar endpoint provides a detailed schedule of upcoming and past dividend events for specified date ranges. By using the `start_date` and `end_date` parameters, users can retrieve a list of companies issuing dividends, including the ex-dividend date, payment date, and dividend amount. This endpoint is ideal for tracking dividend payouts and planning investment strategies based on dividend schedules.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let startDate: string; //Start date for the dividends calendar query. Only dividends with ex-dates on or after this date will be returned. Format `2006-01-02` (optional) (default to undefined)
let endDate: string; //End date for the dividends calendar query. Only dividends with ex-dates on or before this date will be returned. Format `2006-01-02` (optional) (default to undefined)
let outputsize: number; //Number of data points to retrieve. Supports values in the range from `1` to `500`. Default `100` when no date parameters are set, otherwise set to maximum (optional) (default to 100)
let page: number; //Page number (optional) (default to 1)

const { status, data } = await apiInstance.getDividendsCalendar(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    startDate,
    endDate,
    outputsize,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **startDate** | [**string**] | Start date for the dividends calendar query. Only dividends with ex-dates on or after this date will be returned. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for the dividends calendar query. Only dividends with ex-dates on or before this date will be returned. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;500&#x60;. Default &#x60;100&#x60; when no date parameters are set, otherwise set to maximum | (optional) defaults to 100|
| **page** | [**number**] | Page number | (optional) defaults to 1|


### Return type

**Array<DividendsCalendarItem>**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEarnings**
> GetEarnings200Response getEarnings()

The earnings endpoint provides comprehensive earnings data for a specified company, including both the estimated and actual Earnings Per Share (EPS) figures. This endpoint delivers historical earnings information, allowing users to track a company\'s financial performance over time.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let type: TypeEnum; //The asset class to which the instrument belongs (optional) (default to undefined)
let period: PeriodEarningsEnum; //Type of earning, returns only 1 record. When is not empty, dates and outputsize parameters are ignored (optional) (default to undefined)
let outputsize: number; //Number of data points to retrieve. Supports values in the range from `1` to `1000`. Default `10` when no date parameters are set, otherwise set to maximum (optional) (default to 10)
let format: FormatEnum; //The format of the response data (optional) (default to undefined)
let delimiter: string; //The separator used in the CSV response data (optional) (default to ';')
let startDate: string; //The date from which the data is requested. The date format is `YYYY-MM-DD`. (optional) (default to undefined)
let endDate: string; //The date to which the data is requested. The date format is `YYYY-MM-DD`. (optional) (default to undefined)
let dp: number; //The number of decimal places in the response data. Should be in range [0,11] inclusive (optional) (default to 2)

const { status, data } = await apiInstance.getEarnings(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    type,
    period,
    outputsize,
    format,
    delimiter,
    startDate,
    endDate,
    dp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **type** | **TypeEnum** | The asset class to which the instrument belongs | (optional) defaults to undefined|
| **period** | **PeriodEarningsEnum** | Type of earning, returns only 1 record. When is not empty, dates and outputsize parameters are ignored | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;1000&#x60;. Default &#x60;10&#x60; when no date parameters are set, otherwise set to maximum | (optional) defaults to 10|
| **format** | **FormatEnum** | The format of the response data | (optional) defaults to undefined|
| **delimiter** | [**string**] | The separator used in the CSV response data | (optional) defaults to ';'|
| **startDate** | [**string**] | The date from which the data is requested. The date format is &#x60;YYYY-MM-DD&#x60;. | (optional) defaults to undefined|
| **endDate** | [**string**] | The date to which the data is requested. The date format is &#x60;YYYY-MM-DD&#x60;. | (optional) defaults to undefined|
| **dp** | [**number**] | The number of decimal places in the response data. Should be in range [0,11] inclusive | (optional) defaults to 2|


### Return type

**GetEarnings200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getEarningsCalendar**
> GetEarningsCalendar200Response getEarningsCalendar()

The earnings calendar endpoint provides a schedule of company earnings announcements for a specified date range. By default, it returns earnings data for the current day. Users can customize the date range using the `start_date` and `end_date` parameters to retrieve earnings information for specific periods. This endpoint is useful for tracking upcoming earnings reports and planning around key financial announcements.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let format: FormatEnum; //Value can be JSON or CSV (optional) (default to undefined)
let delimiter: string; //Specify the delimiter used when downloading the CSV file (optional) (default to ';')
let startDate: string; //Can be used separately and together with end_date. Format `2006-01-02` or `2006-01-02T15:04:05` (optional) (default to undefined)
let endDate: string; //Can be used separately and together with start_date. Format `2006-01-02` or `2006-01-02T15:04:05` (optional) (default to undefined)
let dp: number; //Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive (optional) (default to 2)

const { status, data } = await apiInstance.getEarningsCalendar(
    exchange,
    micCode,
    country,
    format,
    delimiter,
    startDate,
    endDate,
    dp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **format** | **FormatEnum** | Value can be JSON or CSV | (optional) defaults to undefined|
| **delimiter** | [**string**] | Specify the delimiter used when downloading the CSV file | (optional) defaults to ';'|
| **startDate** | [**string**] | Can be used separately and together with end_date. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | Can be used separately and together with start_date. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive | (optional) defaults to 2|


### Return type

**GetEarningsCalendar200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIncomeStatement**
> GetIncomeStatement200Response getIncomeStatement()

The income statement endpoint provides detailed financial data on a company\'s income statement, including revenues, expenses, and net income for specified periods, either annually or quarterly. This endpoint is essential for retrieving comprehensive financial performance metrics of a company, allowing users to access historical and current financial results.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let period: PeriodEnum; //The reporting period for the income statement data (optional) (default to undefined)
let startDate: string; //Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format `2006-01-02` (optional) (default to undefined)
let endDate: string; //End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format `2006-01-02` (optional) (default to undefined)
let outputsize: number; //Number of records in response (optional) (default to 6)

const { status, data } = await apiInstance.getIncomeStatement(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    period,
    startDate,
    endDate,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **period** | **PeriodEnum** | The reporting period for the income statement data | (optional) defaults to undefined|
| **startDate** | [**string**] | Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of records in response | (optional) defaults to 6|


### Return type

**GetIncomeStatement200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIncomeStatementConsolidated**
> GetIncomeStatementConsolidated200Response getIncomeStatementConsolidated()

The income statement consolidated endpoint provides a company\'s raw income statement, detailing revenue, expenses, and net income for specified periods, either annually or quarterly. This data is essential for evaluating a company\'s financial performance over time, allowing users to access comprehensive financial results in a structured format.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let period: PeriodEnum; //The reporting period for the income statement data (optional) (default to undefined)
let startDate: string; //Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format `2006-01-02` (optional) (default to undefined)
let endDate: string; //End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format `2006-01-02` (optional) (default to undefined)
let outputsize: number; //Number of records in response (optional) (default to 6)

const { status, data } = await apiInstance.getIncomeStatementConsolidated(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    period,
    startDate,
    endDate,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **period** | **PeriodEnum** | The reporting period for the income statement data | (optional) defaults to undefined|
| **startDate** | [**string**] | Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of records in response | (optional) defaults to 6|


### Return type

**GetIncomeStatementConsolidated200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getIpoCalendar**
> { [key: string]: Array<GetIpoCalendar200ResponseValueInner>; } getIpoCalendar()

The IPO Calendar endpoint provides detailed information on initial public offerings (IPOs), including those that have occurred in the past, are happening today, or are scheduled for the future. Users can access data such as company names, IPO dates, and offering details, allowing them to track and monitor IPO activity efficiently.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let startDate: string; //The earliest IPO date to include in the results. Format: `2006-01-02` (optional) (default to undefined)
let endDate: string; //The latest IPO date to include in the results. Format: `2006-01-02` (optional) (default to undefined)

const { status, data } = await apiInstance.getIpoCalendar(
    exchange,
    micCode,
    country,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **startDate** | [**string**] | The earliest IPO date to include in the results. Format: &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | The latest IPO date to include in the results. Format: &#x60;2006-01-02&#x60; | (optional) defaults to undefined|


### Return type

**{ [key: string]: Array<GetIpoCalendar200ResponseValueInner>; }**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getKeyExecutives**
> GetKeyExecutives200Response getKeyExecutives()

The key executives endpoint provides detailed information about a company\'s key executives identified by a specific stock symbol. It returns data such as names, titles, and roles of the executives, which can be useful for understanding the leadership structure of the company.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)

const { status, data } = await apiInstance.getKeyExecutives(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|


### Return type

**GetKeyExecutives200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLastChanges**
> GetLastChanges200Response getLastChanges()

The last change endpoint provides the most recent updates to fundamental data for a specified dataset. It returns a timestamp indicating when the data was last modified, allowing users to efficiently manage API requests by only fetching new data when changes occur. This helps optimize data retrieval and reduce unnecessary API credit usage.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let endpoint: EndpointEnum; //Endpoint name (default to undefined)
let startDate: string; //The starting date and time for data selection, in `2006-01-02T15:04:05` format (optional) (default to undefined)
let symbol: string; //Filter by symbol (optional) (default to undefined)
let exchange: string; //Filter by exchange name (optional) (default to undefined)
let micCode: string; //Filter by market identifier code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let page: number; //Page number (optional) (default to 1)
let outputsize: number; //Number of records in response (optional) (default to 30)

const { status, data } = await apiInstance.getLastChanges(
    endpoint,
    startDate,
    symbol,
    exchange,
    micCode,
    country,
    page,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **endpoint** | **EndpointEnum** | Endpoint name | defaults to undefined|
| **startDate** | [**string**] | The starting date and time for data selection, in &#x60;2006-01-02T15:04:05&#x60; format | (optional) defaults to undefined|
| **symbol** | [**string**] | Filter by symbol | (optional) defaults to undefined|
| **exchange** | [**string**] | Filter by exchange name | (optional) defaults to undefined|
| **micCode** | [**string**] | Filter by market identifier code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **outputsize** | [**number**] | Number of records in response | (optional) defaults to 30|


### Return type

**GetLastChanges200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLogo**
> GetLogo200Response getLogo()

The logo endpoint provides the official logo image for a specified company, cryptocurrency, or forex pair. This endpoint is useful for integrating visual branding elements into financial applications, websites, or reports, ensuring that users can easily identify and associate the correct logo with the respective financial asset.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested, e.g., `AAPL`, `BTC/USD`, `EUR/USD`. (default to undefined)
let exchange: string; //The exchange name where the instrument is traded, e.g., `NASDAQ`, `NSE` (optional) (default to undefined)
let micCode: string; //The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., `XNAS`, `XLON` (optional) (default to undefined)
let country: string; //The country where the instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)

const { status, data } = await apiInstance.getLogo(
    symbol,
    exchange,
    micCode,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested, e.g., &#x60;AAPL&#x60;, &#x60;BTC/USD&#x60;, &#x60;EUR/USD&#x60;. | defaults to undefined|
| **exchange** | [**string**] | The exchange name where the instrument is traded, e.g., &#x60;NASDAQ&#x60;, &#x60;NSE&#x60; | (optional) defaults to undefined|
| **micCode** | [**string**] | The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., &#x60;XNAS&#x60;, &#x60;XLON&#x60; | (optional) defaults to undefined|
| **country** | [**string**] | The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|


### Return type

**GetLogo200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getMarketCap**
> GetMarketCap200Response getMarketCap()

The Market Capitalization History endpoint provides historical data on a company\'s market capitalization over a specified time period. It returns a time series of market cap values, allowing users to track changes in a company\'s market value.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Filter by symbol (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Filter by exchange name (optional) (default to undefined)
let micCode: string; //Filter by market identifier code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let startDate: string; //Start date for market capitalization data retrieval. Data will be returned from this date onwards. Format `2006-01-02` (optional) (default to undefined)
let endDate: string; //End date for market capitalization data retrieval. Data will be returned up to and including this date. Format `2006-01-02` (optional) (default to undefined)
let page: number; //Page number (optional) (default to 1)
let outputsize: number; //Number of records in response (optional) (default to 10)

const { status, data } = await apiInstance.getMarketCap(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    startDate,
    endDate,
    page,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Filter by symbol | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Filter by exchange name | (optional) defaults to undefined|
| **micCode** | [**string**] | Filter by market identifier code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **startDate** | [**string**] | Start date for market capitalization data retrieval. Data will be returned from this date onwards. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for market capitalization data retrieval. Data will be returned up to and including this date. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **outputsize** | [**number**] | Number of records in response | (optional) defaults to 10|


### Return type

**GetMarketCap200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProfile**
> GetProfile200Response getProfile()

The profile endpoint provides detailed company information, including the company\'s name, industry, sector, CEO, headquarters location, and market capitalization. This data is useful for obtaining a comprehensive overview of a company\'s business and financial standing.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)

const { status, data } = await apiInstance.getProfile(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|


### Return type

**GetProfile200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSplits**
> GetSplits200Response getSplits()

The splits endpoint provides historical data on stock split events for a specified company. It returns details including the date of each split and the corresponding split factor.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let range: RangeSplitsEnum; //Range of data to be returned (optional) (default to undefined)
let startDate: string; //The starting date for data selection. Format `2006-01-02` (optional) (default to undefined)
let endDate: string; //The ending date for data selection. Format `2006-01-02` (optional) (default to undefined)

const { status, data } = await apiInstance.getSplits(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    range,
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **range** | **RangeSplitsEnum** | Range of data to be returned | (optional) defaults to undefined|
| **startDate** | [**string**] | The starting date for data selection. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | The ending date for data selection. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|


### Return type

**GetSplits200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSplitsCalendar**
> Array<SplitsCalendarResponseItem> getSplitsCalendar()

The splits calendar endpoint provides a detailed calendar of stock split events within a specified date range. By setting the `start_date` and `end_date` parameters, users can retrieve a list of upcoming or past stock splits, including the company name, split ratio, and effective date. This endpoint is useful for tracking changes in stock structure and planning investment strategies around these events.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)
let startDate: string; //The starting date (inclusive) for filtering split events in the calendar. Format `2006-01-02` (optional) (default to undefined)
let endDate: string; //The ending date (inclusive) for filtering split events in the calendar. Format `2006-01-02` (optional) (default to undefined)
let outputsize: number; //Number of data points to retrieve. Supports values in the range from `1` to `500`. Default `100` when no date parameters are set, otherwise set to maximum (optional) (default to 100)
let page: string; //Page number (optional) (default to '1')

const { status, data } = await apiInstance.getSplitsCalendar(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    startDate,
    endDate,
    outputsize,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **startDate** | [**string**] | The starting date (inclusive) for filtering split events in the calendar. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | The ending date (inclusive) for filtering split events in the calendar. Format &#x60;2006-01-02&#x60; | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;500&#x60;. Default &#x60;100&#x60; when no date parameters are set, otherwise set to maximum | (optional) defaults to 100|
| **page** | [**string**] | Page number | (optional) defaults to '1'|


### Return type

**Array<SplitsCalendarResponseItem>**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStatistics**
> GetStatistics200Response getStatistics()

The statistics endpoint provides a comprehensive snapshot of a company\'s key financial statistics, including valuation metrics, revenue figures, profit margins, and other essential financial data. This endpoint is ideal for users seeking detailed insights into a company\'s financial health and performance metrics.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)

const { status, data } = await apiInstance.getStatistics(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|


### Return type

**GetStatistics200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pressReleasesListParameters**
> PressReleasesListParameters200Response pressReleasesListParameters()

The press releases endpoint offers structured, real-time access to official company press releases and corporate announcements from public entities across global markets.

### Example

```typescript
import {
    FundamentalsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new FundamentalsApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let startDate: string; //Begin date for filtering items. Returns press releases with release date on or after this date. Format `2025-12-24T02:07:00` (optional) (default to undefined)
let endDate: string; //End date for filtering items. Returns press releases with release date on or before this date. Format `2025-12-24T02:07:00` (optional) (default to undefined)
let timezone: string; //Time zone for date filtering. Default is the identifier time zone. (optional) (default to undefined)
let language: string; //Comma-separated list of languages to filter press releases by language. (optional) (default to undefined)
let outputsize: number; //Number of latest press releases returned. Only used if no data range is specified. Maximum value is `10`.  type: number (optional) (default to 2)

const { status, data } = await apiInstance.pressReleasesListParameters(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    startDate,
    endDate,
    timezone,
    language,
    outputsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **startDate** | [**string**] | Begin date for filtering items. Returns press releases with release date on or after this date. Format &#x60;2025-12-24T02:07:00&#x60; | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for filtering items. Returns press releases with release date on or before this date. Format &#x60;2025-12-24T02:07:00&#x60; | (optional) defaults to undefined|
| **timezone** | [**string**] | Time zone for date filtering. Default is the identifier time zone. | (optional) defaults to undefined|
| **language** | [**string**] | Comma-separated list of languages to filter press releases by language. | (optional) defaults to undefined|
| **outputsize** | [**number**] | Number of latest press releases returned. Only used if no data range is specified. Maximum value is &#x60;10&#x60;.  type: number | (optional) defaults to 2|


### Return type

**PressReleasesListParameters200Response**

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**401** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**414** |  |  -  |
|**429** |  |  -  |
|**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

