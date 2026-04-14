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
 * @interface InlineObject11ValuesInner
 */
export interface InlineObject11ValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof InlineObject11ValuesInner
   */
  datetime?: string;
  /**
   * COS value
   * @type {string}
   * @memberof InlineObject11ValuesInner
   */
  cos?: string;
}

/**
 * Check if a given object implements the InlineObject11ValuesInner interface.
 */
export function instanceOfInlineObject11ValuesInner(
  value: object,
): value is InlineObject11ValuesInner {
  return true;
}

export function InlineObject11ValuesInnerFromJSON(
  json: any,
): InlineObject11ValuesInner {
  return InlineObject11ValuesInnerFromJSONTyped(json, false);
}

export function InlineObject11ValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject11ValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    cos: json["cos"] == null ? undefined : json["cos"],
  };
}

export function InlineObject11ValuesInnerToJSON(
  json: any,
): InlineObject11ValuesInner {
  return InlineObject11ValuesInnerToJSONTyped(json, false);
}

export function InlineObject11ValuesInnerToJSONTyped(
  value?: InlineObject11ValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    cos: value["cos"],
  };
}
