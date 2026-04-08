/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Current assets section
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets {
  /**
   * Cash includes currency, bank accounts, and undeposited checks
   */
  cash?: number;
  /**
   * Represents cash equivalents that have high credit quality and are highly liquid
   */
  cash_equivalents?: number;
  /**
   * Combined value of cash and cash equivalents when company doesn\'t report a breakdown
   */
  cash_and_cash_equivalents?: number;
  /**
   * Represents other short term investments
   */
  other_short_term_investments?: number;
  /**
   * Represents the balance of money due to a firm for goods or services delivered or used but not yet paid for by customers
   */
  accounts_receivable?: number;
  /**
   * Represents other receivables
   */
  other_receivables?: number;
  /**
   * Represents the goods available for sale and raw materials used to produce goods available for sale
   */
  inventory?: number;
  /**
   * Represents expense that has already been paid for, but which has not yet been consumed
   */
  prepaid_assets?: number;
  /**
   * Represents money that is held for a specific purpose and thus not available to the company for immediate or general business use
   */
  restricted_cash?: number;
  /**
   * Represents assets which company plans to sell
   */
  assets_held_for_sale?: number;
  /**
   * Represents money that is spent on hedging assets
   */
  hedging_assets?: number;
  /**
   * Represents other current assets
   */
  other_current_assets?: number;
  /**
   * All current assets values in a total
   */
  total_current_assets?: number;
}
