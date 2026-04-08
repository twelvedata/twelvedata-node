/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAdxr200ResponseMeta } from "./get-time-series-adxr200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAdxr200ResponseValuesInner } from "./get-time-series-adxr200-response-values-inner";

export interface GetTimeSeriesAdxr200Response {
  meta?: GetTimeSeriesAdxr200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesAdxr200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
