/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMacdSlope200ResponseMeta } from "./get-time-series-macd-slope200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMacdSlope200ResponseValuesInner } from "./get-time-series-macd-slope200-response-values-inner";

export interface GetTimeSeriesMacdSlope200Response {
  meta?: GetTimeSeriesMacdSlope200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMacdSlope200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
