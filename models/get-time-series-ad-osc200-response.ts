/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAdOsc200ResponseMeta } from "./get-time-series-ad-osc200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAdOsc200ResponseValuesInner } from "./get-time-series-ad-osc200-response-values-inner";

export interface GetTimeSeriesAdOsc200Response {
  meta?: GetTimeSeriesAdOsc200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesAdOsc200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
