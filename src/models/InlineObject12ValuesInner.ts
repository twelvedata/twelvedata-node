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
 * @interface InlineObject12ValuesInner
 */
export interface InlineObject12ValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof InlineObject12ValuesInner
   */
  datetime: string;
  /**
   * COSH value
   * @type {string}
   * @memberof InlineObject12ValuesInner
   */
  cosh: string;
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject12ValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject12ValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject12ValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject12ValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject12ValuesInner
   */
  volume?: string;
}

/**
 * Check if a given object implements the InlineObject12ValuesInner interface.
 */
export function instanceOfInlineObject12ValuesInner(
  value: object,
): value is InlineObject12ValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("cosh" in value) || value["cosh"] === undefined) return false;
  return true;
}

export function InlineObject12ValuesInnerFromJSON(
  json: any,
): InlineObject12ValuesInner {
  return InlineObject12ValuesInnerFromJSONTyped(json, false);
}

export function InlineObject12ValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject12ValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    cosh: json["cosh"],
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function InlineObject12ValuesInnerToJSON(
  json: any,
): InlineObject12ValuesInner {
  return InlineObject12ValuesInnerToJSONTyped(json, false);
}

export function InlineObject12ValuesInnerToJSONTyped(
  value?: InlineObject12ValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    cosh: value["cosh"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
  };
}
