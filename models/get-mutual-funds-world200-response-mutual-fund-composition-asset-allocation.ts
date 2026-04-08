/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Asset allocation of the fund by different asset classes and their respective weights
 */
export interface GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation {
  /**
   * Percentage of overall portfolio composition in cash
   */
  cash?: number;
  /**
   * Percentage of overall portfolio composition in stocks
   */
  stocks?: number;
  /**
   * Percentage of overall portfolio composition in preferred stocks
   */
  preferred_stocks?: number;
  /**
   * Percentage of overall portfolio composition in convertable securities
   */
  convertables?: number;
  /**
   * Percentage of overall portfolio composition in bond
   */
  bonds?: number;
  /**
   * Percentage of overall portfolio composition in other forms of holding
   */
  others?: number;
}
