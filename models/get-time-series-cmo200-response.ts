/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCmo200ResponseMeta } from "./get-time-series-cmo200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCmo200ResponseValuesInner } from "./get-time-series-cmo200-response-values-inner";

export interface GetTimeSeriesCmo200Response {
  meta?: GetTimeSeriesCmo200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesCmo200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
