/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * An array of tinting values used for proper indicator coloring
 * @export
 * @interface TechnicalIndicatorsResponseMacdTinting
 */
export interface TechnicalIndicatorsResponseMacdTinting {
  /**
   * How the tinting should be rendered
   * @type {string}
   * @memberof TechnicalIndicatorsResponseMacdTinting
   */
  display?: string;
  /**
   * Hex color code for the tinting
   * @type {string}
   * @memberof TechnicalIndicatorsResponseMacdTinting
   */
  color?: string;
  /**
   * Transparency level, float value from <code>0</code> to <code>1</code>
   * @type {number}
   * @memberof TechnicalIndicatorsResponseMacdTinting
   */
  transparency?: number;
  /**
   * Lower bound of tinting, can be a number or a return parameter name
   * @type {object}
   * @memberof TechnicalIndicatorsResponseMacdTinting
   */
  lowerBound?: object;
  /**
   * Upper bound of tinting, can be a number or a return parameter name
   * @type {object}
   * @memberof TechnicalIndicatorsResponseMacdTinting
   */
  upperBound?: object;
}

/**
 * Check if a given object implements the TechnicalIndicatorsResponseMacdTinting interface.
 */
export function instanceOfTechnicalIndicatorsResponseMacdTinting(
  value: object,
): value is TechnicalIndicatorsResponseMacdTinting {
  return true;
}

export function TechnicalIndicatorsResponseMacdTintingFromJSON(
  json: any,
): TechnicalIndicatorsResponseMacdTinting {
  return TechnicalIndicatorsResponseMacdTintingFromJSONTyped(json, false);
}

export function TechnicalIndicatorsResponseMacdTintingFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TechnicalIndicatorsResponseMacdTinting {
  if (json == null) {
    return json;
  }
  return {
    display: json["display"] == null ? undefined : json["display"],
    color: json["color"] == null ? undefined : json["color"],
    transparency:
      json["transparency"] == null ? undefined : json["transparency"],
    lowerBound: json["lower_bound"] == null ? undefined : json["lower_bound"],
    upperBound: json["upper_bound"] == null ? undefined : json["upper_bound"],
  };
}

export function TechnicalIndicatorsResponseMacdTintingToJSON(
  json: any,
): TechnicalIndicatorsResponseMacdTinting {
  return TechnicalIndicatorsResponseMacdTintingToJSONTyped(json, false);
}

export function TechnicalIndicatorsResponseMacdTintingToJSONTyped(
  value?: TechnicalIndicatorsResponseMacdTinting | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    display: value["display"],
    color: value["color"],
    transparency: value["transparency"],
    lower_bound: value["lowerBound"],
    upper_bound: value["upperBound"],
  };
}
