# MutualFundsApi

All URIs are relative to *https://api.twelvedata.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getMutualFundsFamily**](MutualFundsApi.md#getmutualfundsfamily) | **GET** /mutual_funds/family | MFs families |
| [**getMutualFundsList**](MutualFundsApi.md#getmutualfundslist) | **GET** /mutual_funds/list | MFs directory |
| [**getMutualFundsType**](MutualFundsApi.md#getmutualfundstype) | **GET** /mutual_funds/type | MFs types |
| [**getMutualFundsWorld**](MutualFundsApi.md#getmutualfundsworld) | **GET** /mutual_funds/world | MF full data |
| [**getMutualFundsWorldComposition**](MutualFundsApi.md#getmutualfundsworldcomposition) | **GET** /mutual_funds/world/composition | Composition |
| [**getMutualFundsWorldPerformance**](MutualFundsApi.md#getmutualfundsworldperformance) | **GET** /mutual_funds/world/performance | Performance |
| [**getMutualFundsWorldPurchaseInfo**](MutualFundsApi.md#getmutualfundsworldpurchaseinfo) | **GET** /mutual_funds/world/purchase_info | Purchase info |
| [**getMutualFundsWorldRatings**](MutualFundsApi.md#getmutualfundsworldratings) | **GET** /mutual_funds/world/ratings | Ratings |
| [**getMutualFundsWorldRisk**](MutualFundsApi.md#getmutualfundsworldrisk) | **GET** /mutual_funds/world/risk | Risk |
| [**getMutualFundsWorldSummary**](MutualFundsApi.md#getmutualfundsworldsummary) | **GET** /mutual_funds/world/summary | Summary |
| [**getMutualFundsWorldSustainability**](MutualFundsApi.md#getmutualfundsworldsustainability) | **GET** /mutual_funds/world/sustainability | Sustainability |



## getMutualFundsFamily

> GetMutualFundsFamily200Response getMutualFundsFamily(fundFamily, country)

MFs families

The mutual funds family endpoint provides a comprehensive list of MF families, which are groups of mutual funds managed by the same investment company. This data is useful for users looking to explore or compare different fund families, understand the range of investment options offered by each, and identify potential investment opportunities within specific fund families.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsFamilyRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Filter by investment company that manages the fund (optional)
    fundFamily: Jackson National,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
  } satisfies GetMutualFundsFamilyRequest;

  try {
    const data = await api.getMutualFundsFamily(body);
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
| **fundFamily** | `string` | Filter by investment company that manages the fund | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetMutualFundsFamily200Response**](GetMutualFundsFamily200Response.md)

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


## getMutualFundsList

> GetMutualFundsList200Response getMutualFundsList(symbol, figi, isin, cusip, cik, country, fundFamily, fundType, performanceRating, riskRating, page, outputsize)

MFs directory

The mutual funds directory endpoint provides a daily updated list of mutual funds, sorted in descending order by their total assets value. This endpoint is useful for retrieving an organized overview of available mutual funds.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsListRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Filter by symbol (optional)
    symbol: 1535462D,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG00HMMLCH1,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: LU1206782309,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 120678230,
    // string | The CIK of an instrument for which data is requested (optional)
    cik: 95953,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Filter by investment company that manages the fund (optional)
    fundFamily: Jackson National,
    // string | Filter by the type of fund (optional)
    fundType: Small Blend,
    // number | Filter by performance rating from `0` to `5` (optional)
    performanceRating: 4,
    // number | Filter by risk rating from `0` to `5` (optional)
    riskRating: 4,
    // number | Page number (optional)
    page: 789,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetMutualFundsListRequest;

  try {
    const data = await api.getMutualFundsList(body);
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
| **cik** | `string` | The CIK of an instrument for which data is requested | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **fundFamily** | `string` | Filter by investment company that manages the fund | [Optional] [Defaults to `undefined`] |
| **fundType** | `string` | Filter by the type of fund | [Optional] [Defaults to `undefined`] |
| **performanceRating** | `number` | Filter by performance rating from &#x60;0&#x60; to &#x60;5&#x60; | [Optional] [Defaults to `undefined`] |
| **riskRating** | `number` | Filter by risk rating from &#x60;0&#x60; to &#x60;5&#x60; | [Optional] [Defaults to `undefined`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `100`] |

### Return type

[**GetMutualFundsList200Response**](GetMutualFundsList200Response.md)

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


## getMutualFundsType

> GetMutualFundsType200Response getMutualFundsType(fundType, country)

MFs types

This endpoint provides detailed information on various types of mutual funds, such as equity, bond, and balanced funds, allowing users to understand the different investment options available.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsTypeRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Filter by the type of fund (optional)
    fundType: Jackson National,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
  } satisfies GetMutualFundsTypeRequest;

  try {
    const data = await api.getMutualFundsType(body);
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
| **fundType** | `string` | Filter by the type of fund | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetMutualFundsType200Response**](GetMutualFundsType200Response.md)

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


## getMutualFundsWorld

> GetMutualFundsWorld200Response getMutualFundsWorld(symbol, figi, isin, cusip, country, dp)

MF full data

The mutual full data endpoint provides detailed information about global mutual funds. It returns a comprehensive dataset that includes a summary of the fund, its performance metrics, risk assessment, ratings, asset composition, purchase details, and sustainability factors. This endpoint is essential for users seeking in-depth insights into mutual funds on a global scale, allowing them to evaluate various aspects such as investment performance, risk levels, and environmental impact.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsWorldRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Symbol ticker of mutual fund (optional)
    symbol: 1535462D,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG00HMMLCH1,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: LU1206782309,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 120678230,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetMutualFundsWorldRequest;

  try {
    const data = await api.getMutualFundsWorld(body);
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
| **symbol** | `string` | Symbol ticker of mutual fund | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetMutualFundsWorld200Response**](GetMutualFundsWorld200Response.md)

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


## getMutualFundsWorldComposition

> GetMutualFundsWorldComposition200Response getMutualFundsWorldComposition(symbol, figi, isin, cusip, country, dp)

Composition

The mutual funds compositions endpoint provides detailed information about the portfolio composition of a specified mutual fund. It returns data on sector allocations, individual holdings, and their respective weighted exposures. This endpoint is useful for users seeking to understand the investment distribution and risk profile of a mutual fund.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsWorldCompositionRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Symbol ticker of mutual fund (optional)
    symbol: 1535462D,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG00HMMLCH1,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: LU1206782309,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 120678230,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetMutualFundsWorldCompositionRequest;

  try {
    const data = await api.getMutualFundsWorldComposition(body);
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
| **symbol** | `string` | Symbol ticker of mutual fund | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetMutualFundsWorldComposition200Response**](GetMutualFundsWorldComposition200Response.md)

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


## getMutualFundsWorldPerformance

> GetMutualFundsWorldPerformance200Response getMutualFundsWorldPerformance(symbol, figi, isin, cusip, country, dp)

Performance

The mutual funds performances endpoint provides comprehensive performance data for mutual funds globally. It returns metrics such as trailing returns, annual returns, quarterly returns, and load-adjusted returns.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsWorldPerformanceRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Symbol ticker of mutual fund (optional)
    symbol: 1535462D,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG00HMMLCH1,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: LU1206782309,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 120678230,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetMutualFundsWorldPerformanceRequest;

  try {
    const data = await api.getMutualFundsWorldPerformance(body);
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
| **symbol** | `string` | Symbol ticker of mutual fund | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetMutualFundsWorldPerformance200Response**](GetMutualFundsWorldPerformance200Response.md)

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


## getMutualFundsWorldPurchaseInfo

> GetMutualFundsWorldPurchaseInfo200Response getMutualFundsWorldPurchaseInfo(symbol, figi, isin, cusip, country, dp)

Purchase info

The mutual funds purchase information endpoint provides detailed purchasing details for global mutual funds. It returns data on minimum investment requirements, current pricing, and a list of brokerages where the mutual fund can be purchased. This endpoint is useful for users looking to understand the entry requirements and options available for investing in specific mutual funds.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsWorldPurchaseInfoRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Symbol ticker of mutual fund (optional)
    symbol: 1535462D,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG00HMMLCH1,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: LU1206782309,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 120678230,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetMutualFundsWorldPurchaseInfoRequest;

  try {
    const data = await api.getMutualFundsWorldPurchaseInfo(body);
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
| **symbol** | `string` | Symbol ticker of mutual fund | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetMutualFundsWorldPurchaseInfo200Response**](GetMutualFundsWorldPurchaseInfo200Response.md)

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


## getMutualFundsWorldRatings

> GetMutualFundsWorldRatings200Response getMutualFundsWorldRatings(symbol, figi, isin, cusip, country, dp)

Ratings

The mutual funds ratings endpoint provides detailed ratings for mutual funds across global markets. It returns data on the performance and quality of mutual funds, including ratings calculated in-house by Twelve Data and from various financial institutions.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsWorldRatingsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Symbol ticker of mutual fund (optional)
    symbol: 1535462D,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG00HMMLCH1,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: LU1206782309,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 120678230,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetMutualFundsWorldRatingsRequest;

  try {
    const data = await api.getMutualFundsWorldRatings(body);
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
| **symbol** | `string` | Symbol ticker of mutual fund | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetMutualFundsWorldRatings200Response**](GetMutualFundsWorldRatings200Response.md)

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


## getMutualFundsWorldRisk

> GetMutualFundsWorldRisk200Response getMutualFundsWorldRisk(symbol, figi, isin, cusip, country, dp)

Risk

The mutual funds risk endpoint provides detailed risk metrics for global mutual funds. It returns data such as standard deviation, beta, and Sharpe ratio, which help assess the volatility and risk profile of mutual funds across different markets.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsWorldRiskRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Symbol ticker of mutual fund (optional)
    symbol: 1535462D,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG00HMMLCH1,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: LU1206782309,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 120678230,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetMutualFundsWorldRiskRequest;

  try {
    const data = await api.getMutualFundsWorldRisk(body);
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
| **symbol** | `string` | Symbol ticker of mutual fund | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetMutualFundsWorldRisk200Response**](GetMutualFundsWorldRisk200Response.md)

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


## getMutualFundsWorldSummary

> GetMutualFundsWorldSummary200Response getMutualFundsWorldSummary(symbol, figi, isin, cusip, country, dp)

Summary

The mutual funds summary endpoint provides a concise overview of global mutual funds, including key details such as fund name, symbol, asset class, and region. This endpoint is useful for quickly obtaining essential information about various mutual funds worldwide, aiding in the comparison and selection of funds for investment portfolios.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsWorldSummaryRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Symbol ticker of mutual fund (optional)
    symbol: 1535462D,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG00HMMLCH1,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: LU1206782309,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 120678230,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetMutualFundsWorldSummaryRequest;

  try {
    const data = await api.getMutualFundsWorldSummary(body);
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
| **symbol** | `string` | Symbol ticker of mutual fund | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetMutualFundsWorldSummary200Response**](GetMutualFundsWorldSummary200Response.md)

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


## getMutualFundsWorldSustainability

> GetMutualFundsWorldSustainability200Response getMutualFundsWorldSustainability(symbol, figi, isin, cusip, country, dp)

Sustainability

The mutual funds sustainability endpoint provides detailed information on the sustainability and Environmental, Social, and Governance (ESG) ratings of global mutual funds. It returns data such as ESG scores, sustainability metrics, and fund identifiers.

### Example

```ts
import {
  Configuration,
  MutualFundsApi,
} from '@twelvedata/twelvedata-node';
import type { GetMutualFundsWorldSustainabilityRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new MutualFundsApi(config);

  const body = {
    // string | Symbol ticker of mutual fund (optional)
    symbol: 1535462D,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG00HMMLCH1,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: LU1206782309,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 120678230,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetMutualFundsWorldSustainabilityRequest;

  try {
    const data = await api.getMutualFundsWorldSustainability(body);
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
| **symbol** | `string` | Symbol ticker of mutual fund | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetMutualFundsWorldSustainability200Response**](GetMutualFundsWorldSustainability200Response.md)

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

