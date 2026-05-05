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
 * @interface GetEarliestTimestamp200Response
 */
export interface GetEarliestTimestamp200Response {
  /**
   * Datetime converted to UNIX timestamp
   * @type {number}
   * @memberof GetEarliestTimestamp200Response
   */
  unixTime: number;
  /**
   * Earliest datetime, the format depends on interval
   * @type {string}
   * @memberof GetEarliestTimestamp200Response
   */
  datetime: string;
}

/**
 * Check if a given object implements the GetEarliestTimestamp200Response interface.
 */
export function instanceOfGetEarliestTimestamp200Response(
  value: object,
): value is GetEarliestTimestamp200Response {
  if (!("unixTime" in value) || value["unixTime"] === undefined) return false;
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  return true;
}

export function GetEarliestTimestamp200ResponseFromJSON(
  json: any,
): GetEarliestTimestamp200Response {
  return GetEarliestTimestamp200ResponseFromJSONTyped(json, false);
}

export function GetEarliestTimestamp200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEarliestTimestamp200Response {
  if (json == null) {
    return json;
  }
  return {
    unixTime: json["unix_time"],
    datetime: json["datetime"],
  };
}

export function GetEarliestTimestamp200ResponseToJSON(
  json: any,
): GetEarliestTimestamp200Response {
  return GetEarliestTimestamp200ResponseToJSONTyped(json, false);
}

export function GetEarliestTimestamp200ResponseToJSONTyped(
  value?: GetEarliestTimestamp200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    unix_time: value["unixTime"],
    datetime: value["datetime"],
  };
}
