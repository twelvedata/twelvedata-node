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
 * @interface GetIntervals200Response
 */
export interface GetIntervals200Response {
  /**
   * List of available intervals
   * @type {Array<string>}
   * @memberof GetIntervals200Response
   */
  data: Array<string>;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetIntervals200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetIntervals200Response interface.
 */
export function instanceOfGetIntervals200Response(
  value: object,
): value is GetIntervals200Response {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetIntervals200ResponseFromJSON(
  json: any,
): GetIntervals200Response {
  return GetIntervals200ResponseFromJSONTyped(json, false);
}

export function GetIntervals200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetIntervals200Response {
  if (json == null) {
    return json;
  }
  return {
    data: json["data"],
    status: json["status"],
  };
}

export function GetIntervals200ResponseToJSON(
  json: any,
): GetIntervals200Response {
  return GetIntervals200ResponseToJSONTyped(json, false);
}

export function GetIntervals200ResponseToJSONTyped(
  value?: GetIntervals200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data: value["data"],
    status: value["status"],
  };
}
