/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner } from "./get-etfs-world200-response-etf-performance-annual-total-returns-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner } from "./get-etfs-world200-response-etf-performance-trailing-returns-inner";

/**
 * Detailed performance of a etf
 */
export interface GetETFsWorldPerformance200ResponseEtfPerformance {
  /**
   * Performance returns of the fund and its category over various trailing time periods
   */
  trailing_returns?: Array<GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner>;
  /**
   * Fund and category total returns (%) for each calendar year
   */
  annual_total_returns?: Array<GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner>;
}
