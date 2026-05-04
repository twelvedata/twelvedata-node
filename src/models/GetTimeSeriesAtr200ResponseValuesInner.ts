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
 * @interface GetTimeSeriesAtr200ResponseValuesInner
 */
export interface GetTimeSeriesAtr200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseValuesInner
   */
  datetime: string;
  /**
   * ATR value
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseValuesInner
   */
  atr: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAtr200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAtr200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAtr200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("atr" in value) || value["atr"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAtr200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAtr200ResponseValuesInner {
  return GetTimeSeriesAtr200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAtr200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAtr200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    atr: json["atr"],
  };
}

export function GetTimeSeriesAtr200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAtr200ResponseValuesInner {
  return GetTimeSeriesAtr200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAtr200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAtr200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    atr: value["atr"],
  };
}
