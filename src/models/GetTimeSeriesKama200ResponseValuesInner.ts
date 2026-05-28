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
 * @interface GetTimeSeriesKama200ResponseValuesInner
 */
export interface GetTimeSeriesKama200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesKama200ResponseValuesInner
   */
  datetime: string;
  /**
   * Kama value
   * @type {string}
   * @memberof GetTimeSeriesKama200ResponseValuesInner
   */
  kama: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKama200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKama200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKama200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKama200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKama200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesKama200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesKama200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesKama200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("kama" in value) || value["kama"] === undefined) return false;
  return true;
}

export function GetTimeSeriesKama200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesKama200ResponseValuesInner {
  return GetTimeSeriesKama200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesKama200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKama200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    kama: json["kama"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesKama200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesKama200ResponseValuesInner {
  return GetTimeSeriesKama200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesKama200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesKama200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    kama: value["kama"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
