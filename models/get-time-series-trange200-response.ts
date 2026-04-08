/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesTRange200ResponseMeta } from "./get-time-series-trange200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesTRange200ResponseValuesInner } from "./get-time-series-trange200-response-values-inner";

export interface GetTimeSeriesTRange200Response {
  meta?: GetTimeSeriesTRange200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesTRange200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
