/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSarExt200ResponseMeta } from "./get-time-series-sar-ext200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSarExt200ResponseValuesInner } from "./get-time-series-sar-ext200-response-values-inner";

export interface GetTimeSeriesSarExt200Response {
  meta?: GetTimeSeriesSarExt200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesSarExt200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
