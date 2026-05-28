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
 * @interface GetTimeSeriesLog10200ResponseValuesInner
 */
export interface GetTimeSeriesLog10200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseValuesInner
   */
  datetime: string;
  /**
   * Log10 value
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseValuesInner
   */
  log10: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLog10200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesLog10200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesLog10200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("log10" in value) || value["log10"] === undefined) return false;
  return true;
}

export function GetTimeSeriesLog10200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesLog10200ResponseValuesInner {
  return GetTimeSeriesLog10200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesLog10200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLog10200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    log10: json["log10"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesLog10200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesLog10200ResponseValuesInner {
  return GetTimeSeriesLog10200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesLog10200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesLog10200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    log10: value["log10"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
