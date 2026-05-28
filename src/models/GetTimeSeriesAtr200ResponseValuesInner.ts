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
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseValuesInner
   */
  volume?: string;
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
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
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
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
