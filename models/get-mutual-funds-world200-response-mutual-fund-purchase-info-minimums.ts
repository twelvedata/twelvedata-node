/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Minimum investment amounts required to purchase or add to the mutual fund, including IRA minimums
 */
export interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums {
  /**
   * Investment minimum
   */
  initial_investment?: number;
  /**
   * Minimum amount of additional investment
   */
  additional_investment?: number;
  /**
   * Investment minimum for IRA
   */
  initial_ira_investment?: object;
  /**
   * Minimum amount of additional investment for IRA
   */
  additional_ira_investment?: object;
}
