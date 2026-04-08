/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Metadata about the requested instrument
 */
export interface GetTaxInfo200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested
   */
  symbol?: string;
  /**
   * The instrument name
   */
  name?: string;
  /**
   * The exchange name where the instrument is traded
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded
   */
  mic_code?: string;
  /**
   * The instrument country name
   */
  country?: string;
}
