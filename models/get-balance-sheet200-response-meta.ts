/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Metadata about the balance sheet
 */
export interface GetBalanceSheet200ResponseMeta {
  /**
   * Ticker symbol of instrument
   */
  symbol?: string;
  /**
   * Name of the company
   */
  name?: string;
  /**
   * Currency of the balance sheet according to the ISO 4217 standard
   */
  currency?: string;
  /**
   * Exchange where instrument is traded
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Exchange timezone
   */
  exchange_timezone?: string;
  /**
   * Values can be annual or quarterly
   */
  period?: string;
}
