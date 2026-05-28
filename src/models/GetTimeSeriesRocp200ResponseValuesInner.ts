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
 * @interface GetTimeSeriesRocp200ResponseValuesInner
 */
export interface GetTimeSeriesRocp200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseValuesInner
   */
  datetime: string;
  /**
   * ROCP value
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseValuesInner
   */
  rocp: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRocp200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesRocp200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesRocp200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("rocp" in value) || value["rocp"] === undefined) return false;
  return true;
}

export function GetTimeSeriesRocp200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesRocp200ResponseValuesInner {
  return GetTimeSeriesRocp200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesRocp200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocp200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    rocp: json["rocp"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesRocp200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesRocp200ResponseValuesInner {
  return GetTimeSeriesRocp200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesRocp200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesRocp200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    rocp: value["rocp"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
