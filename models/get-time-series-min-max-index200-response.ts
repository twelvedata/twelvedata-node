/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMinMaxIndex200ResponseMeta } from "./get-time-series-min-max-index200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMinMaxIndex200ResponseValuesInner } from "./get-time-series-min-max-index200-response-values-inner";

export interface GetTimeSeriesMinMaxIndex200Response {
  meta?: GetTimeSeriesMinMaxIndex200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMinMaxIndex200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
