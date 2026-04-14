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
 * @interface GetTimeSeriesMinusDI200ResponseValuesInner
 */
export interface GetTimeSeriesMinusDI200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Minus_di value
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200ResponseValuesInner
   */
  minusDi?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinusDI200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMinusDI200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMinusDI200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesMinusDI200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMinusDI200ResponseValuesInner {
  return GetTimeSeriesMinusDI200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMinusDI200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinusDI200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    minusDi: json["minus_di"] == null ? undefined : json["minus_di"],
  };
}

export function GetTimeSeriesMinusDI200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMinusDI200ResponseValuesInner {
  return GetTimeSeriesMinusDI200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMinusDI200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMinusDI200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    minus_di: value["minusDi"],
  };
}
