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
 * @interface GetTimeSeriesMinIndex200ResponseValuesInner
 */
export interface GetTimeSeriesMinIndex200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseValuesInner
   */
  datetime: string;
  /**
   * Index of lowest value over period
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseValuesInner
   */
  minidx: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinIndex200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMinIndex200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMinIndex200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("minidx" in value) || value["minidx"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMinIndex200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMinIndex200ResponseValuesInner {
  return GetTimeSeriesMinIndex200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMinIndex200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinIndex200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    minidx: json["minidx"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMinIndex200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMinIndex200ResponseValuesInner {
  return GetTimeSeriesMinIndex200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMinIndex200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMinIndex200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    minidx: value["minidx"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
