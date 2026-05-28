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
 * @interface InlineObject16ValuesInner
 */
export interface InlineObject16ValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof InlineObject16ValuesInner
   */
  datetime: string;
  /**
   * TAN value
   * @type {string}
   * @memberof InlineObject16ValuesInner
   */
  tan: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject16ValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject16ValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject16ValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject16ValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject16ValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the InlineObject16ValuesInner interface.
 */
export function instanceOfInlineObject16ValuesInner(
  value: object,
): value is InlineObject16ValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("tan" in value) || value["tan"] === undefined) return false;
  return true;
}

export function InlineObject16ValuesInnerFromJSON(
  json: any,
): InlineObject16ValuesInner {
  return InlineObject16ValuesInnerFromJSONTyped(json, false);
}

export function InlineObject16ValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject16ValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    tan: json["tan"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function InlineObject16ValuesInnerToJSON(
  json: any,
): InlineObject16ValuesInner {
  return InlineObject16ValuesInnerToJSONTyped(json, false);
}

export function InlineObject16ValuesInnerToJSONTyped(
  value?: InlineObject16ValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    tan: value["tan"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
