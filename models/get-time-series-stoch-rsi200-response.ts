/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesStochRsi200ResponseMeta } from "./get-time-series-stoch-rsi200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesStochRsi200ResponseValuesInner } from "./get-time-series-stoch-rsi200-response-values-inner";

export interface GetTimeSeriesStochRsi200Response {
  meta?: GetTimeSeriesStochRsi200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesStochRsi200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
