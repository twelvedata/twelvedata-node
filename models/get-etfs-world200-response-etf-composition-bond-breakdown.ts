/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration } from "./get-etfs-world200-response-etf-composition-bond-breakdown-average-duration";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity } from "./get-etfs-world200-response-etf-composition-bond-breakdown-average-maturity";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner } from "./get-etfs-world200-response-etf-composition-bond-breakdown-credit-quality-inner";

/**
 * Breakdown of the fund’s portfolio by bond holding characteristics
 */
export interface GetETFsWorld200ResponseEtfCompositionBondBreakdown {
  average_maturity?: GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity;
  average_duration?: GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration;
  /**
   * Breakdown of the fund’s bond holdings by credit rating and their respective portfolio weights
   */
  credit_quality?: Array<GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner>;
}
