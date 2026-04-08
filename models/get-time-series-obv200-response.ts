/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesObv200ResponseMeta } from "./get-time-series-obv200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesObv200ResponseValuesInner } from "./get-time-series-obv200-response-values-inner";

export interface GetTimeSeriesObv200Response {
  meta?: GetTimeSeriesObv200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesObv200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
