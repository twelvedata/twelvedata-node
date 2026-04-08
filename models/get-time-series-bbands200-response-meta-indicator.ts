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
export interface GetTimeSeriesBBands200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   */
  series_type?: string;
  /**
   * Number of periods to average over
   */
  time_period?: number;
  /**
   * Number of standard deviations
   */
  sd?: number;
  /**
   * Moving average type
   */
  ma_type?: string;
}
