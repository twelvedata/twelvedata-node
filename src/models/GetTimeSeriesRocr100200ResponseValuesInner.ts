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
 * @interface GetTimeSeriesRocr100200ResponseValuesInner
 */
export interface GetTimeSeriesRocr100200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseValuesInner
   */
  datetime?: string;
  /**
   * rocr100 value
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseValuesInner
   */
  rocr100?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRocr100200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesRocr100200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesRocr100200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesRocr100200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesRocr100200ResponseValuesInner {
  return GetTimeSeriesRocr100200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesRocr100200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocr100200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    rocr100: json["rocr100"] == null ? undefined : json["rocr100"],
  };
}

export function GetTimeSeriesRocr100200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesRocr100200ResponseValuesInner {
  return GetTimeSeriesRocr100200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesRocr100200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesRocr100200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    rocr100: value["rocr100"],
  };
}
