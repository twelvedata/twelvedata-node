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
 * @interface GetTimeSeriesMa200ResponseValuesInner
 */
export interface GetTimeSeriesMa200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseValuesInner
   */
  datetime: string;
  /**
   * MA value
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseValuesInner
   */
  ma: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMa200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMa200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMa200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("ma" in value) || value["ma"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMa200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMa200ResponseValuesInner {
  return GetTimeSeriesMa200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMa200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMa200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    ma: json["ma"],
  };
}

export function GetTimeSeriesMa200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMa200ResponseValuesInner {
  return GetTimeSeriesMa200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMa200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMa200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ma: value["ma"],
  };
}
