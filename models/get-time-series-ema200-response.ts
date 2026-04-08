/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesEma200ResponseMeta } from "./get-time-series-ema200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesEma200ResponseValuesInner } from "./get-time-series-ema200-response-values-inner";

export interface GetTimeSeriesEma200Response {
  meta?: GetTimeSeriesEma200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesEma200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
