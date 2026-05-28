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
 * @interface GetTimeSeriesNatr200ResponseValuesInner
 */
export interface GetTimeSeriesNatr200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseValuesInner
   */
  datetime: string;
  /**
   * natr value
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseValuesInner
   */
  natr: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesNatr200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesNatr200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesNatr200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("natr" in value) || value["natr"] === undefined) return false;
  return true;
}

export function GetTimeSeriesNatr200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesNatr200ResponseValuesInner {
  return GetTimeSeriesNatr200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesNatr200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesNatr200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    natr: json["natr"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesNatr200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesNatr200ResponseValuesInner {
  return GetTimeSeriesNatr200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesNatr200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesNatr200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    natr: value["natr"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
