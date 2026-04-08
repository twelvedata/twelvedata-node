/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMom200ResponseMeta } from "./get-time-series-mom200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMom200ResponseValuesInner } from "./get-time-series-mom200-response-values-inner";

export interface GetTimeSeriesMom200Response {
  meta?: GetTimeSeriesMom200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMom200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
