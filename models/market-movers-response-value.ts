/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface MarketMoversResponseValue {
  /**
   * The exchange symbol ticker
   */
  symbol?: string;
  /**
   * The official name of the instrument
   */
  name?: string;
  /**
   * Exchange where instrument is traded
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * The last updated datetime timestamp
   */
  datetime?: string;
  /**
   * The latest available price for the symbol today
   */
  last?: number;
  /**
   * The highest price for the symbol today
   */
  high?: number;
  /**
   * The lowest price for the symbol today
   */
  low?: number;
  /**
   * The trading volume of the symbol today
   */
  volume?: number;
  /**
   * The value of the change since the previous day
   */
  change?: number;
  /**
   * The percentage change since the previous day
   */
  percent_change?: number;
}
