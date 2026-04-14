/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorldRisk200ResponseEtf } from "./GetETFsWorldRisk200ResponseEtf";
import {
  GetETFsWorldRisk200ResponseEtfFromJSON,
  GetETFsWorldRisk200ResponseEtfFromJSONTyped,
  GetETFsWorldRisk200ResponseEtfToJSON,
  GetETFsWorldRisk200ResponseEtfToJSONTyped,
} from "./GetETFsWorldRisk200ResponseEtf";

/**
 *
 * @export
 * @interface GetETFsWorldRisk200Response
 */
export interface GetETFsWorldRisk200Response {
  /**
   *
   * @type {GetETFsWorldRisk200ResponseEtf}
   * @memberof GetETFsWorldRisk200Response
   */
  etf?: GetETFsWorldRisk200ResponseEtf;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetETFsWorldRisk200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetETFsWorldRisk200Response interface.
 */
export function instanceOfGetETFsWorldRisk200Response(
  value: object,
): value is GetETFsWorldRisk200Response {
  return true;
}

export function GetETFsWorldRisk200ResponseFromJSON(
  json: any,
): GetETFsWorldRisk200Response {
  return GetETFsWorldRisk200ResponseFromJSONTyped(json, false);
}

export function GetETFsWorldRisk200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldRisk200Response {
  if (json == null) {
    return json;
  }
  return {
    etf:
      json["etf"] == null
        ? undefined
        : GetETFsWorldRisk200ResponseEtfFromJSON(json["etf"]),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetETFsWorldRisk200ResponseToJSON(
  json: any,
): GetETFsWorldRisk200Response {
  return GetETFsWorldRisk200ResponseToJSONTyped(json, false);
}

export function GetETFsWorldRisk200ResponseToJSONTyped(
  value?: GetETFsWorldRisk200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    etf: GetETFsWorldRisk200ResponseEtfToJSON(value["etf"]),
    status: value["status"],
  };
}
