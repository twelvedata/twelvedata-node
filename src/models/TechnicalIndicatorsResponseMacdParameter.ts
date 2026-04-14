/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Input parameter name. Example values: <code>series_type</code>, <code>fast_period</code>, <code>slow_period</code>, <code>time_period</code>, <code>signal_period</code>
 * @export
 * @interface TechnicalIndicatorsResponseMacdParameter
 */
export interface TechnicalIndicatorsResponseMacdParameter {
  /**
   * Specifies parameter value set by default
   * @type {number}
   * @memberof TechnicalIndicatorsResponseMacdParameter
   */
  _default?: number;
  /**
   * If the parameter has upper bound in order to ensure correct calculation
   * @type {number}
   * @memberof TechnicalIndicatorsResponseMacdParameter
   */
  maxRange?: number;
  /**
   * If the parameter has lower bound in order to ensure correct calculation
   * @type {number}
   * @memberof TechnicalIndicatorsResponseMacdParameter
   */
  minRange?: number;
  /**
   * An array of available parameter values
   * @type {Array<string>}
   * @memberof TechnicalIndicatorsResponseMacdParameter
   */
  range?: Array<string>;
  /**
   * Type of parameter might be <code>string</code>, <code>int</code>, <code>float</code> or <code>array</code>
   * @type {string}
   * @memberof TechnicalIndicatorsResponseMacdParameter
   */
  type?: string;
}

/**
 * Check if a given object implements the TechnicalIndicatorsResponseMacdParameter interface.
 */
export function instanceOfTechnicalIndicatorsResponseMacdParameter(
  value: object,
): value is TechnicalIndicatorsResponseMacdParameter {
  return true;
}

export function TechnicalIndicatorsResponseMacdParameterFromJSON(
  json: any,
): TechnicalIndicatorsResponseMacdParameter {
  return TechnicalIndicatorsResponseMacdParameterFromJSONTyped(json, false);
}

export function TechnicalIndicatorsResponseMacdParameterFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TechnicalIndicatorsResponseMacdParameter {
  if (json == null) {
    return json;
  }
  return {
    _default: json["default"] == null ? undefined : json["default"],
    maxRange: json["max_range"] == null ? undefined : json["max_range"],
    minRange: json["min_range"] == null ? undefined : json["min_range"],
    range: json["range"] == null ? undefined : json["range"],
    type: json["type"] == null ? undefined : json["type"],
  };
}

export function TechnicalIndicatorsResponseMacdParameterToJSON(
  json: any,
): TechnicalIndicatorsResponseMacdParameter {
  return TechnicalIndicatorsResponseMacdParameterToJSONTyped(json, false);
}

export function TechnicalIndicatorsResponseMacdParameterToJSONTyped(
  value?: TechnicalIndicatorsResponseMacdParameter | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    default: value["_default"],
    max_range: value["maxRange"],
    min_range: value["minRange"],
    range: value["range"],
    type: value["type"],
  };
}
