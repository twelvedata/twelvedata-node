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
 * @interface GetTimeSeriesSub200ResponseValuesInner
 */
export interface GetTimeSeriesSub200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseValuesInner
   */
  datetime: string;
  /**
   * SUB value
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseValuesInner
   */
  sub: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSub200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSub200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSub200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("sub" in value) || value["sub"] === undefined) return false;
  return true;
}

export function GetTimeSeriesSub200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSub200ResponseValuesInner {
  return GetTimeSeriesSub200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesSub200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSub200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    sub: json["sub"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesSub200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSub200ResponseValuesInner {
  return GetTimeSeriesSub200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesSub200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSub200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    sub: value["sub"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
