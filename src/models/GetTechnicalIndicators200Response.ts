/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTechnicalIndicators200ResponseDataValue } from "./GetTechnicalIndicators200ResponseDataValue";
import {
  GetTechnicalIndicators200ResponseDataValueFromJSON,
  GetTechnicalIndicators200ResponseDataValueFromJSONTyped,
  GetTechnicalIndicators200ResponseDataValueToJSON,
  GetTechnicalIndicators200ResponseDataValueToJSONTyped,
} from "./GetTechnicalIndicators200ResponseDataValue";

/**
 *
 * @export
 * @interface GetTechnicalIndicators200Response
 */
export interface GetTechnicalIndicators200Response {
  /**
   * Map of technical indicators available at Twelve Data API
   * @type {{ [key: string]: GetTechnicalIndicators200ResponseDataValue; }}
   * @memberof GetTechnicalIndicators200Response
   */
  data?: { [key: string]: GetTechnicalIndicators200ResponseDataValue };
  /**
   * Response status
   * @type {string}
   * @memberof GetTechnicalIndicators200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTechnicalIndicators200Response interface.
 */
export function instanceOfGetTechnicalIndicators200Response(
  value: object,
): value is GetTechnicalIndicators200Response {
  return true;
}

export function GetTechnicalIndicators200ResponseFromJSON(
  json: any,
): GetTechnicalIndicators200Response {
  return GetTechnicalIndicators200ResponseFromJSONTyped(json, false);
}

export function GetTechnicalIndicators200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTechnicalIndicators200Response {
  if (json == null) {
    return json;
  }
  return {
    data:
      json["data"] == null
        ? undefined
        : mapValues(
            json["data"],
            GetTechnicalIndicators200ResponseDataValueFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTechnicalIndicators200ResponseToJSON(
  json: any,
): GetTechnicalIndicators200Response {
  return GetTechnicalIndicators200ResponseToJSONTyped(json, false);
}

export function GetTechnicalIndicators200ResponseToJSONTyped(
  value?: GetTechnicalIndicators200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data:
      value["data"] == null
        ? undefined
        : mapValues(
            value["data"],
            GetTechnicalIndicators200ResponseDataValueToJSON,
          ),
    status: value["status"],
  };
}
