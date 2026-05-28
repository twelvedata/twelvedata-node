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
 * @interface GetTimeSeriesAd200ResponseValuesInner
 */
export interface GetTimeSeriesAd200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseValuesInner
   */
  datetime: string;
  /**
   * AD value
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseValuesInner
   */
  ad: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAd200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesAd200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesAd200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("ad" in value) || value["ad"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAd200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesAd200ResponseValuesInner {
  return GetTimeSeriesAd200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesAd200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAd200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    ad: json["ad"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesAd200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesAd200ResponseValuesInner {
  return GetTimeSeriesAd200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesAd200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesAd200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ad: value["ad"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
