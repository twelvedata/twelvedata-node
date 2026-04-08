/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetIpoCalendar200ResponseValueInner {
  /**
   * Ticker of the company
   */
  symbol?: string;
  /**
   * Name of the company
   */
  name?: string;
  /**
   * Exchange name where the company is listed
   */
  exchange?: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * The lower bound of stock price range if available
   */
  price_range_low?: number;
  /**
   * The upper bound of stock price range if available
   */
  price_range_high?: number;
  /**
   * Initial offer price if available
   */
  offer_price?: number;
  /**
   * Currency of the stock
   */
  currency?: string;
  /**
   * Number of shares, if available
   */
  shares?: number;
}
