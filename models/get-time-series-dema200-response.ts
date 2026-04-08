/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesDema200ResponseMeta } from "./get-time-series-dema200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesDema200ResponseValuesInner } from "./get-time-series-dema200-response-values-inner";

export interface GetTimeSeriesDema200Response {
  meta?: GetTimeSeriesDema200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesDema200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
