# RegulatoryApi

All URIs are relative to *https://api.twelvedata.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDirectHolders**](RegulatoryApi.md#getdirectholders) | **GET** /direct_holders | Direct holders |
| [**getEdgarFilingsArchive**](RegulatoryApi.md#getedgarfilingsarchive) | **GET** /edgar_filings/archive | EDGAR fillings |
| [**getFundHolders**](RegulatoryApi.md#getfundholders) | **GET** /fund_holders | Fund holders |
| [**getInsiderTransactions**](RegulatoryApi.md#getinsidertransactions) | **GET** /insider_transactions | Insider transaction |
| [**getInstitutionalHolders**](RegulatoryApi.md#getinstitutionalholders) | **GET** /institutional_holders | Institutional holders |
| [**getSourceSanctionedEntities**](RegulatoryApi.md#getsourcesanctionedentities) | **GET** /sanctions/{source} | Sanctioned entities |
| [**getTaxInfo**](RegulatoryApi.md#gettaxinfo) | **GET** /tax_info | Tax information |



## getDirectHolders

> GetDirectHolders200Response getDirectHolders(symbol, figi, isin, cusip, exchange, micCode, country)

Direct holders

The direct holders endpoint provides detailed information about the number of shares directly held by individuals or entities as recorded in a company\&#39;s official share registry. This data is essential for understanding the distribution of stock ownership within a company, helping users identify major shareholders and assess shareholder concentration.

### Example

```ts
import {
  Configuration,
  RegulatoryApi,
} from '@twelvedata/twelvedata-node';
import type { GetDirectHoldersRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new RegulatoryApi(config);

  const body = {
    // string | Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: 7203,
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
  } satisfies GetDirectHoldersRequest;

  try {
    const data = await api.getDirectHolders(body);
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

[**GetDirectHolders200Response**](GetDirectHolders200Response.md)

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


## getEdgarFilingsArchive

> GetEdgarFilingsArchive200Response getEdgarFilingsArchive(symbol, figi, isin, cusip, exchange, micCode, country, formType, filledFrom, filledTo, page, pageSize)

EDGAR fillings

The EDGAR fillings endpoint provides access to a comprehensive collection of financial documents submitted to the SEC, including real-time and historical forms, filings, and exhibits. Users can retrieve detailed information about company disclosures, financial statements, and regulatory submissions, enabling them to access essential compliance and financial data directly from the SEC\&#39;s EDGAR system.

### Example

```ts
import {
  Configuration,
  RegulatoryApi,
} from '@twelvedata/twelvedata-node';
import type { GetEdgarFilingsArchiveRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new RegulatoryApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested (optional)
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
    micCode: XNGS,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Filter by form types, example `8-K`, `EX-1.1` (optional)
    formType: 8-K,
    // string | Filter by filled time from (optional)
    filledFrom: 2024-01-01,
    // string | Filter by filled time to (optional)
    filledTo: 2024-01-01,
    // number | Page number (optional)
    page: 789,
    // number | Number of records in response (optional)
    pageSize: 789,
  } satisfies GetEdgarFilingsArchiveRequest;

  try {
    const data = await api.getEdgarFilingsArchive(body);
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
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Filter by market identifier code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **formType** | `string` | Filter by form types, example &#x60;8-K&#x60;, &#x60;EX-1.1&#x60; | [Optional] [Defaults to `undefined`] |
| **filledFrom** | `string` | Filter by filled time from | [Optional] [Defaults to `undefined`] |
| **filledTo** | `string` | Filter by filled time to | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **pageSize** | `number` | Number of records in response | [Optional] [Defaults to `10`] |

### Return type

[**GetEdgarFilingsArchive200Response**](GetEdgarFilingsArchive200Response.md)

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


## getFundHolders

> GetFundHolders200Response getFundHolders(symbol, figi, isin, cusip, exchange, micCode, country)

Fund holders

The fund holders endpoint provides detailed information about the proportion of a company\&#39;s stock that is owned by mutual fund holders. It returns data on the number of shares held, the percentage of total shares outstanding, and the names of the mutual funds involved. This endpoint is useful for users looking to understand mutual fund investment in a specific company.

### Example

```ts
import {
  Configuration,
  RegulatoryApi,
} from '@twelvedata/twelvedata-node';
import type { GetFundHoldersRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new RegulatoryApi(config);

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
  } satisfies GetFundHoldersRequest;

  try {
    const data = await api.getFundHolders(body);
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

[**GetFundHolders200Response**](GetFundHolders200Response.md)

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


## getInsiderTransactions

> GetInsiderTransactions200Response getInsiderTransactions(symbol, figi, isin, cusip, exchange, micCode, country)

Insider transaction

The insider transaction endpoint provides detailed data on trades executed by company insiders, such as executives and directors. It returns information including the insider\&#39;s name, their role, the transaction type, the number of shares, the transaction date, and the price per share. This endpoint is useful for tracking insider activity and understanding potential insider sentiment towards a company\&#39;s stock.

### Example

```ts
import {
  Configuration,
  RegulatoryApi,
} from '@twelvedata/twelvedata-node';
import type { GetInsiderTransactionsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new RegulatoryApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested, e.g., `AAPL`, `TSLA`. For preffered stocks use dot(.) delimiter. E.g. `BRK.A` or `BRK.B` will be correct (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Exchange where instrument is traded, e.g., `Nasdaq`, `NSE` (optional)
    exchange: NASDAQ,
    // string | Market Identifier Code (MIC) under ISO 10383 standard (optional)
    micCode: XNAS,
    // string | Country where instrument is traded, e.g., United States or US. (optional)
    country: United States,
  } satisfies GetInsiderTransactionsRequest;

  try {
    const data = await api.getInsiderTransactions(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested, e.g., &#x60;AAPL&#x60;, &#x60;TSLA&#x60;. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;NSE&#x60; | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | Market Identifier Code (MIC) under ISO 10383 standard | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Country where instrument is traded, e.g., United States or US. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetInsiderTransactions200Response**](GetInsiderTransactions200Response.md)

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


## getInstitutionalHolders

> GetInstitutionalHolders200Response getInstitutionalHolders(symbol, figi, isin, cusip, exchange, micCode, country)

Institutional holders

The institutional holders endpoint provides detailed information on the percentage and amount of a company\&#39;s stock owned by institutional investors, such as pension funds, insurance companies, and investment firms. This data is essential for understanding the influence and involvement of large entities in a company\&#39;s ownership structure.

### Example

```ts
import {
  Configuration,
  RegulatoryApi,
} from '@twelvedata/twelvedata-node';
import type { GetInstitutionalHoldersRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new RegulatoryApi(config);

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
  } satisfies GetInstitutionalHoldersRequest;

  try {
    const data = await api.getInstitutionalHolders(body);
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

[**GetInstitutionalHolders200Response**](GetInstitutionalHolders200Response.md)

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


## getSourceSanctionedEntities

> GetSourceSanctionedEntities200Response getSourceSanctionedEntities(source)

Sanctioned entities

The sanctions entities endpoint provides a comprehensive list of entities sanctioned by a specified authority, such as OFAC, UK, EU, or AU. Users can retrieve detailed information about individuals, organizations, and other entities subject to sanctions from the chosen source, facilitating compliance and risk management processes.

### Example

```ts
import {
  Configuration,
  RegulatoryApi,
} from '@twelvedata/twelvedata-node';
import type { GetSourceSanctionedEntitiesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new RegulatoryApi(config);

  const body = {
    // SourceEnum | Sanctions source
    source: ofac,
  } satisfies GetSourceSanctionedEntitiesRequest;

  try {
    const data = await api.getSourceSanctionedEntities(body);
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
| **source** | `SourceEnum` | Sanctions source | [Defaults to `undefined`] [Enum: ofac, uk, eu, au] |

### Return type

[**GetSourceSanctionedEntities200Response**](GetSourceSanctionedEntities200Response.md)

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


## getTaxInfo

> GetTaxInfo200Response getTaxInfo(symbol, isin, figi, cusip, exchange, micCode)

Tax information

The tax information endpoint provides detailed tax-related data for a specified financial instrument, including applicable tax rates and relevant tax codes. This information is essential for users needing to understand the tax implications associated with trading or investing in specific instruments.

### Example

```ts
import {
  Configuration,
  RegulatoryApi,
} from '@twelvedata/twelvedata-node';
import type { GetTaxInfoRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new RegulatoryApi(config);

  const body = {
    // string | The ticker symbol of an instrument for which data is requested, e.g., `SKYQ`, `AIRE`, `ALM:BME`, `HSI:HKEX`. (optional)
    symbol: SKYQ,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US5949181045,
    // string | The FIGI of an instrument for which data is requested. This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG019XJT9D6,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | The exchange name where the instrument is traded, e.g., `Nasdaq`, `Euronext` (optional)
    exchange: Nasdaq,
    // string | The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., `XNAS`, `XLON` (optional)
    micCode: XNAS,
  } satisfies GetTaxInfoRequest;

  try {
    const data = await api.getTaxInfo(body);
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
| **symbol** | `string` | The ticker symbol of an instrument for which data is requested, e.g., &#x60;SKYQ&#x60;, &#x60;AIRE&#x60;, &#x60;ALM:BME&#x60;, &#x60;HSI:HKEX&#x60;. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | The exchange name where the instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;Euronext&#x60; | [Optional] [Defaults to `undefined`] |
| **micCode** | `string` | The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., &#x60;XNAS&#x60;, &#x60;XLON&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetTaxInfo200Response**](GetTaxInfo200Response.md)

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

