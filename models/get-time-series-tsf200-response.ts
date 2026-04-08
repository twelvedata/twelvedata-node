/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesTsf200ResponseMeta } from "./get-time-series-tsf200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesTsf200ResponseValuesInner } from "./get-time-series-tsf200-response-values-inner";

export interface GetTimeSeriesTsf200Response {
  meta?: GetTimeSeriesTsf200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesTsf200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
