/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Common metadata fields for time series indicator responses
 */
export interface TimeSeriesIndicatorMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   */
  exchange_timezone?: string;
  /**
   * The exchange name where the instrument is traded.
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   */
  mic_code?: string;
  /**
   * The asset class to which the instrument belongs.
   */
  type?: string;
}
