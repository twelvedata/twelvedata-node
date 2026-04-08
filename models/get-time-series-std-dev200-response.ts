/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesStdDev200ResponseMeta } from "./get-time-series-std-dev200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesStdDev200ResponseValuesInner } from "./get-time-series-std-dev200-response-values-inner";

export interface GetTimeSeriesStdDev200Response {
  meta?: GetTimeSeriesStdDev200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesStdDev200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
