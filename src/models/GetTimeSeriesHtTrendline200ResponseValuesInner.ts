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
 * @interface GetTimeSeriesHtTrendline200ResponseValuesInner
 */
export interface GetTimeSeriesHtTrendline200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseValuesInner
   */
  datetime: string;
  /**
   * HT_TRENDLINE value
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseValuesInner
   */
  htTrendline: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtTrendline200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesHtTrendline200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesHtTrendline200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("htTrendline" in value) || value["htTrendline"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesHtTrendline200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesHtTrendline200ResponseValuesInner {
  return GetTimeSeriesHtTrendline200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtTrendline200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtTrendline200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    htTrendline: json["ht_trendline"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesHtTrendline200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesHtTrendline200ResponseValuesInner {
  return GetTimeSeriesHtTrendline200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesHtTrendline200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesHtTrendline200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ht_trendline: value["htTrendline"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
