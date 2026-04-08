/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAd200ResponseMeta } from "./get-time-series-ad200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesAd200ResponseValuesInner } from "./get-time-series-ad200-response-values-inner";

export interface GetTimeSeriesAd200Response {
  meta?: GetTimeSeriesAd200ResponseMeta;
  values?: Array<GetTimeSeriesAd200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
