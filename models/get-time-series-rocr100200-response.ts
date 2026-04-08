/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesRocr100200ResponseMeta } from "./get-time-series-rocr100200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesRocr100200ResponseValuesInner } from "./get-time-series-rocr100200-response-values-inner";

export interface GetTimeSeriesRocr100200Response {
  meta?: GetTimeSeriesRocr100200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesRocr100200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
