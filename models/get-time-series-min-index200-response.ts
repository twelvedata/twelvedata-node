/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMinIndex200ResponseMeta } from "./get-time-series-min-index200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMinIndex200ResponseValuesInner } from "./get-time-series-min-index200-response-values-inner";

export interface GetTimeSeriesMinIndex200Response {
  meta?: GetTimeSeriesMinIndex200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMinIndex200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
