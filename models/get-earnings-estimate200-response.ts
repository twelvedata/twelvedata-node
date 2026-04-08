/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetEarningsEstimate200ResponseEarningsEstimateInner } from "./get-earnings-estimate200-response-earnings-estimate-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetEarningsEstimate200ResponseMeta } from "./get-earnings-estimate200-response-meta";

export interface GetEarningsEstimate200Response {
  meta?: GetEarningsEstimate200ResponseMeta;
  /**
   * List of earnings estimates
   */
  earnings_estimate?: Array<GetEarningsEstimate200ResponseEarningsEstimateInner>;
  /**
   * Response status
   */
  status?: string;
}
