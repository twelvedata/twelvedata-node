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
 * @interface GetTimeSeriesStdDev200ResponseValuesInner
 */
export interface GetTimeSeriesStdDev200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseValuesInner
   */
  datetime: string;
  /**
   * Standard Deviation value
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseValuesInner
   */
  stddev: string;
}

/**
 * Check if a given object implements the GetTimeSeriesStdDev200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesStdDev200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesStdDev200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("stddev" in value) || value["stddev"] === undefined) return false;
  return true;
}

export function GetTimeSeriesStdDev200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesStdDev200ResponseValuesInner {
  return GetTimeSeriesStdDev200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesStdDev200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStdDev200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    stddev: json["stddev"],
  };
}

export function GetTimeSeriesStdDev200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesStdDev200ResponseValuesInner {
  return GetTimeSeriesStdDev200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesStdDev200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesStdDev200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    stddev: value["stddev"],
  };
}
