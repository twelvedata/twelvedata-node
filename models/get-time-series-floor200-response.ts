/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesFloor200ResponseMeta } from "./get-time-series-floor200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesFloor200ResponseValuesInner } from "./get-time-series-floor200-response-values-inner";

export interface GetTimeSeriesFloor200Response {
  meta?: GetTimeSeriesFloor200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesFloor200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
