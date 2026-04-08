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
export interface GetTimeSeriesStochRsi200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   */
  series_type?: string;
  /**
   * Length of period for calculating the RSI component
   */
  rsi_length?: number;
  /**
   * Period length for computing the stochastic oscillator of the RSI
   */
  stoch_length?: number;
  /**
   * Period for smoothing the %K line
   */
  k_period?: number;
  /**
   * Period for smoothing the %D line, which is a moving average of %K
   */
  d_period?: number;
}
