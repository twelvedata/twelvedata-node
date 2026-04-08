/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner } from "./get-mutual-funds-world200-response-mutual-fund-performance-annual-total-returns-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner } from "./get-mutual-funds-world200-response-mutual-fund-performance-load-adjusted-return-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner } from "./get-mutual-funds-world200-response-mutual-fund-performance-quarterly-total-returns-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner } from "./get-mutual-funds-world200-response-mutual-fund-performance-trailing-returns-inner";

/**
 * Detailed performance of a mutual fund
 */
export interface ResponseMutualFundWorldPerformance {
  /**
   * Trailing returns of the fund
   */
  trailing_returns?: Array<GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner>;
  /**
   * Annual total returns of the fund
   */
  annual_total_returns?: Array<GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner>;
  /**
   * Quarterly total returns of the fund
   */
  quarterly_total_returns?: Array<GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner>;
  /**
   * Load adjusted return of the fund
   */
  load_adjusted_return?: Array<GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner>;
}
