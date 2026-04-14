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
 * @interface GetTimeSeriesExp200ResponseValuesInner
 */
export interface GetTimeSeriesExp200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Exp value
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseValuesInner
   */
  exp?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesExp200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesExp200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesExp200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesExp200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesExp200ResponseValuesInner {
  return GetTimeSeriesExp200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesExp200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesExp200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    exp: json["exp"] == null ? undefined : json["exp"],
  };
}

export function GetTimeSeriesExp200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesExp200ResponseValuesInner {
  return GetTimeSeriesExp200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesExp200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesExp200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    exp: value["exp"],
  };
}
