/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration } from "./get-mutual-funds-world200-response-mutual-fund-composition-bond-breakdown-average-duration";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity } from "./get-mutual-funds-world200-response-mutual-fund-composition-bond-breakdown-average-maturity";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner } from "./get-mutual-funds-world200-response-mutual-fund-composition-bond-breakdown-credit-quality-inner";

/**
 * Breakdown of the fund’s bond holdings by maturity, duration, and credit quality
 */
export interface GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown {
  average_maturity?: GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity;
  average_duration?: GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration;
  /**
   * Breakdown of the fund’s bond holdings by credit rating and their respective portfolio weights
   */
  credit_quality?: Array<GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner>;
}
