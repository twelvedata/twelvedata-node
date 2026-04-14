/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { TechnicalIndicatorsResponseMacdParameter } from "./TechnicalIndicatorsResponseMacdParameter";
import {
  TechnicalIndicatorsResponseMacdParameterFromJSON,
  TechnicalIndicatorsResponseMacdParameterFromJSONTyped,
  TechnicalIndicatorsResponseMacdParameterToJSON,
  TechnicalIndicatorsResponseMacdParameterToJSONTyped,
} from "./TechnicalIndicatorsResponseMacdParameter";

/**
 * An array of input parameters for the indicator
 * @export
 * @interface TechnicalIndicatorsResponseMacdParameters
 */
export interface TechnicalIndicatorsResponseMacdParameters {
  /**
   *
   * @type {TechnicalIndicatorsResponseMacdParameter}
   * @memberof TechnicalIndicatorsResponseMacdParameters
   */
  parameterName?: TechnicalIndicatorsResponseMacdParameter;
}

/**
 * Check if a given object implements the TechnicalIndicatorsResponseMacdParameters interface.
 */
export function instanceOfTechnicalIndicatorsResponseMacdParameters(
  value: object,
): value is TechnicalIndicatorsResponseMacdParameters {
  return true;
}

export function TechnicalIndicatorsResponseMacdParametersFromJSON(
  json: any,
): TechnicalIndicatorsResponseMacdParameters {
  return TechnicalIndicatorsResponseMacdParametersFromJSONTyped(json, false);
}

export function TechnicalIndicatorsResponseMacdParametersFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TechnicalIndicatorsResponseMacdParameters {
  if (json == null) {
    return json;
  }
  return {
    parameterName:
      json["parameter_name"] == null
        ? undefined
        : TechnicalIndicatorsResponseMacdParameterFromJSON(
            json["parameter_name"],
          ),
  };
}

export function TechnicalIndicatorsResponseMacdParametersToJSON(
  json: any,
): TechnicalIndicatorsResponseMacdParameters {
  return TechnicalIndicatorsResponseMacdParametersToJSONTyped(json, false);
}

export function TechnicalIndicatorsResponseMacdParametersToJSONTyped(
  value?: TechnicalIndicatorsResponseMacdParameters | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    parameter_name: TechnicalIndicatorsResponseMacdParameterToJSON(
      value["parameterName"],
    ),
  };
}
