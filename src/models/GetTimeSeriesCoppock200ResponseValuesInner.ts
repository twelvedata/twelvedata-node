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
 * @interface GetTimeSeriesCoppock200ResponseValuesInner
 */
export interface GetTimeSeriesCoppock200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseValuesInner
   */
  datetime: string;
  /**
   * Coppock value
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseValuesInner
   */
  coppock: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCoppock200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesCoppock200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesCoppock200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("coppock" in value) || value["coppock"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCoppock200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesCoppock200ResponseValuesInner {
  return GetTimeSeriesCoppock200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesCoppock200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCoppock200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    coppock: json["coppock"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesCoppock200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesCoppock200ResponseValuesInner {
  return GetTimeSeriesCoppock200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesCoppock200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesCoppock200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    coppock: value["coppock"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
