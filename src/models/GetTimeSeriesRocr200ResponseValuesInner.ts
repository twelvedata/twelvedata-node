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
 * @interface GetTimeSeriesRocr200ResponseValuesInner
 */
export interface GetTimeSeriesRocr200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesRocr200ResponseValuesInner
   */
  datetime?: string;
  /**
   * ROCR value
   * @type {string}
   * @memberof GetTimeSeriesRocr200ResponseValuesInner
   */
  rocr?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRocr200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesRocr200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesRocr200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesRocr200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesRocr200ResponseValuesInner {
  return GetTimeSeriesRocr200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesRocr200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocr200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    rocr: json["rocr"] == null ? undefined : json["rocr"],
  };
}

export function GetTimeSeriesRocr200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesRocr200ResponseValuesInner {
  return GetTimeSeriesRocr200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesRocr200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesRocr200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    rocr: value["rocr"],
  };
}
