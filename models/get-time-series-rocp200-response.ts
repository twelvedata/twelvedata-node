/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesRocp200ResponseMeta } from "./get-time-series-rocp200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesRocp200ResponseValuesInner } from "./get-time-series-rocp200-response-values-inner";

export interface GetTimeSeriesRocp200Response {
  meta?: GetTimeSeriesRocp200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesRocp200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
