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
 * @interface GetETFsFamily200Response
 */
export interface GetETFsFamily200Response {
  /**
   * List of ETFs by country
   * @type {{ [key: string]: Array<string>; }}
   * @memberof GetETFsFamily200Response
   */
  result?: { [key: string]: Array<string> };
  /**
   * Status of the response
   * @type {string}
   * @memberof GetETFsFamily200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetETFsFamily200Response interface.
 */
export function instanceOfGetETFsFamily200Response(
  value: object,
): value is GetETFsFamily200Response {
  return true;
}

export function GetETFsFamily200ResponseFromJSON(
  json: any,
): GetETFsFamily200Response {
  return GetETFsFamily200ResponseFromJSONTyped(json, false);
}

export function GetETFsFamily200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsFamily200Response {
  if (json == null) {
    return json;
  }
  return {
    result: json["result"] == null ? undefined : json["result"],
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetETFsFamily200ResponseToJSON(
  json: any,
): GetETFsFamily200Response {
  return GetETFsFamily200ResponseToJSONTyped(json, false);
}

export function GetETFsFamily200ResponseToJSONTyped(
  value?: GetETFsFamily200Response | null,
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
