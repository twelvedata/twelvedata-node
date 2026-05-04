/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetEarningsCalendar200ResponseEarningsValueInner } from "./GetEarningsCalendar200ResponseEarningsValueInner";
import {
  GetEarningsCalendar200ResponseEarningsValueInnerFromJSON,
  GetEarningsCalendar200ResponseEarningsValueInnerFromJSONTyped,
  GetEarningsCalendar200ResponseEarningsValueInnerToJSON,
  GetEarningsCalendar200ResponseEarningsValueInnerToJSONTyped,
} from "./GetEarningsCalendar200ResponseEarningsValueInner";

/**
 *
 * @export
 * @interface GetEarningsCalendar200Response
 */
export interface GetEarningsCalendar200Response {
  /**
   * Map of dates to earnings data
   * @type {{ [key: string]: Array<GetEarningsCalendar200ResponseEarningsValueInner>; }}
   * @memberof GetEarningsCalendar200Response
   */
  earnings: {
    [key: string]: Array<GetEarningsCalendar200ResponseEarningsValueInner>;
  };
  /**
   * Response status
   * @type {string}
   * @memberof GetEarningsCalendar200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetEarningsCalendar200Response interface.
 */
export function instanceOfGetEarningsCalendar200Response(
  value: object,
): value is GetEarningsCalendar200Response {
  if (!("earnings" in value) || value["earnings"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetEarningsCalendar200ResponseFromJSON(
  json: any,
): GetEarningsCalendar200Response {
  return GetEarningsCalendar200ResponseFromJSONTyped(json, false);
}

export function GetEarningsCalendar200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEarningsCalendar200Response {
  if (json == null) {
    return json;
  }
  return {
    earnings: json["earnings"],
    status: json["status"],
  };
}

export function GetEarningsCalendar200ResponseToJSON(
  json: any,
): GetEarningsCalendar200Response {
  return GetEarningsCalendar200ResponseToJSONTyped(json, false);
}

export function GetEarningsCalendar200ResponseToJSONTyped(
  value?: GetEarningsCalendar200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    earnings: value["earnings"],
    status: value["status"],
  };
}
