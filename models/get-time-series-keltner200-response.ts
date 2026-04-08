/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesKeltner200ResponseMeta } from "./get-time-series-keltner200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesKeltner200ResponseValuesInner } from "./get-time-series-keltner200-response-values-inner";

export interface GetTimeSeriesKeltner200Response {
  meta?: GetTimeSeriesKeltner200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesKeltner200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
