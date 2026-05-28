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
 * @interface InlineObject8ValuesInner
 */
export interface InlineObject8ValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof InlineObject8ValuesInner
   */
  datetime: string;
  /**
   * ACOS value
   * @type {string}
   * @memberof InlineObject8ValuesInner
   */
  acos: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject8ValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject8ValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject8ValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject8ValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject8ValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the InlineObject8ValuesInner interface.
 */
export function instanceOfInlineObject8ValuesInner(
  value: object,
): value is InlineObject8ValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("acos" in value) || value["acos"] === undefined) return false;
  return true;
}

export function InlineObject8ValuesInnerFromJSON(
  json: any,
): InlineObject8ValuesInner {
  return InlineObject8ValuesInnerFromJSONTyped(json, false);
}

export function InlineObject8ValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject8ValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    acos: json["acos"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function InlineObject8ValuesInnerToJSON(
  json: any,
): InlineObject8ValuesInner {
  return InlineObject8ValuesInnerToJSONTyped(json, false);
}

export function InlineObject8ValuesInnerToJSONTyped(
  value?: InlineObject8ValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    acos: value["acos"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
