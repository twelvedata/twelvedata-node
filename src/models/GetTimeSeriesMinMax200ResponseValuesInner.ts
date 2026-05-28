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
 * @interface GetTimeSeriesMinMax200ResponseValuesInner
 */
export interface GetTimeSeriesMinMax200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  datetime: string;
  /**
   * Min value
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  min: string;
  /**
   * Max value
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  max: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinMax200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMinMax200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMinMax200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("min" in value) || value["min"] === undefined) return false;
  if (!("max" in value) || value["max"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMinMax200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMinMax200ResponseValuesInner {
  return GetTimeSeriesMinMax200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMinMax200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinMax200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    min: json["min"],
    max: json["max"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMinMax200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMinMax200ResponseValuesInner {
  return GetTimeSeriesMinMax200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMinMax200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMinMax200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    min: value["min"],
    max: value["max"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
