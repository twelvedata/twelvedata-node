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
 * @interface GetTimeSeriesPercentB200ResponseValuesInner
 */
export interface GetTimeSeriesPercentB200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Percent_b value
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseValuesInner
   */
  percentB?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPercentB200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesPercentB200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesPercentB200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesPercentB200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesPercentB200ResponseValuesInner {
  return GetTimeSeriesPercentB200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesPercentB200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPercentB200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    percentB: json["percent_b"] == null ? undefined : json["percent_b"],
  };
}

export function GetTimeSeriesPercentB200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesPercentB200ResponseValuesInner {
  return GetTimeSeriesPercentB200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesPercentB200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesPercentB200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    percent_b: value["percentB"],
  };
}
