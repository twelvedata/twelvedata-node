/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Shareholders\' equity section of the balance sheet
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity {
  /**
   * Represents net worth of investors shares, which is equal to the total_assets - total_liabilities
   */
  common_stock?: number;
  /**
   * Refers to the profits earned minus dividends paid
   */
  retained_earnings?: number;
  /**
   * Represents other not affecting retained earnings gains and looses
   */
  other_shareholders_equity?: number;
  /**
   * Represents the net worth of a company, which is the amount that would be returned to shareholders if a company\'s total assets were liquidated, and all of its debts were repaid
   */
  total_shareholders_equity?: number;
  /**
   * Represents the additional paid-in capital, which is the amount shareholders have invested in a company above the par value of its stock
   */
  additional_paid_in_capital?: number;
  /**
   * Represents the value of shares that have been repurchased by the company and are held in its treasury
   */
  treasury_stock?: number;
  /**
   * Represents the portion of shareholders\' equity that is attributable to minority shareholders in a subsidiary company
   */
  minority_interest?: number;
}
