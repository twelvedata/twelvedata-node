/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesExp200ResponseMeta } from "./get-time-series-exp200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesExp200ResponseValuesInner } from "./get-time-series-exp200-response-values-inner";

export interface GetTimeSeriesExp200Response {
  meta?: GetTimeSeriesExp200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesExp200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
