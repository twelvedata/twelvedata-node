/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Pricing information for the mutual fund
 */
export interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing {
  /**
   * Net Asset Value: fund value minus liabilities
   */
  nav?: number;
  /**
   * Lowest price of the fund over the last year
   */
  "12_month_low"?: number;
  /**
   * Highest price of the fund over the last year
   */
  "12_month_high"?: number;
  /**
   * Fund price at the end of the last month
   */
  last_month?: number;
}
