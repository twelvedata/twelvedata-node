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
import type { GetGrowthEstimates200ResponseGrowthEstimates } from "./get-growth-estimates200-response-growth-estimates";

export interface GetGrowthEstimates200Response {
  meta?: GetEarningsEstimate200ResponseMeta;
  growth_estimates?: GetGrowthEstimates200ResponseGrowthEstimates;
  /**
   * Status of the request
   */
  status?: string;
}
