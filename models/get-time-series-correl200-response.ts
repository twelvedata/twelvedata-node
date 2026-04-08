/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCorrel200ResponseMeta } from "./get-time-series-correl200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCorrel200ResponseValuesInner } from "./get-time-series-correl200-response-values-inner";

export interface GetTimeSeriesCorrel200Response {
  meta?: GetTimeSeriesCorrel200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesCorrel200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
