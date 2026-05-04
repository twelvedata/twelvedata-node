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
 * @interface InlineObject9ValuesInner
 */
export interface InlineObject9ValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof InlineObject9ValuesInner
   */
  datetime: string;
  /**
   * ASIN value
   * @type {string}
   * @memberof InlineObject9ValuesInner
   */
  asin: string;
}

/**
 * Check if a given object implements the InlineObject9ValuesInner interface.
 */
export function instanceOfInlineObject9ValuesInner(
  value: object,
): value is InlineObject9ValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("asin" in value) || value["asin"] === undefined) return false;
  return true;
}

export function InlineObject9ValuesInnerFromJSON(
  json: any,
): InlineObject9ValuesInner {
  return InlineObject9ValuesInnerFromJSONTyped(json, false);
}

export function InlineObject9ValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject9ValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    asin: json["asin"],
  };
}

export function InlineObject9ValuesInnerToJSON(
  json: any,
): InlineObject9ValuesInner {
  return InlineObject9ValuesInnerToJSONTyped(json, false);
}

export function InlineObject9ValuesInnerToJSONTyped(
  value?: InlineObject9ValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    asin: value["asin"],
  };
}
