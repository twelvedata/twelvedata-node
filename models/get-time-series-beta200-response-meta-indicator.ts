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
export interface GetTimeSeriesBeta200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * Price type used as the first part of technical indicator
   */
  series_type_1?: string;
  /**
   * Price type used as the second part of technical indicator
   */
  series_type_2?: string;
  /**
   * Number of periods to average over
   */
  time_period?: number;
}
