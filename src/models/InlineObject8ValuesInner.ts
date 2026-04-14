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
  datetime?: string;
  /**
   * ACOS value
   * @type {string}
   * @memberof InlineObject8ValuesInner
   */
  acos?: string;
}

/**
 * Check if a given object implements the InlineObject8ValuesInner interface.
 */
export function instanceOfInlineObject8ValuesInner(
  value: object,
): value is InlineObject8ValuesInner {
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
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    acos: json["acos"] == null ? undefined : json["acos"],
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
  };
}
