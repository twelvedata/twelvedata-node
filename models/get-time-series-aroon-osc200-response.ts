/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAroonOsc200ResponseMeta } from "./get-time-series-aroon-osc200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAroonOsc200ResponseValuesInner } from "./get-time-series-aroon-osc200-response-values-inner";

export interface GetTimeSeriesAroonOsc200Response {
  meta?: GetTimeSeriesAroonOsc200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesAroonOsc200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
