/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesPpo200ResponseMeta } from "./get-time-series-ppo200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesPpo200ResponseValuesInner } from "./get-time-series-ppo200-response-values-inner";

export interface GetTimeSeriesPpo200Response {
  meta?: GetTimeSeriesPpo200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesPpo200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
