/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesPlusDM200ResponseMeta } from "./get-time-series-plus-dm200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesPlusDM200ResponseValuesInner } from "./get-time-series-plus-dm200-response-values-inner";

export interface GetTimeSeriesPlusDM200Response {
  meta?: GetTimeSeriesPlusDM200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesPlusDM200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
