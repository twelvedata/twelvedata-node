/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * An array of tinting values used for proper indicator coloring
 */
export interface TechnicalIndicatorsResponseMacdTinting {
  /**
   * How the tinting should be rendered
   */
  display?: string;
  /**
   * Hex color code for the tinting
   */
  color?: string;
  /**
   * Transparency level, float value from <code>0</code> to <code>1</code>
   */
  transparency?: number;
  /**
   * Lower bound of tinting, can be a number or a return parameter name
   */
  lower_bound?: object;
  /**
   * Upper bound of tinting, can be a number or a return parameter name
   */
  upper_bound?: object;
}
