/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Non-current liabilities section
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities {
  /**
   * Represents money set aside for employee benefits such as gratuity
   */
  long_term_provisions?: number;
  /**
   * Represents amount of outstanding debt that has a maturity of 12 months or longer
   */
  long_term_debt?: number;
  /**
   * Represents funds set aside as assets to pay for anticipated future losses
   */
  provision_for_risks_and_charges?: number;
  /**
   * Represents revenue producing activity for which revenue has not yet been recognized, and is not expected to be recognized in the next 12 months
   */
  deferred_liabilities?: number;
  /**
   * Represents the value of derivative financial instruments that a company has issued
   */
  derivative_product_liabilities?: number;
  /**
   * Represents other non-current liabilities
   */
  other_non_current_liabilities?: number;
  /**
   * Represents total non-current liabilities
   */
  total_non_current_liabilities?: number;
}
