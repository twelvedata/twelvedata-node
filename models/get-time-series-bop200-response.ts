/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesBop200ResponseMeta } from "./get-time-series-bop200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesBop200ResponseValuesInner } from "./get-time-series-bop200-response-values-inner";

export interface GetTimeSeriesBop200Response {
  meta?: GetTimeSeriesBop200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesBop200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
