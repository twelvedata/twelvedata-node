/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Meta information about the company
 */
export interface GetMarketCap200ResponseMeta {
  /**
   * Ticker of the company
   */
  symbol?: string;
  /**
   * Name of the company
   */
  name?: string;
  /**
   * Currency in which instrument is traded by ISO 4217 standard
   */
  currency?: string;
  /**
   * Exchange name where the company is listed
   */
  exchange?: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Exchange timezone
   */
  exchange_timezone?: string;
}
