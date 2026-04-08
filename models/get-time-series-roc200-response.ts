/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesRoc200ResponseMeta } from "./get-time-series-roc200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesRoc200ResponseValuesInner } from "./get-time-series-roc200-response-values-inner";

export interface GetTimeSeriesRoc200Response {
  meta?: GetTimeSeriesRoc200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesRoc200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
