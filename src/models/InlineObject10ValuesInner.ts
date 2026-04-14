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
  datetime?: string;
  /**
   * ATAN value
   * @type {string}
   * @memberof InlineObject10ValuesInner
   */
  atan?: string;
}

/**
 * Check if a given object implements the InlineObject10ValuesInner interface.
 */
export function instanceOfInlineObject10ValuesInner(
  value: object,
): value is InlineObject10ValuesInner {
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
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    atan: json["atan"] == null ? undefined : json["atan"],
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
  };
}
