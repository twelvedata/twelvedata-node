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
export interface GetTimeSeriesPercentB200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   */
  series_type?: string;
  /**
   * The time period used for calculation in the indicator
   */
  time_period?: number;
  /**
   * The standard deviation applied in the calculation
   */
  sd?: number;
  /**
   * The type of moving average used
   */
  ma_type?: string;
}
