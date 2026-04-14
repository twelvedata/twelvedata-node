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
  datetime?: string;
  /**
   * TAN value
   * @type {string}
   * @memberof InlineObject16ValuesInner
   */
  tan?: string;
}

/**
 * Check if a given object implements the InlineObject16ValuesInner interface.
 */
export function instanceOfInlineObject16ValuesInner(
  value: object,
): value is InlineObject16ValuesInner {
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
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    tan: json["tan"] == null ? undefined : json["tan"],
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
  };
}
