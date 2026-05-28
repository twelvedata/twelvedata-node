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
 * @interface GetTimeSeriesRsi200ResponseValuesInner
 */
export interface GetTimeSeriesRsi200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseValuesInner
   */
  datetime: string;
  /**
   * RSI value
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseValuesInner
   */
  rsi: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRsi200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesRsi200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesRsi200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("rsi" in value) || value["rsi"] === undefined) return false;
  return true;
}

export function GetTimeSeriesRsi200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesRsi200ResponseValuesInner {
  return GetTimeSeriesRsi200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesRsi200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRsi200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    rsi: json["rsi"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesRsi200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesRsi200ResponseValuesInner {
  return GetTimeSeriesRsi200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesRsi200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesRsi200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    rsi: value["rsi"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
