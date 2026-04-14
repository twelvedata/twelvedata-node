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
 * @interface GetTimeSeriesWillR200ResponseValuesInner
 */
export interface GetTimeSeriesWillR200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesWillR200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Williams %R value
   * @type {string}
   * @memberof GetTimeSeriesWillR200ResponseValuesInner
   */
  willr?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesWillR200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesWillR200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesWillR200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesWillR200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesWillR200ResponseValuesInner {
  return GetTimeSeriesWillR200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesWillR200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWillR200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    willr: json["willr"] == null ? undefined : json["willr"],
  };
}

export function GetTimeSeriesWillR200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesWillR200ResponseValuesInner {
  return GetTimeSeriesWillR200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesWillR200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesWillR200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    willr: value["willr"],
  };
}
