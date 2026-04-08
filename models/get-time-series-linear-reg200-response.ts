/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesLinearReg200ResponseMeta } from "./get-time-series-linear-reg200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesLinearReg200ResponseValuesInner } from "./get-time-series-linear-reg200-response-values-inner";

export interface GetTimeSeriesLinearReg200Response {
  meta?: GetTimeSeriesLinearReg200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesLinearReg200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
