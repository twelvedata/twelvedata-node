/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAdx200ResponseMeta } from "./get-time-series-adx200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAdx200ResponseValuesInner } from "./get-time-series-adx200-response-values-inner";

export interface GetTimeSeriesAdx200Response {
  meta?: GetTimeSeriesAdx200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesAdx200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
