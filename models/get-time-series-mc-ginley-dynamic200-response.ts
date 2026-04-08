/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMcGinleyDynamic200ResponseMeta } from "./get-time-series-mc-ginley-dynamic200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetTimeSeriesMcGinleyDynamic200ResponseValuesInner } from "./get-time-series-mc-ginley-dynamic200-response-values-inner";

export interface GetTimeSeriesMcGinleyDynamic200Response {
  meta?: GetTimeSeriesMcGinleyDynamic200ResponseMeta;
  /**
   * Array of time series data points
   */
  values?: Array<GetTimeSeriesMcGinleyDynamic200ResponseValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
