/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Valuation ratios and metrics of the fund and its category
 */
export interface GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics {
  /**
   * Fund price to earnings metric
   */
  price_to_earnings?: number;
  /**
   * Average price to earnings metric of funds in the same category
   */
  price_to_earnings_category?: number;
  /**
   * Fund price to book metric
   */
  price_to_book?: number;
  /**
   * Average price to book metric of funds in the same category
   */
  price_to_book_category?: number;
  /**
   * Fund price to sales metric
   */
  price_to_sales?: number;
  /**
   * Average price to sales metric of funds in the same category
   */
  price_to_sales_category?: number;
  /**
   * Fund price to cashflow metric
   */
  price_to_cashflow?: number;
  /**
   * Average price to cashflow metric of funds in the same category
   */
  price_to_cashflow_category?: number;
  /**
   * Median market capitalization of a fund
   */
  median_market_capitalization?: number;
  /**
   * Median market capitalization of funds in the same category
   */
  median_market_capitalization_category?: number;
  /**
   * Earnings growth over the last three years
   */
  "3_year_earnings_growth"?: number;
  /**
   * Earnings growth over the last three years of funds in the same category
   */
  "3_year_earnings_growths_category"?: number;
}
