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
 * @interface GetTimeSeriesBeta200ResponseValuesInner
 */
export interface GetTimeSeriesBeta200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseValuesInner
   */
  datetime: string;
  /**
   * Beta value
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseValuesInner
   */
  beta: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesBeta200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesBeta200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesBeta200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("beta" in value) || value["beta"] === undefined) return false;
  return true;
}

export function GetTimeSeriesBeta200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesBeta200ResponseValuesInner {
  return GetTimeSeriesBeta200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesBeta200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBeta200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    beta: json["beta"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesBeta200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesBeta200ResponseValuesInner {
  return GetTimeSeriesBeta200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesBeta200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesBeta200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    beta: value["beta"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
