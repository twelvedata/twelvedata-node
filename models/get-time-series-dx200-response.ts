/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesDx200ResponseMeta } from "./get-time-series-dx200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesDx200ResponseValuesInner } from "./get-time-series-dx200-response-values-inner";

export interface GetTimeSeriesDx200Response {
  meta?: GetTimeSeriesDx200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesDx200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
