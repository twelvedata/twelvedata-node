/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorld200ResponseEtf } from "./GetETFsWorld200ResponseEtf";
import {
  GetETFsWorld200ResponseEtfFromJSON,
  GetETFsWorld200ResponseEtfFromJSONTyped,
  GetETFsWorld200ResponseEtfToJSON,
  GetETFsWorld200ResponseEtfToJSONTyped,
} from "./GetETFsWorld200ResponseEtf";

/**
 *
 * @export
 * @interface GetETFsWorld200Response
 */
export interface GetETFsWorld200Response {
  /**
   *
   * @type {GetETFsWorld200ResponseEtf}
   * @memberof GetETFsWorld200Response
   */
  etf?: GetETFsWorld200ResponseEtf;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetETFsWorld200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetETFsWorld200Response interface.
 */
export function instanceOfGetETFsWorld200Response(
  value: object,
): value is GetETFsWorld200Response {
  return true;
}

export function GetETFsWorld200ResponseFromJSON(
  json: any,
): GetETFsWorld200Response {
  return GetETFsWorld200ResponseFromJSONTyped(json, false);
}

export function GetETFsWorld200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200Response {
  if (json == null) {
    return json;
  }
  return {
    etf:
      json["etf"] == null
        ? undefined
        : GetETFsWorld200ResponseEtfFromJSON(json["etf"]),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetETFsWorld200ResponseToJSON(
  json: any,
): GetETFsWorld200Response {
  return GetETFsWorld200ResponseToJSONTyped(json, false);
}

export function GetETFsWorld200ResponseToJSONTyped(
  value?: GetETFsWorld200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    etf: GetETFsWorld200ResponseEtfToJSON(value["etf"]),
    status: value["status"],
  };
}
