/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHtSine200ResponseMeta } from "./get-time-series-ht-sine200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHtSine200ResponseValuesInner } from "./get-time-series-ht-sine200-response-values-inner";

export interface GetTimeSeriesHtSine200Response {
  meta?: GetTimeSeriesHtSine200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesHtSine200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
