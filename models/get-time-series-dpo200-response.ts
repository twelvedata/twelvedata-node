/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesDpo200ResponseMeta } from "./get-time-series-dpo200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesDpo200ResponseValuesInner } from "./get-time-series-dpo200-response-values-inner";

export interface GetTimeSeriesDpo200Response {
  meta?: GetTimeSeriesDpo200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesDpo200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
