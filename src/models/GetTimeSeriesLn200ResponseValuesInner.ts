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
 * @interface GetTimeSeriesLn200ResponseValuesInner
 */
export interface GetTimeSeriesLn200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesLn200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Natural logarithm value
   * @type {string}
   * @memberof GetTimeSeriesLn200ResponseValuesInner
   */
  ln?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLn200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesLn200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesLn200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesLn200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesLn200ResponseValuesInner {
  return GetTimeSeriesLn200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesLn200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLn200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    ln: json["ln"] == null ? undefined : json["ln"],
  };
}

export function GetTimeSeriesLn200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesLn200ResponseValuesInner {
  return GetTimeSeriesLn200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesLn200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesLn200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ln: value["ln"],
  };
}
