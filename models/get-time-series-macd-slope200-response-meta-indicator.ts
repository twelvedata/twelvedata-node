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
export interface GetTimeSeriesMacdSlope200ResponseMetaIndicator {
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
   * The longer time period for calculation
   */
  slow_period?: number;
  /**
   * The time period used for generating the signal line
   */
  signal_period?: number;
  /**
   * The time period used for calculation in the indicator
   */
  time_period?: number;
}
