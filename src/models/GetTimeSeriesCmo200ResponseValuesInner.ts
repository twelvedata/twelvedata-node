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
 * @interface GetTimeSeriesCmo200ResponseValuesInner
 */
export interface GetTimeSeriesCmo200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseValuesInner
   */
  datetime: string;
  /**
   * CMO value
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseValuesInner
   */
  cmo: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCmo200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesCmo200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesCmo200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("cmo" in value) || value["cmo"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCmo200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesCmo200ResponseValuesInner {
  return GetTimeSeriesCmo200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesCmo200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCmo200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    cmo: json["cmo"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesCmo200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesCmo200ResponseValuesInner {
  return GetTimeSeriesCmo200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesCmo200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesCmo200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    cmo: value["cmo"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
