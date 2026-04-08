/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesTrima200ResponseMeta } from "./get-time-series-trima200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesTrima200ResponseValuesInner } from "./get-time-series-trima200-response-values-inner";

export interface GetTimeSeriesTrima200Response {
  meta?: GetTimeSeriesTrima200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesTrima200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
