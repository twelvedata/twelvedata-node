/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Meta information about the financial instrument
 */
export interface GetFundHolders200ResponseMeta {
  /**
   * Ticker symbol of instrument
   */
  symbol?: string;
  /**
   * Name of symbol
   */
  name?: string;
  /**
   * Currency of the instrument according to the ISO 4217 standard
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
