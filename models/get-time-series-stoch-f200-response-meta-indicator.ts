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
export interface GetTimeSeriesStochF200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   */
  name?: string;
  /**
   * The fast_k period used for calculation in the indicator
   */
  fast_k_period?: number;
  /**
   * The fast_d period used for calculation in the indicator
   */
  fast_d_period?: number;
  /**
   * The type of fast Displaced Moving Average used
   */
  fast_dma_type?: string;
}
