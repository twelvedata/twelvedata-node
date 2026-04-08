/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Meta information about the instrument
 */
export interface GetIncomeStatement200ResponseMeta {
  /**
   * Symbol ticker of the instrument
   */
  symbol?: string;
  /**
   * Name of the company
   */
  name?: string;
  /**
   * Currency of the instrument according to the ISO 4217 standard
   */
  currency?: string;
  /**
   * Exchange where the instrument is traded
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
   * Period of the income statement (Annual or Quarterly)
   */
  period?: string;
}
