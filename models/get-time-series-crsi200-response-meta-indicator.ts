/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Technical indicator information
 */
export interface GetTimeSeriesCrsi200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   */
  series_type?: string;
  /**
   * Number of periods for RSI used to calculate price momentum
   */
  rsi_period?: number;
  /**
   * Number of periods for RSI used to calculate up/down trend
   */
  up_down_length?: number;
  /**
   * Number of periods used to calculate PercentRank
   */
  percent_rank_period?: number;
}
