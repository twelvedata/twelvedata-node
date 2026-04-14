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
 * @interface GetTimeSeriesWma200ResponseValuesInner
 */
export interface GetTimeSeriesWma200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseValuesInner
   */
  datetime?: string;
  /**
   * WMA value
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseValuesInner
   */
  wma?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesWma200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesWma200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesWma200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesWma200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesWma200ResponseValuesInner {
  return GetTimeSeriesWma200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesWma200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWma200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    wma: json["wma"] == null ? undefined : json["wma"],
  };
}

export function GetTimeSeriesWma200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesWma200ResponseValuesInner {
  return GetTimeSeriesWma200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesWma200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesWma200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    wma: value["wma"],
  };
}
