/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesTema200ResponseMeta } from "./get-time-series-tema200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesTema200ResponseValuesInner } from "./get-time-series-tema200-response-values-inner";

export interface GetTimeSeriesTema200Response {
  meta?: GetTimeSeriesTema200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesTema200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
