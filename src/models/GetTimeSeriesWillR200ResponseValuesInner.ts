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
 * @interface GetTimeSeriesWillR200ResponseValuesInner
 */
export interface GetTimeSeriesWillR200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesWillR200ResponseValuesInner
   */
  datetime: string;
  /**
   * Williams %R value
   * @type {string}
   * @memberof GetTimeSeriesWillR200ResponseValuesInner
   */
  willr: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesWillR200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesWillR200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesWillR200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesWillR200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesWillR200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesWillR200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesWillR200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesWillR200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("willr" in value) || value["willr"] === undefined) return false;
  return true;
}

export function GetTimeSeriesWillR200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesWillR200ResponseValuesInner {
  return GetTimeSeriesWillR200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesWillR200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWillR200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    willr: json["willr"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesWillR200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesWillR200ResponseValuesInner {
  return GetTimeSeriesWillR200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesWillR200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesWillR200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    willr: value["willr"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
