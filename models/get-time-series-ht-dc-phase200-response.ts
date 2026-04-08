/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHtDcPhase200ResponseMeta } from "./get-time-series-ht-dc-phase200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHtDcPhase200ResponseValuesInner } from "./get-time-series-ht-dc-phase200-response-values-inner";

export interface GetTimeSeriesHtDcPhase200Response {
  meta?: GetTimeSeriesHtDcPhase200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesHtDcPhase200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
