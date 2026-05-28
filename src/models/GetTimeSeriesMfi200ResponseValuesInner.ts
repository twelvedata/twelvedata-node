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
 * @interface GetTimeSeriesMfi200ResponseValuesInner
 */
export interface GetTimeSeriesMfi200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseValuesInner
   */
  datetime: string;
  /**
   * MFI value
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseValuesInner
   */
  mfi: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMfi200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMfi200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMfi200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("mfi" in value) || value["mfi"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMfi200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMfi200ResponseValuesInner {
  return GetTimeSeriesMfi200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMfi200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMfi200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    mfi: json["mfi"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMfi200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMfi200ResponseValuesInner {
  return GetTimeSeriesMfi200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMfi200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMfi200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    mfi: value["mfi"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
