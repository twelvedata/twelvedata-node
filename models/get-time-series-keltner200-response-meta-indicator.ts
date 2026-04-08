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
export interface GetTimeSeriesKeltner200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * Number of periods to average over
   */
  time_period?: number;
  /**
   * The time period used for calculating the Average True Range
   */
  atr_time_period?: number;
  /**
   * The factor used to adjust the indicator\'s sensitivity
   */
  multiplier?: number;
  /**
   * Price type on which technical indicator is calculated
   */
  series_type?: string;
  /**
   * The type of moving average used
   */
  ma_type?: string;
}
