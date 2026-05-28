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
 * @interface GetTimeSeriesMom200ResponseValuesInner
 */
export interface GetTimeSeriesMom200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseValuesInner
   */
  datetime: string;
  /**
   * Mom value
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseValuesInner
   */
  mom: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMom200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMom200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMom200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("mom" in value) || value["mom"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMom200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMom200ResponseValuesInner {
  return GetTimeSeriesMom200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMom200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMom200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    mom: json["mom"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMom200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMom200ResponseValuesInner {
  return GetTimeSeriesMom200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMom200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMom200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    mom: value["mom"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
