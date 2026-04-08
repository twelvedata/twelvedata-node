/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesLinearRegAngle200ResponseMeta } from "./get-time-series-linear-reg-angle200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesLinearRegAngle200ResponseValuesInner } from "./get-time-series-linear-reg-angle200-response-values-inner";

export interface GetTimeSeriesLinearRegAngle200Response {
  meta?: GetTimeSeriesLinearRegAngle200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesLinearRegAngle200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
