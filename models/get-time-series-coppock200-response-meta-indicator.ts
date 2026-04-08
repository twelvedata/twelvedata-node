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
export interface GetTimeSeriesCoppock200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   */
  series_type?: string;
  /**
   * Number of periods for weighted moving average
   */
  wma_period?: number;
  /**
   * Number of periods for long term rate of change
   */
  long_roc_period?: number;
  /**
   * Number of periods for short term rate of change
   */
  short_roc_period?: number;
}
