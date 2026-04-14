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
 * @interface GetTimeSeriesEma200ResponseValuesInner
 */
export interface GetTimeSeriesEma200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseValuesInner
   */
  datetime?: string;
  /**
   * EMA value
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseValuesInner
   */
  ema?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesEma200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesEma200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesEma200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesEma200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesEma200ResponseValuesInner {
  return GetTimeSeriesEma200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesEma200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesEma200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    ema: json["ema"] == null ? undefined : json["ema"],
  };
}

export function GetTimeSeriesEma200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesEma200ResponseValuesInner {
  return GetTimeSeriesEma200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesEma200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesEma200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ema: value["ema"],
  };
}
