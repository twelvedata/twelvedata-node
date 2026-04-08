/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Financing activities section
 */
export interface CashFlowStructFinancingActivities {
  /**
   * Refers to the issuance of any financial obligations that extend beyond a 12 months period
   */
  long_term_debt_issuance?: number;
  /**
   * Refers to the payments of any financial obligations that extend beyond a 12 months period
   */
  long_term_debt_payments?: number;
  /**
   * Refers to the issuance of any financial obligations that are expected to be paid off within a year
   */
  short_term_debt_issuance?: number;
  /**
   * Represents a transaction whereby a company issues its own shares to the marketplace
   */
  common_stock_issuance?: number;
  /**
   * Represents a transaction whereby a company buys back its own shares from the marketplace
   */
  common_stock_repurchase?: number;
  /**
   * Returns value of payment doled out by a company to its stockholders in the form of periodic distributions of cash
   */
  common_dividends?: number;
  /**
   * Represents other financing charges
   */
  other_financing_charges?: number;
  /**
   * Returns cash flow from financing activities (CFF), which shows the net flows of cash that are used to fund the company
   */
  financing_cash_flow?: number;
}
