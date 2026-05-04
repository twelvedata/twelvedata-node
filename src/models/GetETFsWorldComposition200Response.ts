/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorldComposition200ResponseEtf } from "./GetETFsWorldComposition200ResponseEtf";
import {
  GetETFsWorldComposition200ResponseEtfFromJSON,
  GetETFsWorldComposition200ResponseEtfFromJSONTyped,
  GetETFsWorldComposition200ResponseEtfToJSON,
  GetETFsWorldComposition200ResponseEtfToJSONTyped,
} from "./GetETFsWorldComposition200ResponseEtf";

/**
 *
 * @export
 * @interface GetETFsWorldComposition200Response
 */
export interface GetETFsWorldComposition200Response {
  /**
   *
   * @type {GetETFsWorldComposition200ResponseEtf}
   * @memberof GetETFsWorldComposition200Response
   */
  etf: GetETFsWorldComposition200ResponseEtf;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetETFsWorldComposition200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetETFsWorldComposition200Response interface.
 */
export function instanceOfGetETFsWorldComposition200Response(
  value: object,
): value is GetETFsWorldComposition200Response {
  if (!("etf" in value) || value["etf"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetETFsWorldComposition200ResponseFromJSON(
  json: any,
): GetETFsWorldComposition200Response {
  return GetETFsWorldComposition200ResponseFromJSONTyped(json, false);
}

export function GetETFsWorldComposition200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldComposition200Response {
  if (json == null) {
    return json;
  }
  return {
    etf: GetETFsWorldComposition200ResponseEtfFromJSON(json["etf"]),
    status: json["status"],
  };
}

export function GetETFsWorldComposition200ResponseToJSON(
  json: any,
): GetETFsWorldComposition200Response {
  return GetETFsWorldComposition200ResponseToJSONTyped(json, false);
}

export function GetETFsWorldComposition200ResponseToJSONTyped(
  value?: GetETFsWorldComposition200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    etf: GetETFsWorldComposition200ResponseEtfToJSON(value["etf"]),
    status: value["status"],
  };
}
