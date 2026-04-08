/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Meta information about the response
 */
export interface GetCashFlow200ResponseMeta {
  /**
   * Symbol ticker of instrument
   */
  symbol?: string;
  /**
   * Name of the company
   */
  name?: string;
  /**
   * Currency of the cash flow data according to the ISO 4217 standard
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
   * Period of the cash flow data (Annual or Quarterly)
   */
  period?: string;
}
