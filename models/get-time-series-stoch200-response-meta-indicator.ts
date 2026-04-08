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
export interface GetTimeSeriesStoch200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * The time period for the fast %K line in the Stochastic Oscillator
   */
  fast_k_period?: number;
  /**
   * The time period for the slow %K line in the Stochastic Oscillator
   */
  slow_k_period?: number;
  /**
   * The time period for the slow %D line in the Stochastic Oscillator
   */
  slow_d_period?: number;
  /**
   * The type of slow %K Moving Average used
   */
  slow_kma_type?: string;
  /**
   * The type of slow Displaced Moving Average used
   */
  slow_dma_type?: string;
}
