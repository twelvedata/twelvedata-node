/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesApo200ResponseMeta } from "./get-time-series-apo200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesApo200ResponseValuesInner } from "./get-time-series-apo200-response-values-inner";

export interface GetTimeSeriesApo200Response {
  meta?: GetTimeSeriesApo200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesApo200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
