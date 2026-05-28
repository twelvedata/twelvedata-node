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
 * @interface GetTimeSeriesPivotPointsHL200ResponseValuesInner
 */
export interface GetTimeSeriesPivotPointsHL200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesPivotPointsHL200ResponseValuesInner
   */
  datetime: string;
  /**
   * `1` if it is a high pivot point, otherwise `0`
   * @type {number}
   * @memberof GetTimeSeriesPivotPointsHL200ResponseValuesInner
   */
  pivotPointH: number;
  /**
   * `1` if it is a low pivot point, otherwise `0`
   * @type {number}
   * @memberof GetTimeSeriesPivotPointsHL200ResponseValuesInner
   */
  pivotPointL: number;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPivotPointsHL200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPivotPointsHL200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPivotPointsHL200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPivotPointsHL200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesPivotPointsHL200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPivotPointsHL200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesPivotPointsHL200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesPivotPointsHL200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("pivotPointH" in value) || value["pivotPointH"] === undefined)
    return false;
  if (!("pivotPointL" in value) || value["pivotPointL"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesPivotPointsHL200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesPivotPointsHL200ResponseValuesInner {
  return GetTimeSeriesPivotPointsHL200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesPivotPointsHL200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPivotPointsHL200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    pivotPointH: json["pivot_point_h"],
    pivotPointL: json["pivot_point_l"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesPivotPointsHL200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesPivotPointsHL200ResponseValuesInner {
  return GetTimeSeriesPivotPointsHL200ResponseValuesInnerToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesPivotPointsHL200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesPivotPointsHL200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    pivot_point_h: value["pivotPointH"],
    pivot_point_l: value["pivotPointL"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
