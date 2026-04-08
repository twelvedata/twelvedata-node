/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMfi200ResponseMeta } from "./get-time-series-mfi200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMfi200ResponseValuesInner } from "./get-time-series-mfi200-response-values-inner";

export interface GetTimeSeriesMfi200Response {
  meta?: GetTimeSeriesMfi200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMfi200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
