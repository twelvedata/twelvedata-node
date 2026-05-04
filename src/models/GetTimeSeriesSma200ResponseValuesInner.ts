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
 * @interface GetTimeSeriesSma200ResponseValuesInner
 */
export interface GetTimeSeriesSma200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseValuesInner
   */
  datetime: string;
  /**
   * SMA value
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseValuesInner
   */
  sma: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSma200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSma200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSma200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("sma" in value) || value["sma"] === undefined) return false;
  return true;
}

export function GetTimeSeriesSma200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSma200ResponseValuesInner {
  return GetTimeSeriesSma200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesSma200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSma200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    sma: json["sma"],
  };
}

export function GetTimeSeriesSma200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSma200ResponseValuesInner {
  return GetTimeSeriesSma200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesSma200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSma200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    sma: value["sma"],
  };
}
