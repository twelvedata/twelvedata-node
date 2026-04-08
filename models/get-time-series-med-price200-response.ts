/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMedPrice200ResponseMeta } from "./get-time-series-med-price200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMedPrice200ResponseValuesInner } from "./get-time-series-med-price200-response-values-inner";

export interface GetTimeSeriesMedPrice200Response {
  meta?: GetTimeSeriesMedPrice200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMedPrice200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
