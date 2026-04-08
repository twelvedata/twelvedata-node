/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCeil200ResponseMeta } from "./get-time-series-ceil200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesCeil200ResponseValuesInner } from "./get-time-series-ceil200-response-values-inner";

export interface GetTimeSeriesCeil200Response {
  meta?: GetTimeSeriesCeil200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesCeil200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
