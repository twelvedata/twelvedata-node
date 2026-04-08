/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesDiv200ResponseMeta } from "./get-time-series-div200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesDiv200ResponseValuesInner } from "./get-time-series-div200-response-values-inner";

export interface GetTimeSeriesDiv200Response {
  meta?: GetTimeSeriesDiv200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesDiv200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
