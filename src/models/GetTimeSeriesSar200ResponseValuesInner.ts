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
 * @interface GetTimeSeriesSar200ResponseValuesInner
 */
export interface GetTimeSeriesSar200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseValuesInner
   */
  datetime: string;
  /**
   * SAR value
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseValuesInner
   */
  sar: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSar200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSar200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSar200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("sar" in value) || value["sar"] === undefined) return false;
  return true;
}

export function GetTimeSeriesSar200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSar200ResponseValuesInner {
  return GetTimeSeriesSar200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesSar200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSar200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    sar: json["sar"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesSar200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSar200ResponseValuesInner {
  return GetTimeSeriesSar200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesSar200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSar200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    sar: value["sar"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
