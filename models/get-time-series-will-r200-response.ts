/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesWillR200ResponseMeta } from "./get-time-series-will-r200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesWillR200ResponseValuesInner } from "./get-time-series-will-r200-response-values-inner";

export interface GetTimeSeriesWillR200Response {
  meta?: GetTimeSeriesWillR200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesWillR200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
