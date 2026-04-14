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
 * @interface GetTimeSeriesApo200ResponseValuesInner
 */
export interface GetTimeSeriesApo200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseValuesInner
   */
  datetime?: string;
  /**
   * APO value
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseValuesInner
   */
  apo?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesApo200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesApo200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesApo200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesApo200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesApo200ResponseValuesInner {
  return GetTimeSeriesApo200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesApo200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesApo200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    apo: json["apo"] == null ? undefined : json["apo"],
  };
}

export function GetTimeSeriesApo200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesApo200ResponseValuesInner {
  return GetTimeSeriesApo200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesApo200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesApo200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    apo: value["apo"],
  };
}
