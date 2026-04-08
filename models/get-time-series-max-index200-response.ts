/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMaxIndex200ResponseMeta } from "./get-time-series-max-index200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMaxIndex200ResponseValuesInner } from "./get-time-series-max-index200-response-values-inner";

export interface GetTimeSeriesMaxIndex200Response {
  meta?: GetTimeSeriesMaxIndex200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMaxIndex200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
