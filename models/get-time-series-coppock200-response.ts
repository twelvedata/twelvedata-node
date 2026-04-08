/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCoppock200ResponseMeta } from "./get-time-series-coppock200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCoppock200ResponseValuesInner } from "./get-time-series-coppock200-response-values-inner";

export interface GetTimeSeriesCoppock200Response {
  meta?: GetTimeSeriesCoppock200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesCoppock200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
