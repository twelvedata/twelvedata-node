/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Metadata about the instrument
 */
export interface GetSplits200ResponseMeta {
  /**
   * Ticker symbol of instrument
   */
  symbol?: string;
  /**
   * Name of the instrument
   */
  name?: string;
  /**
   * Currency in which the instrument is denominated
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
