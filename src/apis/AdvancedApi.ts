/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

import * as runtime from "../runtime";
import type {
  Advanced200Response,
  AdvancedRequestValue,
  ApiBadRequestErrorResponseBody,
  ApiForbiddenErrorResponseBody,
  ApiInternalServerErrorResponseBody,
  ApiNotFoundErrorResponseBody,
  ApiParameterTooLongErrorResponseBody,
  ApiTooManyRequestsErrorResponseBody,
  ApiUnauthorizedErrorResponseBody,
  FormatEnum,
  GetApiUsage200Response,
} from "../models/index";
import {
  Advanced200ResponseFromJSON,
  Advanced200ResponseToJSON,
  AdvancedRequestValueFromJSON,
  AdvancedRequestValueToJSON,
  ApiBadRequestErrorResponseBodyFromJSON,
  ApiBadRequestErrorResponseBodyToJSON,
  ApiForbiddenErrorResponseBodyFromJSON,
  ApiForbiddenErrorResponseBodyToJSON,
  ApiInternalServerErrorResponseBodyFromJSON,
  ApiInternalServerErrorResponseBodyToJSON,
  ApiNotFoundErrorResponseBodyFromJSON,
  ApiNotFoundErrorResponseBodyToJSON,
  ApiParameterTooLongErrorResponseBodyFromJSON,
  ApiParameterTooLongErrorResponseBodyToJSON,
  ApiTooManyRequestsErrorResponseBodyFromJSON,
  ApiTooManyRequestsErrorResponseBodyToJSON,
  ApiUnauthorizedErrorResponseBodyFromJSON,
  ApiUnauthorizedErrorResponseBodyToJSON,
  FormatEnumFromJSON,
  FormatEnumToJSON,
  GetApiUsage200ResponseFromJSON,
  GetApiUsage200ResponseToJSON,
} from "../models/index";

export interface AdvancedRequest {
  key?: { [key: string]: AdvancedRequestValue };
}

export interface GetApiUsageRequest {
  format?: FormatEnum;
  delimiter?: string;
  timezone?: string;
}

/**
 *
 */
export class AdvancedApi extends runtime.BaseAPI {
  /**
   * The batch request endpoint allows users to request data for multiple financial instruments, time intervals, and data types simultaneously. This endpoint is useful for efficiently gathering diverse financial data in a single operation, reducing the need for multiple individual requests. Errors in specific requests do not affect the processing of others, and each error is reported separately, enabling easy troubleshooting.  ### Request body Only JSON `POST` requests are supported. The request content structure consists of key-value items. The key is a unique request ID. The value is requested url.  ### Response The response contains key-value data. The key is a unique request ID. The value is returned data.  ### API credits <ul> <li>The number of concurrent requests is limited by your subscription plan.</li> <li>Credits are consumed per requested endpoint, with the total usage equal to the sum of individual requests in the batch.</li> <li>If the requested data exceeds your available credits, only partial data will be returned asynchronously until your quota is exhausted.</li> <li>If one or more requests in the batch contain errors (e.g., invalid symbols or unsupported intervals), it will not affect the successful processing of other requests. Errors are reported individually within the response, allowing you to identify and correct specific issues without impacting the entire batch.</li> </ul>
   * Batches
   */
  async advancedRaw(
    requestParameters: AdvancedRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Advanced200Response>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/batch`;

    const response = await this.request(
      {
        path: urlPath,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters["key"],
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      Advanced200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The batch request endpoint allows users to request data for multiple financial instruments, time intervals, and data types simultaneously. This endpoint is useful for efficiently gathering diverse financial data in a single operation, reducing the need for multiple individual requests. Errors in specific requests do not affect the processing of others, and each error is reported separately, enabling easy troubleshooting.  ### Request body Only JSON `POST` requests are supported. The request content structure consists of key-value items. The key is a unique request ID. The value is requested url.  ### Response The response contains key-value data. The key is a unique request ID. The value is returned data.  ### API credits <ul> <li>The number of concurrent requests is limited by your subscription plan.</li> <li>Credits are consumed per requested endpoint, with the total usage equal to the sum of individual requests in the batch.</li> <li>If the requested data exceeds your available credits, only partial data will be returned asynchronously until your quota is exhausted.</li> <li>If one or more requests in the batch contain errors (e.g., invalid symbols or unsupported intervals), it will not affect the successful processing of other requests. Errors are reported individually within the response, allowing you to identify and correct specific issues without impacting the entire batch.</li> </ul>
   * Batches
   */
  async advanced(
    requestParameters: AdvancedRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Advanced200Response> {
    const response = await this.advancedRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The API Usage endpoint provides detailed information on your current API usage statistics. It returns data such as the number of requests made, remaining requests, and the reset time for your usage limits. This endpoint is essential for monitoring and managing your API consumption to ensure you stay within your allocated limits.
   * API usage
   */
  async getApiUsageRaw(
    requestParameters: GetApiUsageRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetApiUsage200Response>> {
    const queryParameters: any = {};

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/api_usage`;

    const response = await this.request(
      {
        path: urlPath,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetApiUsage200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The API Usage endpoint provides detailed information on your current API usage statistics. It returns data such as the number of requests made, remaining requests, and the reset time for your usage limits. This endpoint is essential for monitoring and managing your API consumption to ensure you stay within your allocated limits.
   * API usage
   */
  async getApiUsage(
    requestParameters: GetApiUsageRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetApiUsage200Response> {
    const response = await this.getApiUsageRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
