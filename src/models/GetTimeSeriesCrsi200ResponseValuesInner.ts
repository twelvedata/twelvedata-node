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
 * @interface GetTimeSeriesCrsi200ResponseValuesInner
 */
export interface GetTimeSeriesCrsi200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseValuesInner
   */
  datetime: string;
  /**
   * crsi value
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseValuesInner
   */
  crsi: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCrsi200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesCrsi200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesCrsi200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("crsi" in value) || value["crsi"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCrsi200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesCrsi200ResponseValuesInner {
  return GetTimeSeriesCrsi200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesCrsi200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCrsi200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    crsi: json["crsi"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesCrsi200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesCrsi200ResponseValuesInner {
  return GetTimeSeriesCrsi200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesCrsi200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesCrsi200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    crsi: value["crsi"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
