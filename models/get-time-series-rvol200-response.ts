/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesRvol200ResponseMeta } from "./get-time-series-rvol200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesRvol200ResponseValuesInner } from "./get-time-series-rvol200-response-values-inner";

export interface GetTimeSeriesRvol200Response {
  meta?: GetTimeSeriesRvol200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesRvol200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
