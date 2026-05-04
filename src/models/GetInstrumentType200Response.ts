/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetInstrumentType200Response
 */
export interface GetInstrumentType200Response {
  /**
   * List of instrument types available at Twelve Data API.
   * @type {Array<string>}
   * @memberof GetInstrumentType200Response
   */
  result: Array<string>;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetInstrumentType200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetInstrumentType200Response interface.
 */
export function instanceOfGetInstrumentType200Response(
  value: object,
): value is GetInstrumentType200Response {
  if (!("result" in value) || value["result"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetInstrumentType200ResponseFromJSON(
  json: any,
): GetInstrumentType200Response {
  return GetInstrumentType200ResponseFromJSONTyped(json, false);
}

export function GetInstrumentType200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetInstrumentType200Response {
  if (json == null) {
    return json;
  }
  return {
    result: json["result"],
    status: json["status"],
  };
}

export function GetInstrumentType200ResponseToJSON(
  json: any,
): GetInstrumentType200Response {
  return GetInstrumentType200ResponseToJSONTyped(json, false);
}

export function GetInstrumentType200ResponseToJSONTyped(
  value?: GetInstrumentType200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    result: value["result"],
    status: value["status"],
  };
}
