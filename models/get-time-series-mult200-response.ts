/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMult200ResponseMeta } from "./get-time-series-mult200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMult200ResponseValuesInner } from "./get-time-series-mult200-response-values-inner";

export interface GetTimeSeriesMult200Response {
  meta?: GetTimeSeriesMult200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMult200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
