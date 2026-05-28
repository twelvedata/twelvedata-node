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
 * @interface GetTimeSeriesTrima200ResponseValuesInner
 */
export interface GetTimeSeriesTrima200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseValuesInner
   */
  datetime: string;
  /**
   * TRIMA value
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseValuesInner
   */
  trima: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTrima200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesTrima200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesTrima200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("trima" in value) || value["trima"] === undefined) return false;
  return true;
}

export function GetTimeSeriesTrima200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesTrima200ResponseValuesInner {
  return GetTimeSeriesTrima200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesTrima200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTrima200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    trima: json["trima"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesTrima200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesTrima200ResponseValuesInner {
  return GetTimeSeriesTrima200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesTrima200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesTrima200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    trima: value["trima"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
