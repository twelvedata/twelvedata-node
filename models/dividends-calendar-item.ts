/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * DividendsCalendarItem represents details of a dividend
 */
export interface DividendsCalendarItem {
  /**
   * Ticker symbol of instrument
   */
  symbol?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Exchange where instrument is traded
   */
  exchange?: string;
  /**
   * Ex-dividend date
   */
  ex_date?: string;
  /**
   * Dividend payment amount
   */
  amount?: number;
}
