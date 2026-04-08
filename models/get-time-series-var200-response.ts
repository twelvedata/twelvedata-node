/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesVar200ResponseMeta } from "./get-time-series-var200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesVar200ResponseValuesInner } from "./get-time-series-var200-response-values-inner";

export interface GetTimeSeriesVar200Response {
  meta?: GetTimeSeriesVar200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesVar200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
