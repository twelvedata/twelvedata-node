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
 * @interface GetTimeSeriesAdd200ResponseValuesInner
 */
export interface GetTimeSeriesAdd200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseValuesInner
   */
  datetime: string;
  /**
   * Add value
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseValuesInner
   */
  add: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdd200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAdd200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAdd200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("add" in value) || value["add"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAdd200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAdd200ResponseValuesInner {
  return GetTimeSeriesAdd200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAdd200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdd200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    add: json["add"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesAdd200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAdd200ResponseValuesInner {
  return GetTimeSeriesAdd200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAdd200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAdd200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    add: value["add"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
