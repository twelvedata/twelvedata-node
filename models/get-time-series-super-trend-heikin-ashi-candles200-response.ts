/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta } from "./get-time-series-super-trend-heikin-ashi-candles200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner } from "./get-time-series-super-trend-heikin-ashi-candles200-response-values-inner";

export interface GetTimeSeriesSuperTrendHeikinAshiCandles200Response {
  meta?: GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
