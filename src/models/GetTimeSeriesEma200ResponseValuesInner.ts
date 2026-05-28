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
  datetime: string;
  /**
   * EMA value
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseValuesInner
   */
  ema: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesEma200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesEma200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesEma200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("ema" in value) || value["ema"] === undefined) return false;
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
    datetime: json["datetime"],
    ema: json["ema"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
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
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
