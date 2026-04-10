# RegulatoryApi

All URIs are relative to *https://api.twelvedata.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDirectHolders**](#getdirectholders) | **GET** /direct_holders | Direct holders|
|[**getEdgarFilingsArchive**](#getedgarfilingsarchive) | **GET** /edgar_filings/archive | EDGAR fillings|
|[**getFundHolders**](#getfundholders) | **GET** /fund_holders | Fund holders|
|[**getInsiderTransactions**](#getinsidertransactions) | **GET** /insider_transactions | Insider transaction|
|[**getInstitutionalHolders**](#getinstitutionalholders) | **GET** /institutional_holders | Institutional holders|
|[**getSourceSanctionedEntities**](#getsourcesanctionedentities) | **GET** /sanctions/{source} | Sanctioned entities|
|[**getTaxInfo**](#gettaxinfo) | **GET** /tax_info | Tax information|

# **getDirectHolders**
> GetDirectHolders200Response getDirectHolders()

The direct holders endpoint provides detailed information about the number of shares directly held by individuals or entities as recorded in a company\'s official share registry. This data is essential for understanding the distribution of stock ownership within a company, helping users identify major shareholders and assess shareholder concentration.

### Example

```typescript
import {
    RegulatoryApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new RegulatoryApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)

const { status, data } = await apiInstance.getDirectHolders(
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

**GetDirectHolders200Response**

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

# **getEdgarFilingsArchive**
> GetEdgarFilingsArchive200Response getEdgarFilingsArchive()

The EDGAR fillings endpoint provides access to a comprehensive collection of financial documents submitted to the SEC, including real-time and historical forms, filings, and exhibits. Users can retrieve detailed information about company disclosures, financial statements, and regulatory submissions, enabling them to access essential compliance and financial data directly from the SEC\'s EDGAR system.

### Example

```typescript
import {
    RegulatoryApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new RegulatoryApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Filter by exchange name (optional) (default to undefined)
let micCode: string; //Filter by market identifier code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let formType: string; //Filter by form types, example `8-K`, `EX-1.1` (optional) (default to undefined)
let filledFrom: string; //Filter by filled time from (optional) (default to undefined)
let filledTo: string; //Filter by filled time to (optional) (default to undefined)
let page: number; //Page number (optional) (default to 1)
let pageSize: number; //Number of records in response (optional) (default to 10)

const { status, data } = await apiInstance.getEdgarFilingsArchive(
    symbol,
    figi,
    isin,
    cusip,
    exchange,
    micCode,
    country,
    formType,
    filledFrom,
    filledTo,
    page,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Filter by exchange name | (optional) defaults to undefined|
| **micCode** | [**string**] | Filter by market identifier code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **formType** | [**string**] | Filter by form types, example &#x60;8-K&#x60;, &#x60;EX-1.1&#x60; | (optional) defaults to undefined|
| **filledFrom** | [**string**] | Filter by filled time from | (optional) defaults to undefined|
| **filledTo** | [**string**] | Filter by filled time to | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **pageSize** | [**number**] | Number of records in response | (optional) defaults to 10|


### Return type

**GetEdgarFilingsArchive200Response**

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

# **getFundHolders**
> GetFundHolders200Response getFundHolders()

The fund holders endpoint provides detailed information about the proportion of a company\'s stock that is owned by mutual fund holders. It returns data on the number of shares held, the percentage of total shares outstanding, and the names of the mutual funds involved. This endpoint is useful for users looking to understand mutual fund investment in a specific company.

### Example

```typescript
import {
    RegulatoryApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new RegulatoryApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)

const { status, data } = await apiInstance.getFundHolders(
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

**GetFundHolders200Response**

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

# **getInsiderTransactions**
> GetInsiderTransactions200Response getInsiderTransactions()

The insider transaction endpoint provides detailed data on trades executed by company insiders, such as executives and directors. It returns information including the insider\'s name, their role, the transaction type, the number of shares, the transaction date, and the price per share. This endpoint is useful for tracking insider activity and understanding potential insider sentiment towards a company\'s stock.

### Example

```typescript
import {
    RegulatoryApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new RegulatoryApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested, e.g., `AAPL`, `TSLA`. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded, e.g., `Nasdaq`, `NSE` (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., United States or US. (optional) (default to undefined)

const { status, data } = await apiInstance.getInsiderTransactions(
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
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested, e.g., &#x60;AAPL&#x60;, &#x60;TSLA&#x60;. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | Exchange where instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;NSE&#x60; | (optional) defaults to undefined|
| **micCode** | [**string**] | Market Identifier Code (MIC) under ISO 10383 standard | (optional) defaults to undefined|
| **country** | [**string**] | Country where instrument is traded, e.g., United States or US. | (optional) defaults to undefined|


### Return type

**GetInsiderTransactions200Response**

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

# **getInstitutionalHolders**
> GetInstitutionalHolders200Response getInstitutionalHolders()

The institutional holders endpoint provides detailed information on the percentage and amount of a company\'s stock owned by institutional investors, such as pension funds, insurance companies, and investment firms. This data is essential for understanding the influence and involvement of large entities in a company\'s ownership structure.

### Example

```typescript
import {
    RegulatoryApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new RegulatoryApi(configuration);

let symbol: string; //Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //Exchange where instrument is traded (optional) (default to undefined)
let micCode: string; //Market Identifier Code (MIC) under ISO 10383 standard (optional) (default to undefined)
let country: string; //Country where instrument is traded, e.g., `United States` or `US` (optional) (default to undefined)

const { status, data } = await apiInstance.getInstitutionalHolders(
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

**GetInstitutionalHolders200Response**

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

# **getSourceSanctionedEntities**
> GetSourceSanctionedEntities200Response getSourceSanctionedEntities()

The sanctions entities endpoint provides a comprehensive list of entities sanctioned by a specified authority, such as OFAC, UK, EU, or AU. Users can retrieve detailed information about individuals, organizations, and other entities subject to sanctions from the chosen source, facilitating compliance and risk management processes.

### Example

```typescript
import {
    RegulatoryApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new RegulatoryApi(configuration);

let source: SourceEnum; //Sanctions source (default to undefined)

const { status, data } = await apiInstance.getSourceSanctionedEntities(
    source
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **source** | **SourceEnum** | Sanctions source | defaults to undefined|


### Return type

**GetSourceSanctionedEntities200Response**

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

# **getTaxInfo**
> GetTaxInfo200Response getTaxInfo()

The tax information endpoint provides detailed tax-related data for a specified financial instrument, including applicable tax rates and relevant tax codes. This information is essential for users needing to understand the tax implications associated with trading or investing in specific instruments.

### Example

```typescript
import {
    RegulatoryApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new RegulatoryApi(configuration);

let symbol: string; //The ticker symbol of an instrument for which data is requested, e.g., `SKYQ`, `AIRE`, `ALM:BME`, `HSI:HKEX`. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let figi: string; //The FIGI of an instrument for which data is requested. This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let exchange: string; //The exchange name where the instrument is traded, e.g., `Nasdaq`, `Euronext` (optional) (default to undefined)
let micCode: string; //The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., `XNAS`, `XLON` (optional) (default to undefined)

const { status, data } = await apiInstance.getTaxInfo(
    symbol,
    isin,
    figi,
    cusip,
    exchange,
    micCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | The ticker symbol of an instrument for which data is requested, e.g., &#x60;SKYQ&#x60;, &#x60;AIRE&#x60;, &#x60;ALM:BME&#x60;, &#x60;HSI:HKEX&#x60;. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **figi** | [**string**] | The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **exchange** | [**string**] | The exchange name where the instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;Euronext&#x60; | (optional) defaults to undefined|
| **micCode** | [**string**] | The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., &#x60;XNAS&#x60;, &#x60;XLON&#x60; | (optional) defaults to undefined|


### Return type

**GetTaxInfo200Response**

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

