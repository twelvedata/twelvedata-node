/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesPercentB200ResponseMeta } from "./get-time-series-percent-b200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesPercentB200ResponseValuesInner } from "./get-time-series-percent-b200-response-values-inner";

export interface GetTimeSeriesPercentB200Response {
  meta?: GetTimeSeriesPercentB200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesPercentB200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
