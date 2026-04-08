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
export interface GetTimeSeriesKst200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * The time period for the first Rate of Change calculation
   */
  roc_period_1?: number;
  /**
   * The time period for the second Rate of Change calculation
   */
  roc_period_2?: number;
  /**
   * The time period for the third Rate of Change calculation
   */
  roc_period_3?: number;
  /**
   * The time period for the forth Rate of Change calculation
   */
  roc_period_4?: number;
  /**
   * The time period for the first Simple Moving Average
   */
  sma_period_1?: number;
  /**
   * The time period for the second Simple Moving Average
   */
  sma_period_2?: number;
  /**
   * The time period for the third Simple Moving Average
   */
  sma_period_3?: number;
  /**
   * The time period for the forth Simple Moving Average
   */
  sma_period_4?: number;
  /**
   * The time period used for generating the signal line
   */
  signal_period?: number;
}
