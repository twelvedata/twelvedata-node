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
 * @interface GetTimeSeriesBop200ResponseValuesInner
 */
export interface GetTimeSeriesBop200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseValuesInner
   */
  datetime: string;
  /**
   * Bop value
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseValuesInner
   */
  bop: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesBop200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesBop200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesBop200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("bop" in value) || value["bop"] === undefined) return false;
  return true;
}

export function GetTimeSeriesBop200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesBop200ResponseValuesInner {
  return GetTimeSeriesBop200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesBop200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBop200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    bop: json["bop"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesBop200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesBop200ResponseValuesInner {
  return GetTimeSeriesBop200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesBop200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesBop200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    bop: value["bop"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
