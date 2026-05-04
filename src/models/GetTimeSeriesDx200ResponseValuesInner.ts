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
 * @interface GetTimeSeriesDx200ResponseValuesInner
 */
export interface GetTimeSeriesDx200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseValuesInner
   */
  datetime: string;
  /**
   * dx value
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseValuesInner
   */
  dx: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDx200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesDx200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesDx200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("dx" in value) || value["dx"] === undefined) return false;
  return true;
}

export function GetTimeSeriesDx200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesDx200ResponseValuesInner {
  return GetTimeSeriesDx200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesDx200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDx200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    dx: json["dx"],
  };
}

export function GetTimeSeriesDx200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesDx200ResponseValuesInner {
  return GetTimeSeriesDx200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesDx200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesDx200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    dx: value["dx"],
  };
}
