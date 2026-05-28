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
 * @interface GetTimeSeriesMaxIndex200ResponseValuesInner
 */
export interface GetTimeSeriesMaxIndex200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseValuesInner
   */
  datetime: string;
  /**
   * maxidx value
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseValuesInner
   */
  maxidx: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMaxIndex200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMaxIndex200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMaxIndex200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("maxidx" in value) || value["maxidx"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMaxIndex200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMaxIndex200ResponseValuesInner {
  return GetTimeSeriesMaxIndex200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMaxIndex200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMaxIndex200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    maxidx: json["maxidx"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMaxIndex200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMaxIndex200ResponseValuesInner {
  return GetTimeSeriesMaxIndex200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMaxIndex200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMaxIndex200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    maxidx: value["maxidx"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
