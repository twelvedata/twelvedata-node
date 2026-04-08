/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMidPoint200ResponseMeta } from "./get-time-series-mid-point200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMidPoint200ResponseValuesInner } from "./get-time-series-mid-point200-response-values-inner";

export interface GetTimeSeriesMidPoint200Response {
  meta?: GetTimeSeriesMidPoint200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMidPoint200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
