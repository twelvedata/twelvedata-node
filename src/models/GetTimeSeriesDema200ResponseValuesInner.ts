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
 * @interface GetTimeSeriesDema200ResponseValuesInner
 */
export interface GetTimeSeriesDema200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseValuesInner
   */
  datetime: string;
  /**
   * Dema value
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseValuesInner
   */
  dema: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDema200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesDema200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesDema200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("dema" in value) || value["dema"] === undefined) return false;
  return true;
}

export function GetTimeSeriesDema200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesDema200ResponseValuesInner {
  return GetTimeSeriesDema200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesDema200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDema200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    dema: json["dema"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesDema200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesDema200ResponseValuesInner {
  return GetTimeSeriesDema200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesDema200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesDema200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    dema: value["dema"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
