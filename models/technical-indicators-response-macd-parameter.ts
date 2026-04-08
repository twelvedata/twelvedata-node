/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Input parameter name. Example values: <code>series_type</code>, <code>fast_period</code>, <code>slow_period</code>, <code>time_period</code>, <code>signal_period</code>
 */
export interface TechnicalIndicatorsResponseMacdParameter {
  /**
   * Specifies parameter value set by default
   */
  default?: number;
  /**
   * If the parameter has upper bound in order to ensure correct calculation
   */
  max_range?: number;
  /**
   * If the parameter has lower bound in order to ensure correct calculation
   */
  min_range?: number;
  /**
   * An array of available parameter values
   */
  range?: Array<string>;
  /**
   * Type of parameter might be <code>string</code>, <code>int</code>, <code>float</code> or <code>array</code>
   */
  type?: string;
}
