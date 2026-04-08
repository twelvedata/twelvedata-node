/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHlc3200ResponseMeta } from "./get-time-series-hlc3200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHlc3200ResponseValuesInner } from "./get-time-series-hlc3200-response-values-inner";

export interface GetTimeSeriesHlc3200Response {
  meta?: GetTimeSeriesHlc3200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesHlc3200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
