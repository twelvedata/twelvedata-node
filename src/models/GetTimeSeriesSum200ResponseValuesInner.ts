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
 * @interface GetTimeSeriesSum200ResponseValuesInner
 */
export interface GetTimeSeriesSum200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Sum value
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseValuesInner
   */
  sum?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSum200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSum200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSum200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesSum200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSum200ResponseValuesInner {
  return GetTimeSeriesSum200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesSum200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSum200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    sum: json["sum"] == null ? undefined : json["sum"],
  };
}

export function GetTimeSeriesSum200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSum200ResponseValuesInner {
  return GetTimeSeriesSum200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesSum200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSum200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    sum: value["sum"],
  };
}
