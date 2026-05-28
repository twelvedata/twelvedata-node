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
 * @interface GetTimeSeriesDx200ResponseValuesInner
 */
export interface GetTimeSeriesDx200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseValuesInner
   */
  datetime: string;
  /**
   * dx value
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseValuesInner
   */
  dx: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDx200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesDx200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesDx200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("dx" in value) || value["dx"] === undefined) return false;
  return true;
}

export function GetTimeSeriesDx200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesDx200ResponseValuesInner {
  return GetTimeSeriesDx200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesDx200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDx200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    dx: json["dx"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesDx200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesDx200ResponseValuesInner {
  return GetTimeSeriesDx200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesDx200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesDx200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    dx: value["dx"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
