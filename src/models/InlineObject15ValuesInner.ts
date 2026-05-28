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
 * @interface InlineObject15ValuesInner
 */
export interface InlineObject15ValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof InlineObject15ValuesInner
   */
  datetime: string;
  /**
   * SINH value
   * @type {string}
   * @memberof InlineObject15ValuesInner
   */
  sinh: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject15ValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject15ValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject15ValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject15ValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject15ValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the InlineObject15ValuesInner interface.
 */
export function instanceOfInlineObject15ValuesInner(
  value: object,
): value is InlineObject15ValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("sinh" in value) || value["sinh"] === undefined) return false;
  return true;
}

export function InlineObject15ValuesInnerFromJSON(
  json: any,
): InlineObject15ValuesInner {
  return InlineObject15ValuesInnerFromJSONTyped(json, false);
}

export function InlineObject15ValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject15ValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    sinh: json["sinh"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function InlineObject15ValuesInnerToJSON(
  json: any,
): InlineObject15ValuesInner {
  return InlineObject15ValuesInnerToJSONTyped(json, false);
}

export function InlineObject15ValuesInnerToJSONTyped(
  value?: InlineObject15ValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    sinh: value["sinh"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
