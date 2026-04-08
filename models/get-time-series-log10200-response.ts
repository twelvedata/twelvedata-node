/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesLog10200ResponseMeta } from "./get-time-series-log10200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesLog10200ResponseValuesInner } from "./get-time-series-log10200-response-values-inner";

export interface GetTimeSeriesLog10200Response {
  meta?: GetTimeSeriesLog10200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesLog10200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
