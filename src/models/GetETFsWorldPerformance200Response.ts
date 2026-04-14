/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorldPerformance200ResponseEtf } from "./GetETFsWorldPerformance200ResponseEtf";
import {
  GetETFsWorldPerformance200ResponseEtfFromJSON,
  GetETFsWorldPerformance200ResponseEtfFromJSONTyped,
  GetETFsWorldPerformance200ResponseEtfToJSON,
  GetETFsWorldPerformance200ResponseEtfToJSONTyped,
} from "./GetETFsWorldPerformance200ResponseEtf";

/**
 *
 * @export
 * @interface GetETFsWorldPerformance200Response
 */
export interface GetETFsWorldPerformance200Response {
  /**
   *
   * @type {GetETFsWorldPerformance200ResponseEtf}
   * @memberof GetETFsWorldPerformance200Response
   */
  etf?: GetETFsWorldPerformance200ResponseEtf;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetETFsWorldPerformance200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetETFsWorldPerformance200Response interface.
 */
export function instanceOfGetETFsWorldPerformance200Response(
  value: object,
): value is GetETFsWorldPerformance200Response {
  return true;
}

export function GetETFsWorldPerformance200ResponseFromJSON(
  json: any,
): GetETFsWorldPerformance200Response {
  return GetETFsWorldPerformance200ResponseFromJSONTyped(json, false);
}

export function GetETFsWorldPerformance200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldPerformance200Response {
  if (json == null) {
    return json;
  }
  return {
    etf:
      json["etf"] == null
        ? undefined
        : GetETFsWorldPerformance200ResponseEtfFromJSON(json["etf"]),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetETFsWorldPerformance200ResponseToJSON(
  json: any,
): GetETFsWorldPerformance200Response {
  return GetETFsWorldPerformance200ResponseToJSONTyped(json, false);
}

export function GetETFsWorldPerformance200ResponseToJSONTyped(
  value?: GetETFsWorldPerformance200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    etf: GetETFsWorldPerformance200ResponseEtfToJSON(value["etf"]),
    status: value["status"],
  };
}
