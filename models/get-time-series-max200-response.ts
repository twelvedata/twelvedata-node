/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMax200ResponseMeta } from "./get-time-series-max200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMax200ResponseValuesInner } from "./get-time-series-max200-response-values-inner";

export interface GetTimeSeriesMax200Response {
  meta?: GetTimeSeriesMax200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMax200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
