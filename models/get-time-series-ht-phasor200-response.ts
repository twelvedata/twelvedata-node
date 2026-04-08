/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHtPhasor200ResponseMeta } from "./get-time-series-ht-phasor200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHtPhasor200ResponseValuesInner } from "./get-time-series-ht-phasor200-response-values-inner";

export interface GetTimeSeriesHtPhasor200Response {
  meta?: GetTimeSeriesHtPhasor200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesHtPhasor200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
