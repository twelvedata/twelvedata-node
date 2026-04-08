/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Investing activities section
 */
export interface CashFlowStructInvestingActivities {
  /**
   * Capital expenditures (CapEx) are funds used by a company to acquire, upgrade, and maintain physical assets (PPE)
   */
  capital_expenditures?: number;
  /**
   * Represents purchase of a not physical asset
   */
  net_intangibles?: number;
  /**
   * Refers to net amount of business purchase and sale
   */
  net_acquisitions?: number;
  /**
   * Represents how much money has been used in making investments, including purchases of physical assets, investments in securities
   */
  purchase_of_investments?: number;
  /**
   * Represents how much money has been generated from the sale of securities or assets
   */
  sale_of_investments?: number;
  /**
   * Represents other investing activity
   */
  other_investing_activity?: number;
  /**
   * Returns total amount of cash flow used in investments
   */
  investing_cash_flow?: number;
}
