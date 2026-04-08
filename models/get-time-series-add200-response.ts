/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAdd200ResponseMeta } from "./get-time-series-add200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAdd200ResponseValuesInner } from "./get-time-series-add200-response-values-inner";

export interface GetTimeSeriesAdd200Response {
  meta?: GetTimeSeriesAdd200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesAdd200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
