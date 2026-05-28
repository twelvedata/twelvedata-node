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
 * @interface GetTimeSeriesMax200ResponseValuesInner
 */
export interface GetTimeSeriesMax200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseValuesInner
   */
  datetime: string;
  /**
   * Max value
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseValuesInner
   */
  max: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMax200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMax200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMax200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("max" in value) || value["max"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMax200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMax200ResponseValuesInner {
  return GetTimeSeriesMax200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMax200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMax200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    max: json["max"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMax200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMax200ResponseValuesInner {
  return GetTimeSeriesMax200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMax200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMax200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    max: value["max"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
