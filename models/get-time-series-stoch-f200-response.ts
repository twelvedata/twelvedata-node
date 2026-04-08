/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesStochF200ResponseMeta } from "./get-time-series-stoch-f200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesStochF200ResponseValuesInner } from "./get-time-series-stoch-f200-response-values-inner";

export interface GetTimeSeriesStochF200Response {
  meta?: GetTimeSeriesStochF200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesStochF200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
