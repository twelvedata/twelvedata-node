/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CrossMeta } from "./cross-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { TimeSeriesCrossItem } from "./time-series-cross-item";

export interface GetTimeSeriesCross200Response {
  meta?: CrossMeta;
  /**
   * Array of time series data points
   */
  values?: Array<TimeSeriesCrossItem>;
}
