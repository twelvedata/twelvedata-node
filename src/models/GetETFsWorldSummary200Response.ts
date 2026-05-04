/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorldSummary200ResponseEtf } from "./GetETFsWorldSummary200ResponseEtf";
import {
  GetETFsWorldSummary200ResponseEtfFromJSON,
  GetETFsWorldSummary200ResponseEtfFromJSONTyped,
  GetETFsWorldSummary200ResponseEtfToJSON,
  GetETFsWorldSummary200ResponseEtfToJSONTyped,
} from "./GetETFsWorldSummary200ResponseEtf";

/**
 *
 * @export
 * @interface GetETFsWorldSummary200Response
 */
export interface GetETFsWorldSummary200Response {
  /**
   *
   * @type {GetETFsWorldSummary200ResponseEtf}
   * @memberof GetETFsWorldSummary200Response
   */
  etf: GetETFsWorldSummary200ResponseEtf;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetETFsWorldSummary200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetETFsWorldSummary200Response interface.
 */
export function instanceOfGetETFsWorldSummary200Response(
  value: object,
): value is GetETFsWorldSummary200Response {
  if (!("etf" in value) || value["etf"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetETFsWorldSummary200ResponseFromJSON(
  json: any,
): GetETFsWorldSummary200Response {
  return GetETFsWorldSummary200ResponseFromJSONTyped(json, false);
}

export function GetETFsWorldSummary200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldSummary200Response {
  if (json == null) {
    return json;
  }
  return {
    etf: GetETFsWorldSummary200ResponseEtfFromJSON(json["etf"]),
    status: json["status"],
  };
}

export function GetETFsWorldSummary200ResponseToJSON(
  json: any,
): GetETFsWorldSummary200Response {
  return GetETFsWorldSummary200ResponseToJSONTyped(json, false);
}

export function GetETFsWorldSummary200ResponseToJSONTyped(
  value?: GetETFsWorldSummary200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    etf: GetETFsWorldSummary200ResponseEtfToJSON(value["etf"]),
    status: value["status"],
  };
}
