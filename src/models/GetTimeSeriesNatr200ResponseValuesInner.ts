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
 * @interface GetTimeSeriesNatr200ResponseValuesInner
 */
export interface GetTimeSeriesNatr200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseValuesInner
   */
  datetime?: string;
  /**
   * natr value
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseValuesInner
   */
  natr?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesNatr200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesNatr200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesNatr200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesNatr200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesNatr200ResponseValuesInner {
  return GetTimeSeriesNatr200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesNatr200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesNatr200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    natr: json["natr"] == null ? undefined : json["natr"],
  };
}

export function GetTimeSeriesNatr200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesNatr200ResponseValuesInner {
  return GetTimeSeriesNatr200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesNatr200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesNatr200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    natr: value["natr"],
  };
}
