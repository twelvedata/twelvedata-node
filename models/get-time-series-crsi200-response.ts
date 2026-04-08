/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCrsi200ResponseMeta } from "./get-time-series-crsi200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCrsi200ResponseValuesInner } from "./get-time-series-crsi200-response-values-inner";

export interface GetTimeSeriesCrsi200Response {
  meta?: GetTimeSeriesCrsi200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesCrsi200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
