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
 * @interface GetTimeSeriesPercentB200ResponseValuesInner
 */
export interface GetTimeSeriesPercentB200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseValuesInner
   */
  datetime: string;
  /**
   * Percent_b value
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseValuesInner
   */
  percentB: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPercentB200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesPercentB200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesPercentB200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("percentB" in value) || value["percentB"] === undefined) return false;
  return true;
}

export function GetTimeSeriesPercentB200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesPercentB200ResponseValuesInner {
  return GetTimeSeriesPercentB200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesPercentB200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPercentB200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    percentB: json["percent_b"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesPercentB200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesPercentB200ResponseValuesInner {
  return GetTimeSeriesPercentB200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesPercentB200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesPercentB200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    percent_b: value["percentB"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
