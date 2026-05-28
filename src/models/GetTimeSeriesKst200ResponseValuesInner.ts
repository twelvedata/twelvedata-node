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
 * @interface GetTimeSeriesKst200ResponseValuesInner
 */
export interface GetTimeSeriesKst200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  datetime: string;
  /**
   * KST value
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  kst: string;
  /**
   * KST signal value
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  kstSignal: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesKst200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesKst200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesKst200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("kst" in value) || value["kst"] === undefined) return false;
  if (!("kstSignal" in value) || value["kstSignal"] === undefined) return false;
  return true;
}

export function GetTimeSeriesKst200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesKst200ResponseValuesInner {
  return GetTimeSeriesKst200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesKst200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKst200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    kst: json["kst"],
    kstSignal: json["kst_signal"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesKst200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesKst200ResponseValuesInner {
  return GetTimeSeriesKst200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesKst200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesKst200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    kst: value["kst"],
    kst_signal: value["kstSignal"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
