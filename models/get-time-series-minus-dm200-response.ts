/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMinusDM200ResponseMeta } from "./get-time-series-minus-dm200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMinusDM200ResponseValuesInner } from "./get-time-series-minus-dm200-response-values-inner";

export interface GetTimeSeriesMinusDM200Response {
  meta?: GetTimeSeriesMinusDM200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMinusDM200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
