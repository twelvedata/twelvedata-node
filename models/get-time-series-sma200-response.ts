/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSma200ResponseMeta } from "./get-time-series-sma200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSma200ResponseValuesInner } from "./get-time-series-sma200-response-values-inner";

export interface GetTimeSeriesSma200Response {
  meta?: GetTimeSeriesSma200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesSma200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
