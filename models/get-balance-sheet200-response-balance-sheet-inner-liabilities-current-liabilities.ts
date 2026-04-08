/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Current liabilities section
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities {
  /**
   * Refers to an account within the general ledger that represents an obligation to pay off a short-term debt to creditors or suppliers
   */
  accounts_payable?: number;
  /**
   * Represents payments that a company is obligated to pay in the future for which goods and services have already been delivered
   */
  accrued_expenses?: number;
  /**
   * Represents current debt and capital lease obligations
   */
  short_term_debt?: number;
  /**
   * Represents advance payments a company receives for products or services that are to be delivered or performed in the future
   */
  deferred_revenue?: number;
  /**
   * Represents taxes due to the government within one year
   */
  tax_payable?: number;
  /**
   * Represents to pensions to be paid out
   */
  pensions?: number;
  /**
   * Represents other current liabilities
   */
  other_current_liabilities?: number;
  /**
   * Represents total current liabilities
   */
  total_current_liabilities?: number;
}
