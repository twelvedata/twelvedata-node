/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetEarningsEstimate200ResponseMeta } from "./get-earnings-estimate200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetEpsTrend200ResponseEpsTrendInner } from "./get-eps-trend200-response-eps-trend-inner";

export interface GetEpsTrend200Response {
  meta?: GetEarningsEstimate200ResponseMeta;
  /**
   * EPS trend data
   */
  eps_trend?: Array<GetEpsTrend200ResponseEpsTrendInner>;
  /**
   * Status of the response
   */
  status?: string;
}
