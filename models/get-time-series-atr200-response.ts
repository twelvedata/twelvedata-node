/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAtr200ResponseMeta } from "./get-time-series-atr200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAtr200ResponseValuesInner } from "./get-time-series-atr200-response-values-inner";

export interface GetTimeSeriesAtr200Response {
  meta?: GetTimeSeriesAtr200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesAtr200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
