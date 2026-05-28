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
 * @interface GetTimeSeriesPlusDI200ResponseValuesInner
 */
export interface GetTimeSeriesPlusDI200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseValuesInner
   */
  datetime: string;
  /**
   * plus_di value
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseValuesInner
   */
  plusDi: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPlusDI200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesPlusDI200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesPlusDI200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("plusDi" in value) || value["plusDi"] === undefined) return false;
  return true;
}

export function GetTimeSeriesPlusDI200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesPlusDI200ResponseValuesInner {
  return GetTimeSeriesPlusDI200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesPlusDI200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPlusDI200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    plusDi: json["plus_di"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesPlusDI200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesPlusDI200ResponseValuesInner {
  return GetTimeSeriesPlusDI200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesPlusDI200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesPlusDI200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    plus_di: value["plusDi"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
