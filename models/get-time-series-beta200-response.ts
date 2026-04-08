/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesBeta200ResponseMeta } from "./get-time-series-beta200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesBeta200ResponseValuesInner } from "./get-time-series-beta200-response-values-inner";

export interface GetTimeSeriesBeta200Response {
  meta?: GetTimeSeriesBeta200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesBeta200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
