/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMama200ResponseMeta } from "./get-time-series-mama200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMama200ResponseValuesInner } from "./get-time-series-mama200-response-values-inner";

export interface GetTimeSeriesMama200Response {
  meta?: GetTimeSeriesMama200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMama200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
