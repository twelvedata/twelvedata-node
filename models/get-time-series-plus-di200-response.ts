/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesPlusDI200ResponseMeta } from "./get-time-series-plus-di200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesPlusDI200ResponseValuesInner } from "./get-time-series-plus-di200-response-values-inner";

export interface GetTimeSeriesPlusDI200Response {
  meta?: GetTimeSeriesPlusDI200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesPlusDI200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
