/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCci200ResponseMeta } from "./get-time-series-cci200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCci200ResponseValuesInner } from "./get-time-series-cci200-response-values-inner";

export interface GetTimeSeriesCci200Response {
  meta?: GetTimeSeriesCci200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesCci200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
