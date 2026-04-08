/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHeikinashiCandles200ResponseMeta } from "./get-time-series-heikinashi-candles200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHeikinashiCandles200ResponseValuesInner } from "./get-time-series-heikinashi-candles200-response-values-inner";

export interface GetTimeSeriesHeikinashiCandles200Response {
  meta?: GetTimeSeriesHeikinashiCandles200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesHeikinashiCandles200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
