/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner {
  /**
   * Symbol ticker of a holding instrument
   */
  symbol?: string;
  /**
   * Name of a holding instrument
   */
  name?: string;
  /**
   * Exchange where instrument is traded
   */
  exchange?: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Weight of a holding instrument in overall portfolio composition
   */
  weight?: number;
}
