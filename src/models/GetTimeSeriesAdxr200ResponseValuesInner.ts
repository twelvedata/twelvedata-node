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
 * @interface GetTimeSeriesAdxr200ResponseValuesInner
 */
export interface GetTimeSeriesAdxr200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAdxr200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Adxr value
   * @type {string}
   * @memberof GetTimeSeriesAdxr200ResponseValuesInner
   */
  adxr?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdxr200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAdxr200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAdxr200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesAdxr200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAdxr200ResponseValuesInner {
  return GetTimeSeriesAdxr200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAdxr200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdxr200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    adxr: json["adxr"] == null ? undefined : json["adxr"],
  };
}

export function GetTimeSeriesAdxr200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAdxr200ResponseValuesInner {
  return GetTimeSeriesAdxr200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAdxr200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAdxr200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    adxr: value["adxr"],
  };
}
