/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSuperTrend200ResponseMeta } from "./get-time-series-super-trend200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSuperTrend200ResponseValuesInner } from "./get-time-series-super-trend200-response-values-inner";

export interface GetTimeSeriesSuperTrend200Response {
  meta?: GetTimeSeriesSuperTrend200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesSuperTrend200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
