/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHtDcPeriod200ResponseMeta } from "./get-time-series-ht-dc-period200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesHtDcPeriod200ResponseValuesInner } from "./get-time-series-ht-dc-period200-response-values-inner";

export interface GetTimeSeriesHtDcPeriod200Response {
  meta?: GetTimeSeriesHtDcPeriod200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesHtDcPeriod200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
