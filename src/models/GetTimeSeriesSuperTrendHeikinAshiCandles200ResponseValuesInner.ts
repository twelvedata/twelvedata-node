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
 * @interface GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
 */
export interface GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  datetime: string;
  /**
   * SuperTrend value
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  supertrend: string;
  /**
   * Heikin-Ashi high values
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  heikinhighs: string;
  /**
   * Heikin-Ashi open values
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  heikinopens: string;
  /**
   * Heikin-Ashi close values
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  heikincloses: string;
  /**
   * Heikin-Ashi low values
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  heikinlows: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("supertrend" in value) || value["supertrend"] === undefined)
    return false;
  if (!("heikinhighs" in value) || value["heikinhighs"] === undefined)
    return false;
  if (!("heikinopens" in value) || value["heikinopens"] === undefined)
    return false;
  if (!("heikincloses" in value) || value["heikincloses"] === undefined)
    return false;
  if (!("heikinlows" in value) || value["heikinlows"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  return GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    supertrend: json["supertrend"],
    heikinhighs: json["heikinhighs"],
    heikinopens: json["heikinopens"],
    heikincloses: json["heikincloses"],
    heikinlows: json["heikinlows"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  return GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    supertrend: value["supertrend"],
    heikinhighs: value["heikinhighs"],
    heikinopens: value["heikinopens"],
    heikincloses: value["heikincloses"],
    heikinlows: value["heikinlows"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
