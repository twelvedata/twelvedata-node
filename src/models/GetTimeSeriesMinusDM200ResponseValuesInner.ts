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
 * @interface GetTimeSeriesMinusDM200ResponseValuesInner
 */
export interface GetTimeSeriesMinusDM200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseValuesInner
   */
  datetime: string;
  /**
   * Minus Directional Movement value
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseValuesInner
   */
  minusDm: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinusDM200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMinusDM200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMinusDM200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("minusDm" in value) || value["minusDm"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMinusDM200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMinusDM200ResponseValuesInner {
  return GetTimeSeriesMinusDM200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMinusDM200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinusDM200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    minusDm: json["minus_dm"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMinusDM200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMinusDM200ResponseValuesInner {
  return GetTimeSeriesMinusDM200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMinusDM200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMinusDM200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    minus_dm: value["minusDm"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
