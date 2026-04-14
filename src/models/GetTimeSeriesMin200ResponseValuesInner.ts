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
 * @interface GetTimeSeriesMin200ResponseValuesInner
 */
export interface GetTimeSeriesMin200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Min value
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseValuesInner
   */
  min?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMin200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMin200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMin200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesMin200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMin200ResponseValuesInner {
  return GetTimeSeriesMin200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMin200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMin200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    min: json["min"] == null ? undefined : json["min"],
  };
}

export function GetTimeSeriesMin200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMin200ResponseValuesInner {
  return GetTimeSeriesMin200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMin200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMin200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    min: value["min"],
  };
}
