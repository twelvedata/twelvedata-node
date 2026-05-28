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
 * @interface InlineObject10ValuesInner
 */
export interface InlineObject10ValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof InlineObject10ValuesInner
   */
  datetime: string;
  /**
   * ATAN value
   * @type {string}
   * @memberof InlineObject10ValuesInner
   */
  atan: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject10ValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject10ValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject10ValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject10ValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject10ValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the InlineObject10ValuesInner interface.
 */
export function instanceOfInlineObject10ValuesInner(
  value: object,
): value is InlineObject10ValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("atan" in value) || value["atan"] === undefined) return false;
  return true;
}

export function InlineObject10ValuesInnerFromJSON(
  json: any,
): InlineObject10ValuesInner {
  return InlineObject10ValuesInnerFromJSONTyped(json, false);
}

export function InlineObject10ValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject10ValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    atan: json["atan"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function InlineObject10ValuesInnerToJSON(
  json: any,
): InlineObject10ValuesInner {
  return InlineObject10ValuesInnerToJSONTyped(json, false);
}

export function InlineObject10ValuesInnerToJSONTyped(
  value?: InlineObject10ValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    atan: value["atan"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
