/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { TechnicalIndicatorsResponseMacdOutputValue } from "./TechnicalIndicatorsResponseMacdOutputValue";
import {
  TechnicalIndicatorsResponseMacdOutputValueFromJSON,
  TechnicalIndicatorsResponseMacdOutputValueFromJSONTyped,
  TechnicalIndicatorsResponseMacdOutputValueToJSON,
  TechnicalIndicatorsResponseMacdOutputValueToJSONTyped,
} from "./TechnicalIndicatorsResponseMacdOutputValue";

/**
 * An array of output values
 * @export
 * @interface TechnicalIndicatorsResponseMacdOutputValues
 */
export interface TechnicalIndicatorsResponseMacdOutputValues {
  /**
   *
   * @type {TechnicalIndicatorsResponseMacdOutputValue}
   * @memberof TechnicalIndicatorsResponseMacdOutputValues
   */
  parameterName?: TechnicalIndicatorsResponseMacdOutputValue;
}

/**
 * Check if a given object implements the TechnicalIndicatorsResponseMacdOutputValues interface.
 */
export function instanceOfTechnicalIndicatorsResponseMacdOutputValues(
  value: object,
): value is TechnicalIndicatorsResponseMacdOutputValues {
  return true;
}

export function TechnicalIndicatorsResponseMacdOutputValuesFromJSON(
  json: any,
): TechnicalIndicatorsResponseMacdOutputValues {
  return TechnicalIndicatorsResponseMacdOutputValuesFromJSONTyped(json, false);
}

export function TechnicalIndicatorsResponseMacdOutputValuesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TechnicalIndicatorsResponseMacdOutputValues {
  if (json == null) {
    return json;
  }
  return {
    parameterName:
      json["parameter_name"] == null
        ? undefined
        : TechnicalIndicatorsResponseMacdOutputValueFromJSON(
            json["parameter_name"],
          ),
  };
}

export function TechnicalIndicatorsResponseMacdOutputValuesToJSON(
  json: any,
): TechnicalIndicatorsResponseMacdOutputValues {
  return TechnicalIndicatorsResponseMacdOutputValuesToJSONTyped(json, false);
}

export function TechnicalIndicatorsResponseMacdOutputValuesToJSONTyped(
  value?: TechnicalIndicatorsResponseMacdOutputValues | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    parameter_name: TechnicalIndicatorsResponseMacdOutputValueToJSON(
      value["parameterName"],
    ),
  };
}
