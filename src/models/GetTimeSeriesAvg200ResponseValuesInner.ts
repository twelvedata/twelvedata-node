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
 * @interface GetTimeSeriesAvg200ResponseValuesInner
 */
export interface GetTimeSeriesAvg200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseValuesInner
   */
  datetime: string;
  /**
   * Avg value
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseValuesInner
   */
  avg: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAvg200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAvg200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAvg200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("avg" in value) || value["avg"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAvg200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAvg200ResponseValuesInner {
  return GetTimeSeriesAvg200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAvg200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAvg200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    avg: json["avg"],
  };
}

export function GetTimeSeriesAvg200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAvg200ResponseValuesInner {
  return GetTimeSeriesAvg200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAvg200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAvg200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    avg: value["avg"],
  };
}
