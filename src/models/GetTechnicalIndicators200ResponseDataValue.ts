/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { TechnicalIndicatorsResponseMacdTinting } from "./TechnicalIndicatorsResponseMacdTinting";
import {
  TechnicalIndicatorsResponseMacdTintingFromJSON,
  TechnicalIndicatorsResponseMacdTintingFromJSONTyped,
  TechnicalIndicatorsResponseMacdTintingToJSON,
  TechnicalIndicatorsResponseMacdTintingToJSONTyped,
} from "./TechnicalIndicatorsResponseMacdTinting";
import type { TechnicalIndicatorsResponseMacdOutputValues } from "./TechnicalIndicatorsResponseMacdOutputValues";
import {
  TechnicalIndicatorsResponseMacdOutputValuesFromJSON,
  TechnicalIndicatorsResponseMacdOutputValuesFromJSONTyped,
  TechnicalIndicatorsResponseMacdOutputValuesToJSON,
  TechnicalIndicatorsResponseMacdOutputValuesToJSONTyped,
} from "./TechnicalIndicatorsResponseMacdOutputValues";
import type { TechnicalIndicatorsResponseMacdParameters } from "./TechnicalIndicatorsResponseMacdParameters";
import {
  TechnicalIndicatorsResponseMacdParametersFromJSON,
  TechnicalIndicatorsResponseMacdParametersFromJSONTyped,
  TechnicalIndicatorsResponseMacdParametersToJSON,
  TechnicalIndicatorsResponseMacdParametersToJSONTyped,
} from "./TechnicalIndicatorsResponseMacdParameters";

/**
 *
 * @export
 * @interface GetTechnicalIndicators200ResponseDataValue
 */
export interface GetTechnicalIndicators200ResponseDataValue {
  /**
   * If the indicator is tested, approved and is recommended for use returns <code>true</code>, otherwise returns <code>false</code>
   * @type {boolean}
   * @memberof GetTechnicalIndicators200ResponseDataValue
   */
  enable?: boolean;
  /**
   * Full indicator name
   * @type {string}
   * @memberof GetTechnicalIndicators200ResponseDataValue
   */
  fullName?: string;
  /**
   * Brief description of the indicator
   * @type {string}
   * @memberof GetTechnicalIndicators200ResponseDataValue
   */
  description?: string;
  /**
   * Group to which indicator belongs to
   * @type {string}
   * @memberof GetTechnicalIndicators200ResponseDataValue
   */
  type?: string;
  /**
   * If indicator should be plotted over price bars returns <code>true</code>, otherwise returns <code>false</code>
   * @type {boolean}
   * @memberof GetTechnicalIndicators200ResponseDataValue
   */
  overlay?: boolean;
  /**
   *
   * @type {TechnicalIndicatorsResponseMacdOutputValues}
   * @memberof GetTechnicalIndicators200ResponseDataValue
   */
  outputValues?: TechnicalIndicatorsResponseMacdOutputValues;
  /**
   *
   * @type {TechnicalIndicatorsResponseMacdParameters}
   * @memberof GetTechnicalIndicators200ResponseDataValue
   */
  parameters?: TechnicalIndicatorsResponseMacdParameters;
  /**
   *
   * @type {TechnicalIndicatorsResponseMacdTinting}
   * @memberof GetTechnicalIndicators200ResponseDataValue
   */
  tinting?: TechnicalIndicatorsResponseMacdTinting;
}

/**
 * Check if a given object implements the GetTechnicalIndicators200ResponseDataValue interface.
 */
export function instanceOfGetTechnicalIndicators200ResponseDataValue(
  value: object,
): value is GetTechnicalIndicators200ResponseDataValue {
  return true;
}

export function GetTechnicalIndicators200ResponseDataValueFromJSON(
  json: any,
): GetTechnicalIndicators200ResponseDataValue {
  return GetTechnicalIndicators200ResponseDataValueFromJSONTyped(json, false);
}

export function GetTechnicalIndicators200ResponseDataValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTechnicalIndicators200ResponseDataValue {
  if (json == null) {
    return json;
  }
  return {
    enable: json["enable"] == null ? undefined : json["enable"],
    fullName: json["full_name"] == null ? undefined : json["full_name"],
    description: json["description"] == null ? undefined : json["description"],
    type: json["type"] == null ? undefined : json["type"],
    overlay: json["overlay"] == null ? undefined : json["overlay"],
    outputValues:
      json["output_values"] == null
        ? undefined
        : TechnicalIndicatorsResponseMacdOutputValuesFromJSON(
            json["output_values"],
          ),
    parameters:
      json["parameters"] == null
        ? undefined
        : TechnicalIndicatorsResponseMacdParametersFromJSON(json["parameters"]),
    tinting:
      json["tinting"] == null
        ? undefined
        : TechnicalIndicatorsResponseMacdTintingFromJSON(json["tinting"]),
  };
}

export function GetTechnicalIndicators200ResponseDataValueToJSON(
  json: any,
): GetTechnicalIndicators200ResponseDataValue {
  return GetTechnicalIndicators200ResponseDataValueToJSONTyped(json, false);
}

export function GetTechnicalIndicators200ResponseDataValueToJSONTyped(
  value?: GetTechnicalIndicators200ResponseDataValue | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    enable: value["enable"],
    full_name: value["fullName"],
    description: value["description"],
    type: value["type"],
    overlay: value["overlay"],
    output_values: TechnicalIndicatorsResponseMacdOutputValuesToJSON(
      value["outputValues"],
    ),
    parameters: TechnicalIndicatorsResponseMacdParametersToJSON(
      value["parameters"],
    ),
    tinting: TechnicalIndicatorsResponseMacdTintingToJSON(value["tinting"]),
  };
}
