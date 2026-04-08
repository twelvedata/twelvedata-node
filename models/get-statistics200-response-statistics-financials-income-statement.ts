/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Income statement information
 */
export interface GetStatistics200ResponseStatisticsFinancialsIncomeStatement {
  /**
   * Refers to total revenue over the last 12 months
   */
  revenue_ttm?: number;
  /**
   * Refers to revenue per share over the last 12 months
   */
  revenue_per_share_ttm?: number;
  /**
   * Refers to quarterly revenue growth year over year
   */
  quarterly_revenue_growth?: number;
  /**
   * Refers to gross profit over the last 12 months
   */
  gross_profit_ttm?: number;
  /**
   * Refers to EBITDA (earnings before interest, taxes, depreciation, and amortization) measure; EBITDA is not calculated for banks
   */
  ebitda?: number;
  /**
   * Refers to net income applicable to common shares over the last 12 months
   */
  net_income_to_common_ttm?: number;
  /**
   * Refers to diluted EPS measure over the last 12 months
   */
  diluted_eps_ttm?: number;
  /**
   * Refers to quarterly earnings growth year over year
   */
  quarterly_earnings_growth_yoy?: number;
}
