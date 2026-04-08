/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSar200ResponseMeta } from "./get-time-series-sar200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesSar200ResponseValuesInner } from "./get-time-series-sar200-response-values-inner";

export interface GetTimeSeriesSar200Response {
  meta?: GetTimeSeriesSar200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesSar200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
