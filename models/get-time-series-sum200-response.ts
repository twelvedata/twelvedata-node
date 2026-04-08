/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSum200ResponseMeta } from "./get-time-series-sum200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSum200ResponseValuesInner } from "./get-time-series-sum200-response-values-inner";

export interface GetTimeSeriesSum200Response {
  meta?: GetTimeSeriesSum200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesSum200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
