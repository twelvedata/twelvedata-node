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
 * @interface GetETFsType200Response
 */
export interface GetETFsType200Response {
  /**
   * List of ETFs by market
   * @type {{ [key: string]: Array<string>; }}
   * @memberof GetETFsType200Response
   */
  result?: { [key: string]: Array<string> };
  /**
   * Status of the response
   * @type {string}
   * @memberof GetETFsType200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetETFsType200Response interface.
 */
export function instanceOfGetETFsType200Response(
  value: object,
): value is GetETFsType200Response {
  return true;
}

export function GetETFsType200ResponseFromJSON(
  json: any,
): GetETFsType200Response {
  return GetETFsType200ResponseFromJSONTyped(json, false);
}

export function GetETFsType200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsType200Response {
  if (json == null) {
    return json;
  }
  return {
    result: json["result"] == null ? undefined : json["result"],
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetETFsType200ResponseToJSON(
  json: any,
): GetETFsType200Response {
  return GetETFsType200ResponseToJSONTyped(json, false);
}

export function GetETFsType200ResponseToJSONTyped(
  value?: GetETFsType200Response | null,
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
