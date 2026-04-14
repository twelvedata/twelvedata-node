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
 * @interface GetTimeSeriesMax200ResponseValuesInner
 */
export interface GetTimeSeriesMax200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Max value
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseValuesInner
   */
  max?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMax200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMax200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMax200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesMax200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMax200ResponseValuesInner {
  return GetTimeSeriesMax200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMax200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMax200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    max: json["max"] == null ? undefined : json["max"],
  };
}

export function GetTimeSeriesMax200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMax200ResponseValuesInner {
  return GetTimeSeriesMax200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMax200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMax200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    max: value["max"],
  };
}
