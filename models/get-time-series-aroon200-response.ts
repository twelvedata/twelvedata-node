/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAroon200ResponseMeta } from "./get-time-series-aroon200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAroon200ResponseValuesInner } from "./get-time-series-aroon200-response-values-inner";

export interface GetTimeSeriesAroon200Response {
  meta?: GetTimeSeriesAroon200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesAroon200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
