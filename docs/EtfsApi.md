# EtfsApi

All URIs are relative to *https://api.twelvedata.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getETFsFamily**](#getetfsfamily) | **GET** /etfs/family | ETFs families|
|[**getETFsList**](#getetfslist) | **GET** /etfs/list | ETFs directory|
|[**getETFsType**](#getetfstype) | **GET** /etfs/type | ETFs types|
|[**getETFsWorld**](#getetfsworld) | **GET** /etfs/world | ETF full data|
|[**getETFsWorldComposition**](#getetfsworldcomposition) | **GET** /etfs/world/composition | Composition|
|[**getETFsWorldPerformance**](#getetfsworldperformance) | **GET** /etfs/world/performance | Performance|
|[**getETFsWorldRisk**](#getetfsworldrisk) | **GET** /etfs/world/risk | Risk|
|[**getETFsWorldSummary**](#getetfsworldsummary) | **GET** /etfs/world/summary | Summary|

# **getETFsFamily**
> GetETFsFamily200Response getETFsFamily()

Retrieve a comprehensive list of exchange-traded fund (ETF) families, providing users with detailed information on various ETF groups available in the market. This endpoint is ideal for users looking to explore different ETF categories, compare offerings, or integrate ETF family data into their financial applications.

### Example

```typescript
import {
    EtfsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new EtfsApi(configuration);

let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let fundFamily: string; //Filter by investment company that manages the fund (optional) (default to undefined)

const { status, data } = await apiInstance.getETFsFamily(
    country,
    fundFamily
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **fundFamily** | [**string**] | Filter by investment company that manages the fund | (optional) defaults to undefined|


### Return type

**GetETFsFamily200Response**

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

# **getETFsList**
> GetETFsList200Response getETFsList()

The ETFs directory endpoint provides a daily updated list of exchange-traded funds, sorted by total assets in descending order. This endpoint is useful for retrieving comprehensive ETF data, including fund names and asset values, to assist users in quickly identifying the ETFs available.

### Example

```typescript
import {
    EtfsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new EtfsApi(configuration);

let symbol: string; //Filter by symbol (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cik: string; //The CIK of an instrument for which data is requested (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let fundFamily: string; //Filter by investment company that manages the fund (optional) (default to undefined)
let fundType: string; //Filter by the type of fund (optional) (default to undefined)
let page: number; //Page number (optional) (default to 1)
let outputsize: number; //Number of records in response (optional) (default to 50)

const { status, data } = await apiInstance.getETFsList(
    symbol,
    figi,
    isin,
    cusip,
    cik,
    country,
    fundFamily,
    fundType,
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
| **cik** | [**string**] | The CIK of an instrument for which data is requested | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **fundFamily** | [**string**] | Filter by investment company that manages the fund | (optional) defaults to undefined|
| **fundType** | [**string**] | Filter by the type of fund | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **outputsize** | [**number**] | Number of records in response | (optional) defaults to 50|


### Return type

**GetETFsList200Response**

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

# **getETFsType**
> GetETFsType200Response getETFsType()

The ETFs Types endpoint provides a concise list of ETF categories by market (e.g., Singapore, United States), including types like \"Equity Precious Metals\" and \"Large Blend.\" It supports targeted investment research and portfolio diversification.

### Example

```typescript
import {
    EtfsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new EtfsApi(configuration);

let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let fundType: string; //Filter by the type of fund (optional) (default to undefined)

const { status, data } = await apiInstance.getETFsType(
    country,
    fundType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **fundType** | [**string**] | Filter by the type of fund | (optional) defaults to undefined|


### Return type

**GetETFsType200Response**

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

# **getETFsWorld**
> GetETFsWorld200Response getETFsWorld()

The ETF full data endpoint provides detailed information about global Exchange-Traded Funds. It returns comprehensive data, including a summary, performance metrics, risk assessment, and composition details. This endpoint is ideal for users seeking an in-depth analysis of worldwide ETFs, enabling them to access key financial metrics and portfolio breakdowns.

### Example

```typescript
import {
    EtfsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new EtfsApi(configuration);

let symbol: string; //Symbol ticker of etf (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getETFsWorld(
    symbol,
    figi,
    isin,
    cusip,
    country,
    dp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of etf | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetETFsWorld200Response**

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

# **getETFsWorldComposition**
> GetETFsWorldComposition200Response getETFsWorldComposition()

The ETFs composition endpoint provides detailed information about the composition of global Exchange-Traded Funds. It returns data on the sectors included in the ETF, specific holding details, and the weighted exposure of each component. This endpoint is useful for users who need to understand the specific makeup and sector distribution of an ETF portfolio.

### Example

```typescript
import {
    EtfsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new EtfsApi(configuration);

let symbol: string; //Symbol ticker of etf (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getETFsWorldComposition(
    symbol,
    figi,
    isin,
    cusip,
    country,
    dp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of etf | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetETFsWorldComposition200Response**

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

# **getETFsWorldPerformance**
> GetETFsWorldPerformance200Response getETFsWorldPerformance()

The ETFs performance endpoint provides comprehensive performance data for exchange-traded funds globally. It returns detailed metrics such as trailing returns and annual returns, enabling users to evaluate the historical performance of various ETFs. This endpoint is ideal for users looking to compare ETF performance over different time periods and assess their investment potential.

### Example

```typescript
import {
    EtfsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new EtfsApi(configuration);

let symbol: string; //Symbol ticker of etf (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getETFsWorldPerformance(
    symbol,
    figi,
    isin,
    cusip,
    country,
    dp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of etf | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetETFsWorldPerformance200Response**

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

# **getETFsWorldRisk**
> GetETFsWorldRisk200Response getETFsWorldRisk()

The ETFs risk endpoint provides essential risk metrics for global Exchange Traded Funds. It returns data such as volatility, beta, and other risk-related indicators, enabling users to assess the potential risk associated with investing in various ETFs worldwide.

### Example

```typescript
import {
    EtfsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new EtfsApi(configuration);

let symbol: string; //Symbol ticker of etf (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getETFsWorldRisk(
    symbol,
    figi,
    isin,
    cusip,
    country,
    dp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of etf | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetETFsWorldRisk200Response**

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

# **getETFsWorldSummary**
> GetETFsWorldSummary200Response getETFsWorldSummary()

The ETFs summary endpoint provides a concise overview of global Exchange-Traded Funds. It returns key data points such as ETF names, symbols, and current market values, enabling users to quickly assess the performance and status of various international ETFs. This summary is ideal for users who need a snapshot of the global ETF landscape without delving into detailed analysis.

### Example

```typescript
import {
    EtfsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new EtfsApi(configuration);

let symbol: string; //Symbol ticker of etf (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getETFsWorldSummary(
    symbol,
    figi,
    isin,
    cusip,
    country,
    dp
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **symbol** | [**string**] | Symbol ticker of etf | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetETFsWorldSummary200Response**

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

