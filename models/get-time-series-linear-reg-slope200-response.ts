/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesLinearRegSlope200ResponseMeta } from "./get-time-series-linear-reg-slope200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesLinearRegSlope200ResponseValuesInner } from "./get-time-series-linear-reg-slope200-response-values-inner";

export interface GetTimeSeriesLinearRegSlope200Response {
  meta?: GetTimeSeriesLinearRegSlope200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesLinearRegSlope200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
