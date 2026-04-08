/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Price target information
 */
export interface GetPriceTarget200ResponsePriceTarget {
  /**
   * Highest price target given by an analyst
   */
  high?: number;
  /**
   * Median price target given across analysts
   */
  median?: number;
  /**
   * Lowest price target given by an analyst
   */
  low?: number;
  /**
   * Average price target given across analysts
   */
  average?: number;
  /**
   * Current price from of a security
   */
  current?: number;
  /**
   * Currency in which the price targets values are quoted
   */
  currency?: string;
}
