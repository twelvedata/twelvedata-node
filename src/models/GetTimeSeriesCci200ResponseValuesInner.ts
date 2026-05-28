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
 * @interface GetTimeSeriesCci200ResponseValuesInner
 */
export interface GetTimeSeriesCci200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseValuesInner
   */
  datetime: string;
  /**
   * CCI value
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseValuesInner
   */
  cci: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCci200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesCci200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesCci200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("cci" in value) || value["cci"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCci200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesCci200ResponseValuesInner {
  return GetTimeSeriesCci200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesCci200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCci200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    cci: json["cci"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesCci200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesCci200ResponseValuesInner {
  return GetTimeSeriesCci200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesCci200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesCci200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    cci: value["cci"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
