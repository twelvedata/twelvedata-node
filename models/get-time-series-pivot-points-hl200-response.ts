/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesPivotPointsHL200ResponseMeta } from "./get-time-series-pivot-points-hl200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesPivotPointsHL200ResponseValuesInner } from "./get-time-series-pivot-points-hl200-response-values-inner";

export interface GetTimeSeriesPivotPointsHL200Response {
  meta?: GetTimeSeriesPivotPointsHL200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesPivotPointsHL200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
