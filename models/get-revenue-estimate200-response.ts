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
import type { GetRevenueEstimate200ResponseRevenueEstimateInner } from "./get-revenue-estimate200-response-revenue-estimate-inner";

export interface GetRevenueEstimate200Response {
  meta?: GetEarningsEstimate200ResponseMeta;
  /**
   * Revenue estimate data
   */
  revenue_estimate?: Array<GetRevenueEstimate200ResponseRevenueEstimateInner>;
  /**
   * Status of the response
   */
  status?: string;
}
