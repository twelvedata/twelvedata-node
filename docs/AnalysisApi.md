# AnalysisApi

All URIs are relative to *https://api.twelvedata.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAnalystRatingsLight**](AnalysisApi.md#getanalystratingslight) | **GET** /analyst_ratings/light | Analyst ratings snapshot |
| [**getAnalystRatingsUsEquities**](AnalysisApi.md#getanalystratingsusequities) | **GET** /analyst_ratings/us_equities | Analyst ratings US equities |
| [**getEarningsEstimate**](AnalysisApi.md#getearningsestimate) | **GET** /earnings_estimate | Earnings estimate |
| [**getEpsRevisions**](AnalysisApi.md#getepsrevisions) | **GET** /eps_revisions | EPS revisions |
| [**getEpsTrend**](AnalysisApi.md#getepstrend) | **GET** /eps_trend | EPS trend |
| [**getGrowthEstimates**](AnalysisApi.md#getgrowthestimates) | **GET** /growth_estimates | Growth estimates |
| [**getPriceTarget**](AnalysisApi.md#getpricetarget) | **GET** /price_target | Price target |
| [**getRecommendations**](AnalysisApi.md#getrecommendations) | **GET** /recommendations | Recommendations |
| [**getRevenueEstimate**](AnalysisApi.md#getrevenueestimate) | **GET** /revenue_estimate | Revenue estimate |



## getAnalystRatingsLight

> GetAnalystRatingsLight200Response getAnalystRatingsLight(symbol, figi, isin, cusip, exchange, ratingChange, outputsize, country)

Analyst ratings snapshot

The analyst ratings snapshot endpoint provides a streamlined summary of ratings from analyst firms for both US and international markets. It delivers essential data on analyst recommendations, including buy, hold, and sell ratings, allowing users to quickly assess the general sentiment of analysts towards a particular stock.

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from '@twelvedata/twelvedata-node';
import type { GetAnalystRatingsLightRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AnalysisApi(config);

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
    // RatingChangeEnum | Filter by rating change action (optional)
    ratingChange: ...,
    // number | Number of records in response (optional)
    outputsize: 789,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
  } satisfies GetAnalystRatingsLightRequest;

  try {
    const data = await api.getAnalystRatingsLight(body);
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
| **ratingChange** | `RatingChangeEnum` | Filter by rating change action | [Optional] [Defaults to `undefined`] [Enum: Maintains, Upgrade, Downgrade, Initiates, Reiterates] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `30`] |
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAnalystRatingsLight200Response**](GetAnalystRatingsLight200Response.md)

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


## getAnalystRatingsUsEquities

> GetAnalystRatingsUsEquities200Response getAnalystRatingsUsEquities(symbol, figi, isin, cusip, exchange, ratingChange, outputsize)

Analyst ratings US equities

The analyst ratings US equities endpoint provides detailed information on analyst ratings for U.S. stocks. It returns data on the latest ratings issued by various analyst firms, including the rating itself, the firm issuing the rating, and any changes in the rating. This endpoint is useful for users tracking analyst opinions on U.S. equities, allowing them to see how professional analysts view the potential performance of specific stocks.

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from '@twelvedata/twelvedata-node';
import type { GetAnalystRatingsUsEquitiesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AnalysisApi(config);

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
    // RatingChangeEnum | Filter by rating change action (optional)
    ratingChange: ...,
    // number | Number of records in response (optional)
    outputsize: 789,
  } satisfies GetAnalystRatingsUsEquitiesRequest;

  try {
    const data = await api.getAnalystRatingsUsEquities(body);
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
| **ratingChange** | `RatingChangeEnum` | Filter by rating change action | [Optional] [Defaults to `undefined`] [Enum: Maintains, Upgrade, Downgrade, Initiates, Reiterates] |
| **outputsize** | `number` | Number of records in response | [Optional] [Defaults to `30`] |

### Return type

[**GetAnalystRatingsUsEquities200Response**](GetAnalystRatingsUsEquities200Response.md)

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


## getEarningsEstimate

> GetEarningsEstimate200Response getEarningsEstimate(symbol, figi, isin, cusip, country, exchange)

Earnings estimate

The earnings estimate endpoint provides access to analysts\&#39; projected earnings per share (EPS) for a specific company, covering both upcoming quarterly and annual periods. This data is crucial for users who need to track and compare expected financial performance across different timeframes, aiding in the evaluation of a company\&#39;s future profitability.

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from '@twelvedata/twelvedata-node';
import type { GetEarningsEstimateRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AnalysisApi(config);

  const body = {
    // string | Filter by symbol (optional)
    symbol: AAPL,
    // string | The FIGI of an instrument for which data is requested. This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | The country where the instrument is traded, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
  } satisfies GetEarningsEstimateRequest;

  try {
    const data = await api.getEarningsEstimate(body);
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
| **figi** | `string` | The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |

### Return type

[**GetEarningsEstimate200Response**](GetEarningsEstimate200Response.md)

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


## getEpsRevisions

> GetEpsRevisions200Response getEpsRevisions(symbol, figi, isin, cusip, country, exchange)

EPS revisions

The EPS revisions endpoint provides updated analyst forecasts for a company\&#39;s earnings per share (EPS) on both a quarterly and annual basis. It delivers data on how these EPS predictions have changed over the past week and month, allowing users to track recent adjustments in analyst expectations. This endpoint is useful for monitoring shifts in market sentiment regarding a company\&#39;s financial performance.

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from '@twelvedata/twelvedata-node';
import type { GetEpsRevisionsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AnalysisApi(config);

  const body = {
    // string | Filter by symbol (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Filter by exchange name (optional)
    exchange: NASDAQ,
  } satisfies GetEpsRevisionsRequest;

  try {
    const data = await api.getEpsRevisions(body);
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
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |

### Return type

[**GetEpsRevisions200Response**](GetEpsRevisions200Response.md)

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


## getEpsTrend

> GetEpsTrend200Response getEpsTrend(symbol, figi, isin, cusip, country, exchange)

EPS trend

The EPS trend endpoint provides detailed historical data on Earnings Per Share (EPS) trends over specified periods. It returns a comprehensive breakdown of estimated EPS changes, allowing users to track and analyze the progression of a company\&#39;s earnings performance over time. This endpoint is ideal for users seeking to understand historical EPS fluctuations and assess financial growth patterns.

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from '@twelvedata/twelvedata-node';
import type { GetEpsTrendRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AnalysisApi(config);

  const body = {
    // string | Filter by symbol (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Filter by exchange name (optional)
    exchange: NASDAQ,
  } satisfies GetEpsTrendRequest;

  try {
    const data = await api.getEpsTrend(body);
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
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |

### Return type

[**GetEpsTrend200Response**](GetEpsTrend200Response.md)

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


## getGrowthEstimates

> GetGrowthEstimates200Response getGrowthEstimates(symbol, figi, isin, cusip, country, exchange)

Growth estimates

The growth estimates endpoint provides consensus analyst projections on a company\&#39;s growth rates over various timeframes. It aggregates and averages estimates from multiple analysts, focusing on key financial metrics such as earnings per share and revenue. This endpoint is useful for obtaining a comprehensive view of expected company performance based on expert analysis.

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from '@twelvedata/twelvedata-node';
import type { GetGrowthEstimatesRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AnalysisApi(config);

  const body = {
    // string | Filter by symbol (optional)
    symbol: AAPL,
    // string | The FIGI of an instrument for which data is requested. This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | The country where the instrument is traded, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Exchange where instrument is traded (optional)
    exchange: NASDAQ,
  } satisfies GetGrowthEstimatesRequest;

  try {
    const data = await api.getGrowthEstimates(body);
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
| **figi** | `string` | The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Exchange where instrument is traded | [Optional] [Defaults to `undefined`] |

### Return type

[**GetGrowthEstimates200Response**](GetGrowthEstimates200Response.md)

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


## getPriceTarget

> GetPriceTarget200Response getPriceTarget(symbol, figi, isin, cusip, country, exchange)

Price target

The price target endpoint provides detailed projections of a security\&#39;s future price as estimated by financial analysts. It returns data including the high, low, and average price targets. This endpoint is useful for users seeking to understand potential future valuations of specific securities based on expert analysis.

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from '@twelvedata/twelvedata-node';
import type { GetPriceTargetRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AnalysisApi(config);

  const body = {
    // string | Filter by symbol (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Filter by exchange name (optional)
    exchange: NASDAQ,
  } satisfies GetPriceTargetRequest;

  try {
    const data = await api.getPriceTarget(body);
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
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |

### Return type

[**GetPriceTarget200Response**](GetPriceTarget200Response.md)

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


## getRecommendations

> GetRecommendations200Response getRecommendations(symbol, figi, isin, cusip, country, exchange)

Recommendations

The recommendations endpoint provides a summary of analyst opinions for a specific stock, delivering an average recommendation categorized as Strong Buy, Buy, Hold, or Sell. It also includes a numerical recommendation score, offering a quick overview of market sentiment based on expert analysis.

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from '@twelvedata/twelvedata-node';
import type { GetRecommendationsRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AnalysisApi(config);

  const body = {
    // string | Filter by symbol (optional)
    symbol: AAPL,
    // string | The FIGI of an instrument for which data is requested. This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | The country where the instrument is traded, e.g., `United States` or `US` (optional)
    country: United States,
    // string | The exchange name where the instrument is traded, e.g., `Nasdaq`, `NSE`. (optional)
    exchange: NASDAQ,
  } satisfies GetRecommendationsRequest;

  try {
    const data = await api.getRecommendations(body);
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
| **figi** | `string` | The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above. | [Optional] [Defaults to `undefined`] |
| **isin** | `string` | Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **cusip** | `string` | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section | [Optional] [Defaults to `undefined`] |
| **country** | `string` | The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | The exchange name where the instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;NSE&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetRecommendations200Response**](GetRecommendations200Response.md)

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


## getRevenueEstimate

> GetRevenueEstimate200Response getRevenueEstimate(symbol, figi, isin, cusip, country, exchange, dp)

Revenue estimate

The revenue estimate endpoint provides a company\&#39;s projected quarterly and annual revenue figures based on analysts\&#39; estimates. This data is useful for users seeking insights into expected company performance, allowing them to compare forecasted sales with historical data or other companies\&#39; estimates.

### Example

```ts
import {
  Configuration,
  AnalysisApi,
} from '@twelvedata/twelvedata-node';
import type { GetRevenueEstimateRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AnalysisApi(config);

  const body = {
    // string | Filter by symbol (optional)
    symbol: AAPL,
    // string | Filter by financial instrument global identifier (FIGI). This parameter is available on the <a href=\"https://twelvedata.com/pricing\">Ultra</a> plan (individual) and the <a href=\"https://twelvedata.com/pricing-business\">Enterprise</a> plan (business) and above. (optional)
    figi: BBG000B9Y5X2,
    // string | Filter by international securities identification number (ISIN). ISIN access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    isin: US0378331005,
    // string | The CUSIP of an instrument for which data is requested. CUSIP access is activating in the <a href=\"https://twelvedata.com/account/add-ons\">Data add-ons</a> section (optional)
    cusip: 594918104,
    // string | Filter by country name or alpha code, e.g., `United States` or `US` (optional)
    country: United States,
    // string | Filter by exchange name (optional)
    exchange: NASDAQ,
    // number | Number of decimal places for floating values. Should be in range [0,11] inclusive (optional)
    dp: 789,
  } satisfies GetRevenueEstimateRequest;

  try {
    const data = await api.getRevenueEstimate(body);
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
| **country** | `string` | Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60; | [Optional] [Defaults to `undefined`] |
| **exchange** | `string` | Filter by exchange name | [Optional] [Defaults to `undefined`] |
| **dp** | `number` | Number of decimal places for floating values. Should be in range [0,11] inclusive | [Optional] [Defaults to `5`] |

### Return type

[**GetRevenueEstimate200Response**](GetRevenueEstimate200Response.md)

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

