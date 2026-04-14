/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Output parameter name. Example values: <code>ad</code>, <code>add</code>, <code>adxr</code>, <code>aroonosc</code>,  <code>macd</code>, <code>macd_signal</code>, <code>macd_hist</code>, etc
 * @export
 * @interface TechnicalIndicatorsResponseMacdOutputValue
 */
export interface TechnicalIndicatorsResponseMacdOutputValue {
  /**
   * Suggested color for displaying returns hex color code
   * @type {string}
   * @memberof TechnicalIndicatorsResponseMacdOutputValue
   */
  defaultColor?: string;
  /**
   * How output value should be rendered
   * @type {string}
   * @memberof TechnicalIndicatorsResponseMacdOutputValue
   */
  display?: TechnicalIndicatorsResponseMacdOutputValueDisplayEnum;
  /**
   * If output value has minimum bound
   * @type {number}
   * @memberof TechnicalIndicatorsResponseMacdOutputValue
   */
  minRange?: number;
  /**
   * If output value has maximum bound
   * @type {number}
   * @memberof TechnicalIndicatorsResponseMacdOutputValue
   */
  maxRange?: number;
}

/**
 * @export
 */
export const TechnicalIndicatorsResponseMacdOutputValueDisplayEnum = {
  LINE: "line",
  HISTOGRAM: "histogram",
  CANDLE: "candle",
  POINTS: "points",
} as const;
export type TechnicalIndicatorsResponseMacdOutputValueDisplayEnum =
  (typeof TechnicalIndicatorsResponseMacdOutputValueDisplayEnum)[keyof typeof TechnicalIndicatorsResponseMacdOutputValueDisplayEnum];

/**
 * Check if a given object implements the TechnicalIndicatorsResponseMacdOutputValue interface.
 */
export function instanceOfTechnicalIndicatorsResponseMacdOutputValue(
  value: object,
): value is TechnicalIndicatorsResponseMacdOutputValue {
  return true;
}

export function TechnicalIndicatorsResponseMacdOutputValueFromJSON(
  json: any,
): TechnicalIndicatorsResponseMacdOutputValue {
  return TechnicalIndicatorsResponseMacdOutputValueFromJSONTyped(json, false);
}

export function TechnicalIndicatorsResponseMacdOutputValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TechnicalIndicatorsResponseMacdOutputValue {
  if (json == null) {
    return json;
  }
  return {
    defaultColor:
      json["default_color"] == null ? undefined : json["default_color"],
    display: json["display"] == null ? undefined : json["display"],
    minRange: json["min_range"] == null ? undefined : json["min_range"],
    maxRange: json["max_range"] == null ? undefined : json["max_range"],
  };
}

export function TechnicalIndicatorsResponseMacdOutputValueToJSON(
  json: any,
): TechnicalIndicatorsResponseMacdOutputValue {
  return TechnicalIndicatorsResponseMacdOutputValueToJSONTyped(json, false);
}

export function TechnicalIndicatorsResponseMacdOutputValueToJSONTyped(
  value?: TechnicalIndicatorsResponseMacdOutputValue | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    default_color: value["defaultColor"],
    display: value["display"],
    min_range: value["minRange"],
    max_range: value["maxRange"],
  };
}
