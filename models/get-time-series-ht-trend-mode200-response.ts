/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHtTrendMode200ResponseMeta } from "./get-time-series-ht-trend-mode200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHtTrendMode200ResponseValuesInner } from "./get-time-series-ht-trend-mode200-response-values-inner";

export interface GetTimeSeriesHtTrendMode200Response {
  meta?: GetTimeSeriesHtTrendMode200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesHtTrendMode200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
