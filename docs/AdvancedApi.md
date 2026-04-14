# AdvancedApi

All URIs are relative to *https://api.twelvedata.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**advanced**](AdvancedApi.md#advanced) | **POST** /batch | Batches |
| [**getApiUsage**](AdvancedApi.md#getapiusage) | **GET** /api_usage | API usage |



## advanced

> Advanced200Response advanced(key)

Batches

The batch request endpoint allows users to request data for multiple financial instruments, time intervals, and data types simultaneously. This endpoint is useful for efficiently gathering diverse financial data in a single operation, reducing the need for multiple individual requests. Errors in specific requests do not affect the processing of others, and each error is reported separately, enabling easy troubleshooting.  ### Request body Only JSON &#x60;POST&#x60; requests are supported. The request content structure consists of key-value items. The key is a unique request ID. The value is requested url.  ### Response The response contains key-value data. The key is a unique request ID. The value is returned data.  ### API credits &lt;ul&gt; &lt;li&gt;The number of concurrent requests is limited by your subscription plan.&lt;/li&gt; &lt;li&gt;Credits are consumed per requested endpoint, with the total usage equal to the sum of individual requests in the batch.&lt;/li&gt; &lt;li&gt;If the requested data exceeds your available credits, only partial data will be returned asynchronously until your quota is exhausted.&lt;/li&gt; &lt;li&gt;If one or more requests in the batch contain errors (e.g., invalid symbols or unsupported intervals), it will not affect the successful processing of other requests. Errors are reported individually within the response, allowing you to identify and correct specific issues without impacting the entire batch.&lt;/li&gt; &lt;/ul&gt;

### Example

```ts
import {
  Configuration,
  AdvancedApi,
} from '@twelvedata/twelvedata-node';
import type { AdvancedRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AdvancedApi(config);

  const body = {
    // { [key: string]: AdvancedRequestValue; } | Map of requests (optional)
    key: Object,
  } satisfies AdvancedRequest;

  try {
    const data = await api.advanced(body);
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
| **key** | `{ [key: string]: AdvancedRequestValue; }` | Map of requests | [Optional] |

### Return type

[**Advanced200Response**](Advanced200Response.md)

### Authorization

[authorizationHeader](../README.md#authorizationHeader)

### HTTP request headers

- **Content-Type**: `application/json`, `application/xml`
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


## getApiUsage

> GetApiUsage200Response getApiUsage(format, delimiter, timezone)

API usage

The API Usage endpoint provides detailed information on your current API usage statistics. It returns data such as the number of requests made, remaining requests, and the reset time for your usage limits. This endpoint is essential for monitoring and managing your API consumption to ensure you stay within your allocated limits.

### Example

```ts
import {
  Configuration,
  AdvancedApi,
} from '@twelvedata/twelvedata-node';
import type { GetApiUsageRequest } from '@twelvedata/twelvedata-node';

async function example() {
  console.log("🚀 Testing @twelvedata/twelvedata-node SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: authorizationHeader
    apiKey: "YOUR API KEY",
  });
  const api = new AdvancedApi(config);

  const body = {
    // FormatEnum | Output format (optional)
    format: ...,
    // string | Specify the delimiter used when downloading the CSV file (optional)
    delimiter: delimiter_example,
    // string | Timezone at which output datetime will be displayed. Supports: <ul> <li>1. <code>UTC</code> for datetime at universal UTC standard</li> <li>2. Timezone name according to the IANA Time Zone Database. E.g. <code>America/New_York</code>, <code>Asia/Singapore</code>. Full list of timezones can be found <a href=\"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\" target=\"blank\">here</a>.</li> </ul> <i>Take note that the IANA Timezone name is case-sensitive</i> (optional)
    timezone: timezone_example,
  } satisfies GetApiUsageRequest;

  try {
    const data = await api.getApiUsage(body);
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
| **format** | `FormatEnum` | Output format | [Optional] [Defaults to `undefined`] [Enum: JSON, CSV] |
| **delimiter** | `string` | Specify the delimiter used when downloading the CSV file | [Optional] [Defaults to `&#39;;&#39;`] |
| **timezone** | `string` | Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;2. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt; | [Optional] [Defaults to `&#39;UTC&#39;`] |

### Return type

[**GetApiUsage200Response**](GetApiUsage200Response.md)

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

