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
 * @interface GetTimeSeriesApo200ResponseValuesInner
 */
export interface GetTimeSeriesApo200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseValuesInner
   */
  datetime: string;
  /**
   * APO value
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseValuesInner
   */
  apo: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesApo200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesApo200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesApo200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("apo" in value) || value["apo"] === undefined) return false;
  return true;
}

export function GetTimeSeriesApo200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesApo200ResponseValuesInner {
  return GetTimeSeriesApo200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesApo200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesApo200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    apo: json["apo"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesApo200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesApo200ResponseValuesInner {
  return GetTimeSeriesApo200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesApo200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesApo200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    apo: value["apo"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
