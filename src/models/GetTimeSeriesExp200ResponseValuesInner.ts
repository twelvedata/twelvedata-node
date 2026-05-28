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
 * @interface GetTimeSeriesExp200ResponseValuesInner
 */
export interface GetTimeSeriesExp200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseValuesInner
   */
  datetime: string;
  /**
   * Exp value
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseValuesInner
   */
  exp: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesExp200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesExp200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesExp200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("exp" in value) || value["exp"] === undefined) return false;
  return true;
}

export function GetTimeSeriesExp200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesExp200ResponseValuesInner {
  return GetTimeSeriesExp200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesExp200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesExp200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    exp: json["exp"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesExp200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesExp200ResponseValuesInner {
  return GetTimeSeriesExp200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesExp200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesExp200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    exp: value["exp"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
