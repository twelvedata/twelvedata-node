/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetSplits200ResponseSplitsInner {
  /**
   * Stands for the split date
   */
  date?: string;
  /**
   * Specification of the split event
   */
  description?: string;
  /**
   * The ratio by which the number of a company\'s outstanding shares of stock are increased following a stock split. For example, a `4-for-1 split` results in four times as many outstanding shares, with each share selling at one forth of its pre-split price
   */
  ratio?: number;
  /**
   * From factor of the split
   */
  from_factor?: number;
  /**
   * To factor of the split
   */
  to_factor?: number;
}
