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
 * @interface GetTimeSeriesKeltner200ResponseValuesInner
 */
export interface GetTimeSeriesKeltner200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseValuesInner
   */
  datetime: string;
  /**
   * Upper line value
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseValuesInner
   */
  upperLine: string;
  /**
   * Middle line value
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseValuesInner
   */
  middleLine: string;
  /**
   * Lower line value
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseValuesInner
   */
  lowerLine: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesKeltner200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesKeltner200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesKeltner200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("upperLine" in value) || value["upperLine"] === undefined) return false;
  if (!("middleLine" in value) || value["middleLine"] === undefined)
    return false;
  if (!("lowerLine" in value) || value["lowerLine"] === undefined) return false;
  return true;
}

export function GetTimeSeriesKeltner200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesKeltner200ResponseValuesInner {
  return GetTimeSeriesKeltner200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesKeltner200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKeltner200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    upperLine: json["upper_line"],
    middleLine: json["middle_line"],
    lowerLine: json["lower_line"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesKeltner200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesKeltner200ResponseValuesInner {
  return GetTimeSeriesKeltner200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesKeltner200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesKeltner200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    upper_line: value["upperLine"],
    middle_line: value["middleLine"],
    lower_line: value["lowerLine"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
