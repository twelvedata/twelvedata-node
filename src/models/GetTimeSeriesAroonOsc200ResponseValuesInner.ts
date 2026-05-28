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
 * @interface GetTimeSeriesAroonOsc200ResponseValuesInner
 */
export interface GetTimeSeriesAroonOsc200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseValuesInner
   */
  datetime: string;
  /**
   * Aroon oscillator value
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseValuesInner
   */
  aroonosc: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAroonOsc200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAroonOsc200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAroonOsc200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("aroonosc" in value) || value["aroonosc"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAroonOsc200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAroonOsc200ResponseValuesInner {
  return GetTimeSeriesAroonOsc200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAroonOsc200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAroonOsc200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    aroonosc: json["aroonosc"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesAroonOsc200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAroonOsc200ResponseValuesInner {
  return GetTimeSeriesAroonOsc200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAroonOsc200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAroonOsc200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    aroonosc: value["aroonosc"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
