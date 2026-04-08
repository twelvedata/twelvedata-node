/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Balance sheet information
 */
export interface GetStatistics200ResponseStatisticsFinancialsBalanceSheet {
  /**
   * Refers to total cash measure for the most recent quarter
   */
  total_cash_mrq?: number;
  /**
   * Refers to total cash per share measure for the most recent quarter
   */
  total_cash_per_share_mrq?: number;
  /**
   * Refers to total debt measure for the most recent quarter
   */
  total_debt_mrq?: number;
  /**
   * Refers to total debt to equity measure for the most recent quarter
   */
  total_debt_to_equity_mrq?: number;
  /**
   * Refers to current ratio (total assets / total liabilities) ratio for the most recent quarter
   */
  current_ratio_mrq?: number;
  /**
   * Refers to book value per share (BVPS) ratio for the most recent quarter
   */
  book_value_per_share_mrq?: number;
}
