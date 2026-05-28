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
 * @interface GetTimeSeriesTema200ResponseValuesInner
 */
export interface GetTimeSeriesTema200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseValuesInner
   */
  datetime: string;
  /**
   * TEMA value
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseValuesInner
   */
  tema: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTema200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesTema200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesTema200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("tema" in value) || value["tema"] === undefined) return false;
  return true;
}

export function GetTimeSeriesTema200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesTema200ResponseValuesInner {
  return GetTimeSeriesTema200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesTema200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTema200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    tema: json["tema"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesTema200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesTema200ResponseValuesInner {
  return GetTimeSeriesTema200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesTema200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesTema200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    tema: value["tema"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
