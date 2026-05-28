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
 * @interface GetTimeSeriesWma200ResponseValuesInner
 */
export interface GetTimeSeriesWma200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseValuesInner
   */
  datetime: string;
  /**
   * WMA value
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseValuesInner
   */
  wma: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesWma200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesWma200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesWma200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("wma" in value) || value["wma"] === undefined) return false;
  return true;
}

export function GetTimeSeriesWma200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesWma200ResponseValuesInner {
  return GetTimeSeriesWma200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesWma200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWma200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    wma: json["wma"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesWma200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesWma200ResponseValuesInner {
  return GetTimeSeriesWma200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesWma200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesWma200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    wma: value["wma"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
