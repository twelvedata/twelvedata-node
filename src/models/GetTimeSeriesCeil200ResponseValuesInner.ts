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
 * @interface GetTimeSeriesCeil200ResponseValuesInner
 */
export interface GetTimeSeriesCeil200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseValuesInner
   */
  datetime: string;
  /**
   * Ceil value
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseValuesInner
   */
  ceil: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCeil200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesCeil200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesCeil200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("ceil" in value) || value["ceil"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCeil200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesCeil200ResponseValuesInner {
  return GetTimeSeriesCeil200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesCeil200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCeil200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    ceil: json["ceil"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesCeil200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesCeil200ResponseValuesInner {
  return GetTimeSeriesCeil200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesCeil200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesCeil200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ceil: value["ceil"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
