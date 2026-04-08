/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMinusDI200ResponseMeta } from "./get-time-series-minus-di200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMinusDI200ResponseValuesInner } from "./get-time-series-minus-di200-response-values-inner";

export interface GetTimeSeriesMinusDI200Response {
  meta?: GetTimeSeriesMinusDI200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMinusDI200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
