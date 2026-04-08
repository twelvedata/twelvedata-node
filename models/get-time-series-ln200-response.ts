/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesLn200ResponseMeta } from "./get-time-series-ln200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesLn200ResponseValuesInner } from "./get-time-series-ln200-response-values-inner";

export interface GetTimeSeriesLn200Response {
  meta?: GetTimeSeriesLn200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesLn200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
