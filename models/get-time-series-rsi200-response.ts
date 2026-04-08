/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesRsi200ResponseMeta } from "./get-time-series-rsi200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesRsi200ResponseValuesInner } from "./get-time-series-rsi200-response-values-inner";

export interface GetTimeSeriesRsi200Response {
  meta?: GetTimeSeriesRsi200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesRsi200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
