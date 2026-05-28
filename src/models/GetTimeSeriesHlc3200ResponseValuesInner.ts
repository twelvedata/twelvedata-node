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
 * @interface GetTimeSeriesHlc3200ResponseValuesInner
 */
export interface GetTimeSeriesHlc3200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseValuesInner
   */
  datetime: string;
  /**
   * hlc3 value
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseValuesInner
   */
  hlc3: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHlc3200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesHlc3200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesHlc3200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("hlc3" in value) || value["hlc3"] === undefined) return false;
  return true;
}

export function GetTimeSeriesHlc3200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesHlc3200ResponseValuesInner {
  return GetTimeSeriesHlc3200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesHlc3200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHlc3200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    hlc3: json["hlc3"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesHlc3200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesHlc3200ResponseValuesInner {
  return GetTimeSeriesHlc3200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesHlc3200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesHlc3200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    hlc3: value["hlc3"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
