/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAvg200ResponseMeta } from "./get-time-series-avg200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAvg200ResponseValuesInner } from "./get-time-series-avg200-response-values-inner";

export interface GetTimeSeriesAvg200Response {
  meta?: GetTimeSeriesAvg200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesAvg200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
