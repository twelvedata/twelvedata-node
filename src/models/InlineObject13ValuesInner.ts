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
 * @interface InlineObject13ValuesInner
 */
export interface InlineObject13ValuesInner {
  /**
   * Price at the opening of current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject13ValuesInner
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject13ValuesInner
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject13ValuesInner
   */
  low?: string;
  /**
   * Close price at the end of the bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject13ValuesInner
   */
  close?: string;
  /**
   * Trading volume which occurred during the current bar. Returned when `include_ohlc` is `true`.
   * @type {string}
   * @memberof InlineObject13ValuesInner
   */
  volume?: string;
  /**
   *
   * @type {string}
   * @memberof InlineObject13ValuesInner
   */
  datetime?: string;
  /**
   *
   * @type {string}
   * @memberof InlineObject13ValuesInner
   */
  mavp?: string;
}

/**
 * Check if a given object implements the InlineObject13ValuesInner interface.
 */
export function instanceOfInlineObject13ValuesInner(
  value: object,
): value is InlineObject13ValuesInner {
  return true;
}

export function InlineObject13ValuesInnerFromJSON(
  json: any,
): InlineObject13ValuesInner {
  return InlineObject13ValuesInnerFromJSONTyped(json, false);
}

export function InlineObject13ValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject13ValuesInner {
  if (json == null) {
    return json;
  }
  return {
    open: json["open"] == null ? undefined : json["open"],
    high: json["high"] == null ? undefined : json["high"],
    low: json["low"] == null ? undefined : json["low"],
    close: json["close"] == null ? undefined : json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    mavp: json["mavp"] == null ? undefined : json["mavp"],
  };
}

export function InlineObject13ValuesInnerToJSON(
  json: any,
): InlineObject13ValuesInner {
  return InlineObject13ValuesInnerToJSONTyped(json, false);
}

export function InlineObject13ValuesInnerToJSONTyped(
  value?: InlineObject13ValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
    datetime: value["datetime"],
    mavp: value["mavp"],
  };
}
