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
 * @interface GetTimeSeriesMin200ResponseValuesInner
 */
export interface GetTimeSeriesMin200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseValuesInner
   */
  datetime: string;
  /**
   * Min value
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseValuesInner
   */
  min: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMin200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMin200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMin200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("min" in value) || value["min"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMin200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMin200ResponseValuesInner {
  return GetTimeSeriesMin200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMin200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMin200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    min: json["min"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMin200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMin200ResponseValuesInner {
  return GetTimeSeriesMin200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMin200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMin200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    min: value["min"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
