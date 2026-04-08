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
export interface GetAnalystRatingsLight200ResponseMeta {
  /**
   * Symbol ticker of the instrument
   */
  symbol?: string;
  /**
   * Name of the instrument
   */
  name?: string;
  /**
   * Currency in which the instrument is traded
   */
  currency?: string;
  /**
   * Timezone of the exchange
   */
  exchange_timezone?: string;
  /**
   * Exchange where the instrument is traded
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Type of the instrument
   */
  type?: string;
}
