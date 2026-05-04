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
 * @interface GetTimeSeriesMidPoint200ResponseValuesInner
 */
export interface GetTimeSeriesMidPoint200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseValuesInner
   */
  datetime: string;
  /**
   * Midpoint value
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseValuesInner
   */
  midpoint: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMidPoint200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMidPoint200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMidPoint200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("midpoint" in value) || value["midpoint"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMidPoint200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMidPoint200ResponseValuesInner {
  return GetTimeSeriesMidPoint200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMidPoint200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMidPoint200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    midpoint: json["midpoint"],
  };
}

export function GetTimeSeriesMidPoint200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMidPoint200ResponseValuesInner {
  return GetTimeSeriesMidPoint200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMidPoint200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMidPoint200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    midpoint: value["midpoint"],
  };
}
