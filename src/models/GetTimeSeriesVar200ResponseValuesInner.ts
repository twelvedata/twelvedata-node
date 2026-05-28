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
 * @interface GetTimeSeriesVar200ResponseValuesInner
 */
export interface GetTimeSeriesVar200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseValuesInner
   */
  datetime: string;
  /**
   * VAR value
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseValuesInner
   */
  _var: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesVar200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesVar200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesVar200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("_var" in value) || value["_var"] === undefined) return false;
  return true;
}

export function GetTimeSeriesVar200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesVar200ResponseValuesInner {
  return GetTimeSeriesVar200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesVar200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesVar200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    _var: json["var"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesVar200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesVar200ResponseValuesInner {
  return GetTimeSeriesVar200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesVar200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesVar200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    var: value["_var"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
