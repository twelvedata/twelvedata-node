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
 * @interface GetTimeSeriesAdxr200ResponseValuesInner
 */
export interface GetTimeSeriesAdxr200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAdxr200ResponseValuesInner
   */
  datetime: string;
  /**
   * Adxr value
   * @type {string}
   * @memberof GetTimeSeriesAdxr200ResponseValuesInner
   */
  adxr: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdxr200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdxr200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdxr200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdxr200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdxr200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdxr200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAdxr200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAdxr200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("adxr" in value) || value["adxr"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAdxr200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAdxr200ResponseValuesInner {
  return GetTimeSeriesAdxr200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAdxr200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdxr200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    adxr: json["adxr"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesAdxr200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAdxr200ResponseValuesInner {
  return GetTimeSeriesAdxr200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAdxr200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAdxr200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    adxr: value["adxr"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
