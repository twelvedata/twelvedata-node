/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Json object with request general information
 */
export interface GetDividends200ResponseMeta {
  /**
   * Ticker symbol of instrument
   */
  symbol?: string;
  /**
   * Name of symbol
   */
  name?: string;
  /**
   * Currency in which instrument is traded
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
   * Timezone of the exchange
   */
  exchange_timezone?: string;
}
