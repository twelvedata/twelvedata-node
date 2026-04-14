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
 * @interface GetTimeSeriesAdd200ResponseValuesInner
 */
export interface GetTimeSeriesAdd200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Add value
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseValuesInner
   */
  add?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdd200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAdd200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAdd200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesAdd200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAdd200ResponseValuesInner {
  return GetTimeSeriesAdd200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAdd200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdd200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    add: json["add"] == null ? undefined : json["add"],
  };
}

export function GetTimeSeriesAdd200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAdd200ResponseValuesInner {
  return GetTimeSeriesAdd200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAdd200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAdd200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    add: value["add"],
  };
}
