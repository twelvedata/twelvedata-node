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
 * @interface GetTimeSeriesAdx200ResponseValuesInner
 */
export interface GetTimeSeriesAdx200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseValuesInner
   */
  datetime: string;
  /**
   * ADX value
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseValuesInner
   */
  adx: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdx200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAdx200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAdx200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("adx" in value) || value["adx"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAdx200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAdx200ResponseValuesInner {
  return GetTimeSeriesAdx200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAdx200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdx200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    adx: json["adx"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesAdx200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAdx200ResponseValuesInner {
  return GetTimeSeriesAdx200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAdx200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAdx200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    adx: value["adx"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
