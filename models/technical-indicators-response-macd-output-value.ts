/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Output parameter name. Example values: <code>ad</code>, <code>add</code>, <code>adxr</code>, <code>aroonosc</code>,  <code>macd</code>, <code>macd_signal</code>, <code>macd_hist</code>, etc
 */
export interface TechnicalIndicatorsResponseMacdOutputValue {
  /**
   * Suggested color for displaying returns hex color code
   */
  default_color?: string;
  /**
   * How output value should be rendered
   */
  display?: TechnicalIndicatorsResponseMacdOutputValueDisplayEnum;
  /**
   * If output value has minimum bound
   */
  min_range?: number;
  /**
   * If output value has maximum bound
   */
  max_range?: number;
}

export const TechnicalIndicatorsResponseMacdOutputValueDisplayEnum = {
  LINE: "line",
  HISTOGRAM: "histogram",
  CANDLE: "candle",
  POINTS: "points",
} as const;

export type TechnicalIndicatorsResponseMacdOutputValueDisplayEnum =
  (typeof TechnicalIndicatorsResponseMacdOutputValueDisplayEnum)[keyof typeof TechnicalIndicatorsResponseMacdOutputValueDisplayEnum];
