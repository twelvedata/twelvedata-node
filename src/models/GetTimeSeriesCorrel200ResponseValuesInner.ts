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
 * @interface GetTimeSeriesCorrel200ResponseValuesInner
 */
export interface GetTimeSeriesCorrel200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseValuesInner
   */
  datetime: string;
  /**
   * Correl value
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseValuesInner
   */
  correl: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCorrel200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCorrel200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesCorrel200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesCorrel200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("correl" in value) || value["correl"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCorrel200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesCorrel200ResponseValuesInner {
  return GetTimeSeriesCorrel200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesCorrel200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCorrel200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    correl: json["correl"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesCorrel200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesCorrel200ResponseValuesInner {
  return GetTimeSeriesCorrel200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesCorrel200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesCorrel200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    correl: value["correl"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
