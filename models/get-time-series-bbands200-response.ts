/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesBBands200ResponseMeta } from "./get-time-series-bbands200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesBBands200ResponseValuesInner } from "./get-time-series-bbands200-response-values-inner";

export interface GetTimeSeriesBBands200Response {
  meta?: GetTimeSeriesBBands200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesBBands200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
