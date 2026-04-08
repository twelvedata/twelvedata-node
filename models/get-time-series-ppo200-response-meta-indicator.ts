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
export interface GetTimeSeriesPpo200ResponseMetaIndicator {
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
   * The type of moving average used
   */
  ma_type?: string;
}
