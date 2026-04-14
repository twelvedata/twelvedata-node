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
 * @interface GetTimeSeriesAdx200ResponseValuesInner
 */
export interface GetTimeSeriesAdx200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseValuesInner
   */
  datetime?: string;
  /**
   * ADX value
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseValuesInner
   */
  adx?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdx200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAdx200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAdx200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesAdx200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAdx200ResponseValuesInner {
  return GetTimeSeriesAdx200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAdx200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdx200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    adx: json["adx"] == null ? undefined : json["adx"],
  };
}

export function GetTimeSeriesAdx200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAdx200ResponseValuesInner {
  return GetTimeSeriesAdx200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAdx200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAdx200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    adx: value["adx"],
  };
}
