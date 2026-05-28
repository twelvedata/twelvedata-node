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
 * @interface GetTimeSeriesLinearRegSlope200ResponseValuesInner
 */
export interface GetTimeSeriesLinearRegSlope200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesLinearRegSlope200ResponseValuesInner
   */
  datetime: string;
  /**
   * linearregslope value
   * @type {string}
   * @memberof GetTimeSeriesLinearRegSlope200ResponseValuesInner
   */
  linearregslope: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegSlope200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegSlope200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegSlope200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegSlope200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesLinearRegSlope200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearRegSlope200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesLinearRegSlope200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesLinearRegSlope200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("linearregslope" in value) || value["linearregslope"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesLinearRegSlope200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesLinearRegSlope200ResponseValuesInner {
  return GetTimeSeriesLinearRegSlope200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegSlope200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearRegSlope200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    linearregslope: json["linearregslope"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesLinearRegSlope200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesLinearRegSlope200ResponseValuesInner {
  return GetTimeSeriesLinearRegSlope200ResponseValuesInnerToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegSlope200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesLinearRegSlope200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    linearregslope: value["linearregslope"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
