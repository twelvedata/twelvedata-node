/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesT3ma200ResponseMeta } from "./get-time-series-t3ma200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesT3ma200ResponseValuesInner } from "./get-time-series-t3ma200-response-values-inner";

export interface GetTimeSeriesT3ma200Response {
  meta?: GetTimeSeriesT3ma200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesT3ma200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
