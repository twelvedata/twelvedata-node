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
 * @interface GetTimeSeriesT3ma200ResponseValuesInner
 */
export interface GetTimeSeriesT3ma200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseValuesInner
   */
  datetime: string;
  /**
   * T3MA value
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseValuesInner
   */
  t3ma: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesT3ma200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesT3ma200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesT3ma200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("t3ma" in value) || value["t3ma"] === undefined) return false;
  return true;
}

export function GetTimeSeriesT3ma200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesT3ma200ResponseValuesInner {
  return GetTimeSeriesT3ma200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesT3ma200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesT3ma200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    t3ma: json["t3ma"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesT3ma200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesT3ma200ResponseValuesInner {
  return GetTimeSeriesT3ma200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesT3ma200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesT3ma200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    t3ma: value["t3ma"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
