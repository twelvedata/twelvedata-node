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
 * @interface GetTimeSeriesMedPrice200ResponseValuesInner
 */
export interface GetTimeSeriesMedPrice200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseValuesInner
   */
  datetime: string;
  /**
   * Medprice value
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseValuesInner
   */
  medprice: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMedPrice200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMedPrice200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMedPrice200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("medprice" in value) || value["medprice"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMedPrice200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMedPrice200ResponseValuesInner {
  return GetTimeSeriesMedPrice200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMedPrice200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMedPrice200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    medprice: json["medprice"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function GetTimeSeriesMedPrice200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMedPrice200ResponseValuesInner {
  return GetTimeSeriesMedPrice200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMedPrice200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMedPrice200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    medprice: value["medprice"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
