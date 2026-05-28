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
 * @interface GetTimeSeriesMacdSlope200ResponseValuesInner
 */
export interface GetTimeSeriesMacdSlope200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  datetime: string;
  /**
   * MACD slope value
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  macdSlope: string;
  /**
   * MACD signal slope value
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  macdSignalSlope: string;
  /**
   * MACD histogram slope value
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  macdHistSlope: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMacdSlope200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMacdSlope200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMacdSlope200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("macdSlope" in value) || value["macdSlope"] === undefined) return false;
  if (!("macdSignalSlope" in value) || value["macdSignalSlope"] === undefined)
    return false;
  if (!("macdHistSlope" in value) || value["macdHistSlope"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMacdSlope200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMacdSlope200ResponseValuesInner {
  return GetTimeSeriesMacdSlope200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMacdSlope200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacdSlope200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    macdSlope: json["macd_slope"],
    macdSignalSlope: json["macd_signal_slope"],
    macdHistSlope: json["macd_hist_slope"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMacdSlope200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMacdSlope200ResponseValuesInner {
  return GetTimeSeriesMacdSlope200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMacdSlope200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMacdSlope200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    macd_slope: value["macdSlope"],
    macd_signal_slope: value["macdSignalSlope"],
    macd_hist_slope: value["macdHistSlope"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
