/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface DirectHolderItem {
  /**
   * Refers to the legal name of the institution
   */
  entity_name?: string;
  /**
   * Refers to date reported
   */
  date_reported?: string;
  /**
   * Refers to the number of shares owned
   */
  shares?: number;
  /**
   * Total value of shares owned, calculated by multiplying `shares` by the current price
   */
  value?: number;
  /**
   * Represents the percentage of shares outstanding that are owned by the financial institution
   */
  percent_held?: number;
}
