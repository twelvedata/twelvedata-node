/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesVwap200ResponseMeta } from "./get-time-series-vwap200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesVwap200ResponseValuesInner } from "./get-time-series-vwap200-response-values-inner";

export interface GetTimeSeriesVwap200Response {
  meta?: GetTimeSeriesVwap200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesVwap200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
