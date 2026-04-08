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
export interface GetTimeSeriesSarExt200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * The initial value for the indicator calculation
   */
  start_value?: number;
  /**
   * The adjustment applied when the indicator\'s direction changes
   */
  offset_on_reverse?: number;
  /**
   * The maximum acceleration value for long positions
   */
  acceleration_limit_long?: number;
  /**
   * The acceleration value for long positions
   */
  acceleration_long?: number;
  /**
   * The highest allowed acceleration for long positions
   */
  acceleration_max_long?: number;
  /**
   * The maximum acceleration value for short positions
   */
  acceleration_limit_short?: number;
  /**
   * The acceleration value for short positions
   */
  acceleration_short?: number;
  /**
   * The highest allowed acceleration for short positions
   */
  acceleration_max_short?: number;
}
