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
 * @interface GetTimeSeriesMacd200ResponseValuesInner
 */
export interface GetTimeSeriesMacd200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  datetime: string;
  /**
   * MACD value
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  macd: string;
  /**
   * MACD signal line value
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  macdSignal: string;
  /**
   * MACD histogram value
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  macdHist: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMacd200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMacd200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMacd200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("macd" in value) || value["macd"] === undefined) return false;
  if (!("macdSignal" in value) || value["macdSignal"] === undefined)
    return false;
  if (!("macdHist" in value) || value["macdHist"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMacd200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMacd200ResponseValuesInner {
  return GetTimeSeriesMacd200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMacd200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacd200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    macd: json["macd"],
    macdSignal: json["macd_signal"],
    macdHist: json["macd_hist"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMacd200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMacd200ResponseValuesInner {
  return GetTimeSeriesMacd200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMacd200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMacd200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    macd: value["macd"],
    macd_signal: value["macdSignal"],
    macd_hist: value["macdHist"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
