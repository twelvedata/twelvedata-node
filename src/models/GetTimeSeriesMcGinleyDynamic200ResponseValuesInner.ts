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
 * @interface GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
 */
export interface GetTimeSeriesMcGinleyDynamic200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
   */
  datetime: string;
  /**
   * McGinley Dynamic value
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
   */
  mcginleyDynamic: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMcGinleyDynamic200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMcGinleyDynamic200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMcGinleyDynamic200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("mcginleyDynamic" in value) || value["mcginleyDynamic"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMcGinleyDynamic200ResponseValuesInner {
  return GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMcGinleyDynamic200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    mcginleyDynamic: json["mcginley_dynamic"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMcGinleyDynamic200ResponseValuesInner {
  return GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMcGinleyDynamic200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    mcginley_dynamic: value["mcginleyDynamic"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
