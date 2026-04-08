/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesTypPrice200ResponseMeta } from "./get-time-series-typ-price200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesTypPrice200ResponseValuesInner } from "./get-time-series-typ-price200-response-values-inner";

export interface GetTimeSeriesTypPrice200Response {
  meta?: GetTimeSeriesTypPrice200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesTypPrice200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
