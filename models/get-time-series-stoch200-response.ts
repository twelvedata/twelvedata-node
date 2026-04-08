/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesStoch200ResponseMeta } from "./get-time-series-stoch200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesStoch200ResponseValuesInner } from "./get-time-series-stoch200-response-values-inner";

export interface GetTimeSeriesStoch200Response {
  meta?: GetTimeSeriesStoch200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesStoch200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
