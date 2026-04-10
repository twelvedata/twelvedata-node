# MutualFundsApi

All URIs are relative to *https://api.twelvedata.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMutualFundsFamily**](#getmutualfundsfamily) | **GET** /mutual_funds/family | MFs families|
|[**getMutualFundsList**](#getmutualfundslist) | **GET** /mutual_funds/list | MFs directory|
|[**getMutualFundsType**](#getmutualfundstype) | **GET** /mutual_funds/type | MFs types|
|[**getMutualFundsWorld**](#getmutualfundsworld) | **GET** /mutual_funds/world | MF full data|
|[**getMutualFundsWorldComposition**](#getmutualfundsworldcomposition) | **GET** /mutual_funds/world/composition | Composition|
|[**getMutualFundsWorldPerformance**](#getmutualfundsworldperformance) | **GET** /mutual_funds/world/performance | Performance|
|[**getMutualFundsWorldPurchaseInfo**](#getmutualfundsworldpurchaseinfo) | **GET** /mutual_funds/world/purchase_info | Purchase info|
|[**getMutualFundsWorldRatings**](#getmutualfundsworldratings) | **GET** /mutual_funds/world/ratings | Ratings|
|[**getMutualFundsWorldRisk**](#getmutualfundsworldrisk) | **GET** /mutual_funds/world/risk | Risk|
|[**getMutualFundsWorldSummary**](#getmutualfundsworldsummary) | **GET** /mutual_funds/world/summary | Summary|
|[**getMutualFundsWorldSustainability**](#getmutualfundsworldsustainability) | **GET** /mutual_funds/world/sustainability | Sustainability|

# **getMutualFundsFamily**
> GetMutualFundsFamily200Response getMutualFundsFamily()

The mutual funds family endpoint provides a comprehensive list of MF families, which are groups of mutual funds managed by the same investment company. This data is useful for users looking to explore or compare different fund families, understand the range of investment options offered by each, and identify potential investment opportunities within specific fund families.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let fundFamily: string; //Filter by investment company that manages the fund (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)

const { status, data } = await apiInstance.getMutualFundsFamily(
    fundFamily,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundFamily** | [**string**] | Filter by investment company that manages the fund | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|


### Return type

**GetMutualFundsFamily200Response**

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

# **getMutualFundsList**
> GetMutualFundsList200Response getMutualFundsList()

The mutual funds directory endpoint provides a daily updated list of mutual funds, sorted in descending order by their total assets value. This endpoint is useful for retrieving an organized overview of available mutual funds.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let symbol: string; //Filter by symbol (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cik: string; //The CIK of an instrument for which data is requested (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let fundFamily: string; //Filter by investment company that manages the fund (optional) (default to undefined)
let fundType: string; //Filter by the type of fund (optional) (default to undefined)
let performanceRating: number; //Filter by performance rating from `0` to `5` (optional) (default to undefined)
let riskRating: number; //Filter by risk rating from `0` to `5` (optional) (default to undefined)
let page: number; //Page number (optional) (default to 1)
let outputsize: number; //Number of records in response (optional) (default to 100)

const { status, data } = await apiInstance.getMutualFundsList(
    symbol,
    figi,
    isin,
    cusip,
    cik,
    country,
    fundFamily,
    fundType,
    performanceRating,
    riskRating,
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
| **performanceRating** | [**number**] | Filter by performance rating from &#x60;0&#x60; to &#x60;5&#x60; | (optional) defaults to undefined|
| **riskRating** | [**number**] | Filter by risk rating from &#x60;0&#x60; to &#x60;5&#x60; | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **outputsize** | [**number**] | Number of records in response | (optional) defaults to 100|


### Return type

**GetMutualFundsList200Response**

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

# **getMutualFundsType**
> GetMutualFundsType200Response getMutualFundsType()

This endpoint provides detailed information on various types of mutual funds, such as equity, bond, and balanced funds, allowing users to understand the different investment options available.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let fundType: string; //Filter by the type of fund (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)

const { status, data } = await apiInstance.getMutualFundsType(
    fundType,
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundType** | [**string**] | Filter by the type of fund | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|


### Return type

**GetMutualFundsType200Response**

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

# **getMutualFundsWorld**
> GetMutualFundsWorld200Response getMutualFundsWorld()

The mutual full data endpoint provides detailed information about global mutual funds. It returns a comprehensive dataset that includes a summary of the fund, its performance metrics, risk assessment, ratings, asset composition, purchase details, and sustainability factors. This endpoint is essential for users seeking in-depth insights into mutual funds on a global scale, allowing them to evaluate various aspects such as investment performance, risk levels, and environmental impact.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let symbol: string; //Symbol ticker of mutual fund (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getMutualFundsWorld(
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
| **symbol** | [**string**] | Symbol ticker of mutual fund | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetMutualFundsWorld200Response**

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

# **getMutualFundsWorldComposition**
> GetMutualFundsWorldComposition200Response getMutualFundsWorldComposition()

The mutual funds compositions endpoint provides detailed information about the portfolio composition of a specified mutual fund. It returns data on sector allocations, individual holdings, and their respective weighted exposures. This endpoint is useful for users seeking to understand the investment distribution and risk profile of a mutual fund.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let symbol: string; //Symbol ticker of mutual fund (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getMutualFundsWorldComposition(
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
| **symbol** | [**string**] | Symbol ticker of mutual fund | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetMutualFundsWorldComposition200Response**

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

# **getMutualFundsWorldPerformance**
> GetMutualFundsWorldPerformance200Response getMutualFundsWorldPerformance()

The mutual funds performances endpoint provides comprehensive performance data for mutual funds globally. It returns metrics such as trailing returns, annual returns, quarterly returns, and load-adjusted returns.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let symbol: string; //Symbol ticker of mutual fund (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getMutualFundsWorldPerformance(
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
| **symbol** | [**string**] | Symbol ticker of mutual fund | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetMutualFundsWorldPerformance200Response**

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

# **getMutualFundsWorldPurchaseInfo**
> GetMutualFundsWorldPurchaseInfo200Response getMutualFundsWorldPurchaseInfo()

The mutual funds purchase information endpoint provides detailed purchasing details for global mutual funds. It returns data on minimum investment requirements, current pricing, and a list of brokerages where the mutual fund can be purchased. This endpoint is useful for users looking to understand the entry requirements and options available for investing in specific mutual funds.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let symbol: string; //Symbol ticker of mutual fund (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getMutualFundsWorldPurchaseInfo(
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
| **symbol** | [**string**] | Symbol ticker of mutual fund | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetMutualFundsWorldPurchaseInfo200Response**

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

# **getMutualFundsWorldRatings**
> GetMutualFundsWorldRatings200Response getMutualFundsWorldRatings()

The mutual funds ratings endpoint provides detailed ratings for mutual funds across global markets. It returns data on the performance and quality of mutual funds, including ratings calculated in-house by Twelve Data and from various financial institutions.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let symbol: string; //Symbol ticker of mutual fund (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getMutualFundsWorldRatings(
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
| **symbol** | [**string**] | Symbol ticker of mutual fund | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetMutualFundsWorldRatings200Response**

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

# **getMutualFundsWorldRisk**
> GetMutualFundsWorldRisk200Response getMutualFundsWorldRisk()

The mutual funds risk endpoint provides detailed risk metrics for global mutual funds. It returns data such as standard deviation, beta, and Sharpe ratio, which help assess the volatility and risk profile of mutual funds across different markets.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let symbol: string; //Symbol ticker of mutual fund (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getMutualFundsWorldRisk(
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
| **symbol** | [**string**] | Symbol ticker of mutual fund | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetMutualFundsWorldRisk200Response**

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

# **getMutualFundsWorldSummary**
> GetMutualFundsWorldSummary200Response getMutualFundsWorldSummary()

The mutual funds summary endpoint provides a concise overview of global mutual funds, including key details such as fund name, symbol, asset class, and region. This endpoint is useful for quickly obtaining essential information about various mutual funds worldwide, aiding in the comparison and selection of funds for investment portfolios.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let symbol: string; //Symbol ticker of mutual fund (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getMutualFundsWorldSummary(
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
| **symbol** | [**string**] | Symbol ticker of mutual fund | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetMutualFundsWorldSummary200Response**

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

# **getMutualFundsWorldSustainability**
> GetMutualFundsWorldSustainability200Response getMutualFundsWorldSustainability()

The mutual funds sustainability endpoint provides detailed information on the sustainability and Environmental, Social, and Governance (ESG) ratings of global mutual funds. It returns data such as ESG scores, sustainability metrics, and fund identifiers.

### Example

```typescript
import {
    MutualFundsApi,
    Configuration
} from '@twelvedata/twelvedata-node';

const configuration = new Configuration();
const apiInstance = new MutualFundsApi(configuration);

let symbol: string; //Symbol ticker of mutual fund (optional) (default to undefined)
let figi: string; //Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional) (default to undefined)
let isin: string; //Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let cusip: string; //The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional) (default to undefined)
let country: string; //Filter by country name or alpha code, e.g., `United States` or `US` (optional) (default to undefined)
let dp: number; //Number of decimal places for floating values. Accepts value in range [0,11] (optional) (default to 5)

const { status, data } = await apiInstance.getMutualFundsWorldSustainability(
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
| **symbol** | [**string**] | Symbol ticker of mutual fund | (optional) defaults to undefined|
| **figi** | [**string**] | Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | (optional) defaults to undefined|
| **isin** | [**string**] | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **cusip** | [**string**] | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | (optional) defaults to undefined|
| **country** | [**string**] | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | (optional) defaults to undefined|
| **dp** | [**number**] | Number of decimal places for floating values. Accepts value in range [0,11] | (optional) defaults to 5|


### Return type

**GetMutualFundsWorldSustainability200Response**

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

