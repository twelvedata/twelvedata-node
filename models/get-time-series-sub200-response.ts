/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSub200ResponseMeta } from "./get-time-series-sub200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSub200ResponseValuesInner } from "./get-time-series-sub200-response-values-inner";

export interface GetTimeSeriesSub200Response {
  meta?: GetTimeSeriesSub200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesSub200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
