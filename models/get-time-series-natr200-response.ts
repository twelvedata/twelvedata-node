/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesNatr200ResponseMeta } from "./get-time-series-natr200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesNatr200ResponseValuesInner } from "./get-time-series-natr200-response-values-inner";

export interface GetTimeSeriesNatr200Response {
  meta?: GetTimeSeriesNatr200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesNatr200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
