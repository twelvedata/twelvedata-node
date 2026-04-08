/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMacdExt200ResponseMeta } from "./get-time-series-macd-ext200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMacdExt200ResponseValuesInner } from "./get-time-series-macd-ext200-response-values-inner";

export interface GetTimeSeriesMacdExt200Response {
  meta?: GetTimeSeriesMacdExt200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMacdExt200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
