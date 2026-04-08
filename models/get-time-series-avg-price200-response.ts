/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAvgPrice200ResponseMeta } from "./get-time-series-avg-price200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAvgPrice200ResponseValuesInner } from "./get-time-series-avg-price200-response-values-inner";

export interface GetTimeSeriesAvgPrice200Response {
  meta?: GetTimeSeriesAvgPrice200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesAvgPrice200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
