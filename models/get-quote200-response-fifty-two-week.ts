/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Collection of 52-week metrics
 */
export interface GetQuote200ResponseFiftyTwoWeek {
  /**
   * 52-week low price
   */
  low?: string;
  /**
   * 52-week high price
   */
  high?: string;
  /**
   * Current price - 52-week low
   */
  low_change?: string;
  /**
   * Current price - 52-week high
   */
  high_change?: string;
  /**
   * Percentage change from 52-week low
   */
  low_change_percent?: string;
  /**
   * Percentage change from 52-week high
   */
  high_change_percent?: string;
  /**
   * Range between 52-week low and high
   */
  range?: string;
}
