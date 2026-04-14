# EtfsApi

All URIs are relative to *https://api.twelvedata.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getETFsFamily**](EtfsApi.md#getetfsfamily) | **GET** /etfs/family | ETFs families |
| [**getETFsList**](EtfsApi.md#getetfslist) | **GET** /etfs/list | ETFs directory |
| [**getETFsType**](EtfsApi.md#getetfstype) | **GET** /etfs/type | ETFs types |
| [**getETFsWorld**](EtfsApi.md#getetfsworld) | **GET** /etfs/world | ETF full data |
| [**getETFsWorldComposition**](EtfsApi.md#getetfsworldcomposition) | **GET** /etfs/world/composition | Composition |
| [**getETFsWorldPerformance**](EtfsApi.md#getetfsworldperformance) | **GET** /etfs/world/performance | Performance |
| [**getETFsWorldRisk**](EtfsApi.md#getetfsworldrisk) | **GET** /etfs/world/risk | Risk |
| [**getETFsWorldSummary**](EtfsApi.md#getetfsworldsummary) | **GET** /etfs/world/summary | Summary |



## getETFsFamily

> GetETFsFamily200Response getETFsFamily(country, fundFamily)

ETFs families

Retrieve a comprehensive list of exchange-traded fund (ETF) families, providing users with detailed information on various ETF groups available in the market. This endpoint is ideal for users looking to explore different ETF categories, compare offerings, or integrate ETF family data into their financial applications.

### Example

```ts
import {
  Configuration,
  EtfsApi,
} from '@twelvedata/twelvedata-node';
import type { GetETFsFamilyRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new EtfsApi(config);

  const body = {
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Filter by investment company that manages the fund (optional)
    fundFamily: iShares,
  } satisfies GetETFsFamilyRequest;

  try {
    const data = await api.getETFsFamily(body);
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
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **fundFamily** | `string` | Filter by investment company that manages the fund | [Optional] [Defaults to `undefined`] |

### Return type

[**GetETFsFamily200Response**](GetETFsFamily200Response.md)

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


## getETFsList

> GetETFsList200Response getETFsList(symbol, figi, isin, cusip, cik, country, fundFamily, fundType, page, outputsize)

ETFs directory

The ETFs directory endpoint provides a daily updated list of exchange-traded funds, sorted by total assets in descending order. This endpoint is useful for retrieving comprehensive ETF data, including fund names and asset values, to assist users in quickly identifying the ETFs available.

### Example

```ts
import {
  Configuration,
  EtfsApi,
} from '@twelvedata/twelvedata-node';
import type { GetETFsListRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new EtfsApi(config);

  const body = {
    // string | Filter by symbol (optional)
    symbol: IVV,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BVZ697,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US4642872000,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 464287200,
    // string | The CIK of an instrument for which data is requested (optional)
    cik: 95953,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Filter by investment company that manages the fund (optional)
    fundFamily: iShares,
    // string | Filter by the type of fund (optional)
    fundType: Large Blend,
    // number | Page number (optional)
    page: 789,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetETFsListRequest;

  try {
    const data = await api.getETFsList(body);
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
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `50`] |

### Return type

[**GetETFsList200Response**](GetETFsList200Response.md)

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


## getETFsType

> GetETFsType200Response getETFsType(country, fundType)

ETFs types

The ETFs Types endpoint provides a concise list of ETF categories by market (e.g., Singapore, United States), including types like \&quot;Equity Precious Metals\&quot; and \&quot;Large Blend.\&quot; It supports targeted investment research and portfolio diversification.

### Example

```ts
import {
  Configuration,
  EtfsApi,
} from '@twelvedata/twelvedata-node';
import type { GetETFsTypeRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new EtfsApi(config);

  const body = {
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Filter by the type of fund (optional)
    fundType: Large Blend,
  } satisfies GetETFsTypeRequest;

  try {
    const data = await api.getETFsType(body);
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
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **fundType** | `string` | Filter by the type of fund | [Optional] [Defaults to `undefined`] |

### Return type

[**GetETFsType200Response**](GetETFsType200Response.md)

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


## getETFsWorld

> GetETFsWorld200Response getETFsWorld(symbol, figi, isin, cusip, country, dp)

ETF full data

The ETF full data endpoint provides detailed information about global Exchange-Traded Funds. It returns comprehensive data, including a summary, performance metrics, risk assessment, and composition details. This endpoint is ideal for users seeking an in-depth analysis of worldwide ETFs, enabling them to access key financial metrics and portfolio breakdowns.

### Example

```ts
import {
  Configuration,
  EtfsApi,
} from '@twelvedata/twelvedata-node';
import type { GetETFsWorldRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new EtfsApi(config);

  const body = {
    // string | Symbol ticker of etf (optional)
    symbol: IVV,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BVZ697,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US4642872000,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 464287200,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetETFsWorldRequest;

  try {
    const data = await api.getETFsWorld(body);
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
| **symbol** | `string` | Symbol ticker of etf | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetETFsWorld200Response**](GetETFsWorld200Response.md)

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


## getETFsWorldComposition

> GetETFsWorldComposition200Response getETFsWorldComposition(symbol, figi, isin, cusip, country, dp)

Composition

The ETFs composition endpoint provides detailed information about the composition of global Exchange-Traded Funds. It returns data on the sectors included in the ETF, specific holding details, and the weighted exposure of each component. This endpoint is useful for users who need to understand the specific makeup and sector distribution of an ETF portfolio.

### Example

```ts
import {
  Configuration,
  EtfsApi,
} from '@twelvedata/twelvedata-node';
import type { GetETFsWorldCompositionRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new EtfsApi(config);

  const body = {
    // string | Symbol ticker of etf (optional)
    symbol: IVV,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BVZ697,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US4642872000,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 464287200,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetETFsWorldCompositionRequest;

  try {
    const data = await api.getETFsWorldComposition(body);
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
| **symbol** | `string` | Symbol ticker of etf | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetETFsWorldComposition200Response**](GetETFsWorldComposition200Response.md)

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


## getETFsWorldPerformance

> GetETFsWorldPerformance200Response getETFsWorldPerformance(symbol, figi, isin, cusip, country, dp)

Performance

The ETFs performance endpoint provides comprehensive performance data for exchange-traded funds globally. It returns detailed metrics such as trailing returns and annual returns, enabling users to evaluate the historical performance of various ETFs. This endpoint is ideal for users looking to compare ETF performance over different time periods and assess their investment potential.

### Example

```ts
import {
  Configuration,
  EtfsApi,
} from '@twelvedata/twelvedata-node';
import type { GetETFsWorldPerformanceRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new EtfsApi(config);

  const body = {
    // string | Symbol ticker of etf (optional)
    symbol: IVV,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BVZ697,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US4642872000,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 464287200,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetETFsWorldPerformanceRequest;

  try {
    const data = await api.getETFsWorldPerformance(body);
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
| **symbol** | `string` | Symbol ticker of etf | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetETFsWorldPerformance200Response**](GetETFsWorldPerformance200Response.md)

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


## getETFsWorldRisk

> GetETFsWorldRisk200Response getETFsWorldRisk(symbol, figi, isin, cusip, country, dp)

Risk

The ETFs risk endpoint provides essential risk metrics for global Exchange Traded Funds. It returns data such as volatility, beta, and other risk-related indicators, enabling users to assess the potential risk associated with investing in various ETFs worldwide.

### Example

```ts
import {
  Configuration,
  EtfsApi,
} from '@twelvedata/twelvedata-node';
import type { GetETFsWorldRiskRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new EtfsApi(config);

  const body = {
    // string | Symbol ticker of etf (optional)
    symbol: IVV,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BVZ697,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US4642872000,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 464287200,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetETFsWorldRiskRequest;

  try {
    const data = await api.getETFsWorldRisk(body);
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
| **symbol** | `string` | Symbol ticker of etf | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetETFsWorldRisk200Response**](GetETFsWorldRisk200Response.md)

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


## getETFsWorldSummary

> GetETFsWorldSummary200Response getETFsWorldSummary(symbol, figi, isin, cusip, country, dp)

Summary

The ETFs summary endpoint provides a concise overview of global Exchange-Traded Funds. It returns key data points such as ETF names, symbols, and current market values, enabling users to quickly assess the performance and status of various international ETFs. This summary is ideal for users who need a snapshot of the global ETF landscape without delving into detailed analysis.

### Example

```ts
import {
  Configuration,
  EtfsApi,
} from '@twelvedata/twelvedata-node';
import type { GetETFsWorldSummaryRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new EtfsApi(config);

  const body = {
    // string | Symbol ticker of etf (optional)
    symbol: IVV,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000BVZ697,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US4642872000,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 464287200,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // number | Number of decimal places for floating values. Accepts value in range [0,11] (optional)
    dp: 789,
  } satisfies GetETFsWorldSummaryRequest;

  try {
    const data = await api.getETFsWorldSummary(body);
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
| **symbol** | `string` | Symbol ticker of etf | [Optional] [Defaults to `undefined`] |
| **figi** | `string` | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Accepts value in range [0,11] | [Optional] [Defaults to `5`] |

### Return type

[**GetETFsWorldSummary200Response**](GetETFsWorldSummary200Response.md)

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

