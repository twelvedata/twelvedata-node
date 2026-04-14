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
 * @interface GetTimeSeriesTrima200ResponseValuesInner
 */
export interface GetTimeSeriesTrima200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseValuesInner
   */
  datetime?: string;
  /**
   * TRIMA value
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseValuesInner
   */
  trima?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTrima200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesTrima200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesTrima200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesTrima200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesTrima200ResponseValuesInner {
  return GetTimeSeriesTrima200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesTrima200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTrima200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    trima: json["trima"] == null ? undefined : json["trima"],
  };
}

export function GetTimeSeriesTrima200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesTrima200ResponseValuesInner {
  return GetTimeSeriesTrima200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesTrima200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesTrima200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    trima: value["trima"],
  };
}
