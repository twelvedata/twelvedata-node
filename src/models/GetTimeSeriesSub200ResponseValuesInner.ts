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
 * @interface GetTimeSeriesSub200ResponseValuesInner
 */
export interface GetTimeSeriesSub200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseValuesInner
   */
  datetime?: string;
  /**
   * SUB value
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseValuesInner
   */
  sub?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSub200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSub200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSub200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesSub200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSub200ResponseValuesInner {
  return GetTimeSeriesSub200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesSub200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSub200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    sub: json["sub"] == null ? undefined : json["sub"],
  };
}

export function GetTimeSeriesSub200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSub200ResponseValuesInner {
  return GetTimeSeriesSub200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesSub200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSub200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    sub: value["sub"],
  };
}
