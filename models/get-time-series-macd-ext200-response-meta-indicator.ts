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
export interface GetTimeSeriesMacdExt200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   */
  series_type?: string;
  /**
   * The shorter time period for calculation
   */
  fast_period?: number;
  /**
   * The type of fast moving average used in the calculation
   */
  fast_ma_type?: string;
  /**
   * The longer time period for calculation
   */
  slow_period?: number;
  /**
   * The type of slow moving average used in the calculation
   */
  slow_ma_type?: string;
  /**
   * The time period used for generating the signal line
   */
  signal_period?: number;
  /**
   * The type of moving average used for generating the signal line
   */
  signal_ma_type?: string;
}
