/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeries200ResponseMeta } from "./get-time-series200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { TimeSeriesItem } from "./time-series-item";

export interface GetTimeSeries200Response {
  meta?: GetTimeSeries200ResponseMeta;
  /**
   * List of time series data points
   */
  values?: Array<TimeSeriesItem>;
  /**
   * Response status
   */
  status?: string;
}
