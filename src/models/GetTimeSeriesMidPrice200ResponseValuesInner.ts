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
 * @interface GetTimeSeriesMidPrice200ResponseValuesInner
 */
export interface GetTimeSeriesMidPrice200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseValuesInner
   */
  datetime: string;
  /**
   * Midprice value
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseValuesInner
   */
  midprice: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMidPrice200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMidPrice200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMidPrice200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("midprice" in value) || value["midprice"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMidPrice200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMidPrice200ResponseValuesInner {
  return GetTimeSeriesMidPrice200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMidPrice200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMidPrice200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    midprice: json["midprice"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMidPrice200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMidPrice200ResponseValuesInner {
  return GetTimeSeriesMidPrice200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMidPrice200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMidPrice200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    midprice: value["midprice"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
