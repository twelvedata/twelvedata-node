/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
  replaceWithSerializableTypeIfNeeded,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  type RequestArgs,
  BaseAPI,
  RequiredError,
  operationServerMap,
} from "../base";
// @ts-ignore
import type { Advanced200Response } from "../models";
// @ts-ignore
import type { AdvancedRequestValue } from "../models";
// @ts-ignore
import type { FormatEnum } from "../models";
// @ts-ignore
import type { GetApiUsage200Response } from "../models";
/**
 * AdvancedApi - axios parameter creator
 */
export const AdvancedApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * The batch request endpoint allows users to request data for multiple financial instruments, time intervals, and data types simultaneously. This endpoint is useful for efficiently gathering diverse financial data in a single operation, reducing the need for multiple individual requests. Errors in specific requests do not affect the processing of others, and each error is reported separately, enabling easy troubleshooting.  ### Request body Only JSON `POST` requests are supported. The request content structure consists of key-value items. The key is a unique request ID. The value is requested url.  ### Response The response contains key-value data. The key is a unique request ID. The value is returned data.  ### API credits <ul> <li>The number of concurrent requests is limited by your subscription plan.</li> <li>Credits are consumed per requested endpoint, with the total usage equal to the sum of individual requests in the batch.</li> <li>If the requested data exceeds your available credits, only partial data will be returned asynchronously until your quota is exhausted.</li> <li>If one or more requests in the batch contain errors (e.g., invalid symbols or unsupported intervals), it will not affect the successful processing of other requests. Errors are reported individually within the response, allowing you to identify and correct specific issues without impacting the entire batch.</li> </ul>
     * @summary Batches
     * @param {{ [key: string]: AdvancedRequestValue; }} [key] Map of requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    advanced: async (
      key?: { [key: string]: AdvancedRequestValue },
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/batch`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorizationHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "Authorization",
        configuration,
      );

      localVarHeaderParameter["Content-Type"] = "application/json";
      localVarHeaderParameter["Accept"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        key,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The API Usage endpoint provides detailed information on your current API usage statistics. It returns data such as the number of requests made, remaining requests, and the reset time for your usage limits. This endpoint is essential for monitoring and managing your API consumption to ensure you stay within your allocated limits.
     * @summary API usage
     * @param {FormatEnum} [format] Output format
     * @param {string} [delimiter] Specify the delimiter used when downloading the CSV file
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;2. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiUsage: async (
      format?: FormatEnum,
      delimiter?: string,
      timezone?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/api_usage`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorizationHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "Authorization",
        configuration,
      );

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
      }

      if (timezone !== undefined) {
        localVarQueryParameter["timezone"] = timezone;
      }

      localVarHeaderParameter["Accept"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * AdvancedApi - functional programming interface
 */
export const AdvancedApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AdvancedApiAxiosParamCreator(configuration);
  return {
    /**
     * The batch request endpoint allows users to request data for multiple financial instruments, time intervals, and data types simultaneously. This endpoint is useful for efficiently gathering diverse financial data in a single operation, reducing the need for multiple individual requests. Errors in specific requests do not affect the processing of others, and each error is reported separately, enabling easy troubleshooting.  ### Request body Only JSON `POST` requests are supported. The request content structure consists of key-value items. The key is a unique request ID. The value is requested url.  ### Response The response contains key-value data. The key is a unique request ID. The value is returned data.  ### API credits <ul> <li>The number of concurrent requests is limited by your subscription plan.</li> <li>Credits are consumed per requested endpoint, with the total usage equal to the sum of individual requests in the batch.</li> <li>If the requested data exceeds your available credits, only partial data will be returned asynchronously until your quota is exhausted.</li> <li>If one or more requests in the batch contain errors (e.g., invalid symbols or unsupported intervals), it will not affect the successful processing of other requests. Errors are reported individually within the response, allowing you to identify and correct specific issues without impacting the entire batch.</li> </ul>
     * @summary Batches
     * @param {{ [key: string]: AdvancedRequestValue; }} [key] Map of requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async advanced(
      key?: { [key: string]: AdvancedRequestValue },
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Advanced200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.advanced(
        key,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AdvancedApi.advanced"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The API Usage endpoint provides detailed information on your current API usage statistics. It returns data such as the number of requests made, remaining requests, and the reset time for your usage limits. This endpoint is essential for monitoring and managing your API consumption to ensure you stay within your allocated limits.
     * @summary API usage
     * @param {FormatEnum} [format] Output format
     * @param {string} [delimiter] Specify the delimiter used when downloading the CSV file
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;2. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getApiUsage(
      format?: FormatEnum,
      delimiter?: string,
      timezone?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetApiUsage200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getApiUsage(
        format,
        delimiter,
        timezone,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AdvancedApi.getApiUsage"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * AdvancedApi - factory interface
 */
export const AdvancedApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AdvancedApiFp(configuration);
  return {
    /**
     * The batch request endpoint allows users to request data for multiple financial instruments, time intervals, and data types simultaneously. This endpoint is useful for efficiently gathering diverse financial data in a single operation, reducing the need for multiple individual requests. Errors in specific requests do not affect the processing of others, and each error is reported separately, enabling easy troubleshooting.  ### Request body Only JSON `POST` requests are supported. The request content structure consists of key-value items. The key is a unique request ID. The value is requested url.  ### Response The response contains key-value data. The key is a unique request ID. The value is returned data.  ### API credits <ul> <li>The number of concurrent requests is limited by your subscription plan.</li> <li>Credits are consumed per requested endpoint, with the total usage equal to the sum of individual requests in the batch.</li> <li>If the requested data exceeds your available credits, only partial data will be returned asynchronously until your quota is exhausted.</li> <li>If one or more requests in the batch contain errors (e.g., invalid symbols or unsupported intervals), it will not affect the successful processing of other requests. Errors are reported individually within the response, allowing you to identify and correct specific issues without impacting the entire batch.</li> </ul>
     * @summary Batches
     * @param {AdvancedApiAdvancedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    advanced(
      requestParameters: AdvancedApiAdvancedRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Advanced200Response> {
      return localVarFp
        .advanced(requestParameters.key, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * The API Usage endpoint provides detailed information on your current API usage statistics. It returns data such as the number of requests made, remaining requests, and the reset time for your usage limits. This endpoint is essential for monitoring and managing your API consumption to ensure you stay within your allocated limits.
     * @summary API usage
     * @param {AdvancedApiGetApiUsageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getApiUsage(
      requestParameters: AdvancedApiGetApiUsageRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetApiUsage200Response> {
      return localVarFp
        .getApiUsage(
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.timezone,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * AdvancedApi - interface
 */
export interface AdvancedApiInterface {
  /**
   * The batch request endpoint allows users to request data for multiple financial instruments, time intervals, and data types simultaneously. This endpoint is useful for efficiently gathering diverse financial data in a single operation, reducing the need for multiple individual requests. Errors in specific requests do not affect the processing of others, and each error is reported separately, enabling easy troubleshooting.  ### Request body Only JSON `POST` requests are supported. The request content structure consists of key-value items. The key is a unique request ID. The value is requested url.  ### Response The response contains key-value data. The key is a unique request ID. The value is returned data.  ### API credits <ul> <li>The number of concurrent requests is limited by your subscription plan.</li> <li>Credits are consumed per requested endpoint, with the total usage equal to the sum of individual requests in the batch.</li> <li>If the requested data exceeds your available credits, only partial data will be returned asynchronously until your quota is exhausted.</li> <li>If one or more requests in the batch contain errors (e.g., invalid symbols or unsupported intervals), it will not affect the successful processing of other requests. Errors are reported individually within the response, allowing you to identify and correct specific issues without impacting the entire batch.</li> </ul>
   * @summary Batches
   * @param {AdvancedApiAdvancedRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  advanced(
    requestParameters?: AdvancedApiAdvancedRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<Advanced200Response>;

  /**
   * The API Usage endpoint provides detailed information on your current API usage statistics. It returns data such as the number of requests made, remaining requests, and the reset time for your usage limits. This endpoint is essential for monitoring and managing your API consumption to ensure you stay within your allocated limits.
   * @summary API usage
   * @param {AdvancedApiGetApiUsageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getApiUsage(
    requestParameters?: AdvancedApiGetApiUsageRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetApiUsage200Response>;
}

/**
 * Request parameters for advanced operation in AdvancedApi.
 */
export interface AdvancedApiAdvancedRequest {
  /**
   * Map of requests
   */
  readonly key?: { [key: string]: AdvancedRequestValue };
}

/**
 * Request parameters for getApiUsage operation in AdvancedApi.
 */
export interface AdvancedApiGetApiUsageRequest {
  /**
   * Output format
   */
  readonly format?: FormatEnum;

  /**
   * Specify the delimiter used when downloading the CSV file
   */
  readonly delimiter?: string;

  /**
   * Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;2. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
   */
  readonly timezone?: string;
}

/**
 * AdvancedApi - object-oriented interface
 */
export class AdvancedApi extends BaseAPI implements AdvancedApiInterface {
  /**
   * The batch request endpoint allows users to request data for multiple financial instruments, time intervals, and data types simultaneously. This endpoint is useful for efficiently gathering diverse financial data in a single operation, reducing the need for multiple individual requests. Errors in specific requests do not affect the processing of others, and each error is reported separately, enabling easy troubleshooting.  ### Request body Only JSON `POST` requests are supported. The request content structure consists of key-value items. The key is a unique request ID. The value is requested url.  ### Response The response contains key-value data. The key is a unique request ID. The value is returned data.  ### API credits <ul> <li>The number of concurrent requests is limited by your subscription plan.</li> <li>Credits are consumed per requested endpoint, with the total usage equal to the sum of individual requests in the batch.</li> <li>If the requested data exceeds your available credits, only partial data will be returned asynchronously until your quota is exhausted.</li> <li>If one or more requests in the batch contain errors (e.g., invalid symbols or unsupported intervals), it will not affect the successful processing of other requests. Errors are reported individually within the response, allowing you to identify and correct specific issues without impacting the entire batch.</li> </ul>
   * @summary Batches
   * @param {AdvancedApiAdvancedRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public advanced(
    requestParameters: AdvancedApiAdvancedRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AdvancedApiFp(this.configuration)
      .advanced(requestParameters.key, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The API Usage endpoint provides detailed information on your current API usage statistics. It returns data such as the number of requests made, remaining requests, and the reset time for your usage limits. This endpoint is essential for monitoring and managing your API consumption to ensure you stay within your allocated limits.
   * @summary API usage
   * @param {AdvancedApiGetApiUsageRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getApiUsage(
    requestParameters: AdvancedApiGetApiUsageRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AdvancedApiFp(this.configuration)
      .getApiUsage(
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.timezone,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
