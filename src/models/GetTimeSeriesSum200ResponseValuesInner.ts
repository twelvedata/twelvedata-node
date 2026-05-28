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
 * @interface GetTimeSeriesSum200ResponseValuesInner
 */
export interface GetTimeSeriesSum200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseValuesInner
   */
  datetime: string;
  /**
   * Sum value
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseValuesInner
   */
  sum: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSum200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSum200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSum200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("sum" in value) || value["sum"] === undefined) return false;
  return true;
}

export function GetTimeSeriesSum200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSum200ResponseValuesInner {
  return GetTimeSeriesSum200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesSum200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSum200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    sum: json["sum"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesSum200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSum200ResponseValuesInner {
  return GetTimeSeriesSum200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesSum200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSum200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    sum: value["sum"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
