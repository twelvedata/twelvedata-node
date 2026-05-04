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
 * @interface InlineObject17ValuesInner
 */
export interface InlineObject17ValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof InlineObject17ValuesInner
   */
  datetime: string;
  /**
   * TANH value
   * @type {string}
   * @memberof InlineObject17ValuesInner
   */
  tanh: string;
}

/**
 * Check if a given object implements the InlineObject17ValuesInner interface.
 */
export function instanceOfInlineObject17ValuesInner(
  value: object,
): value is InlineObject17ValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("tanh" in value) || value["tanh"] === undefined) return false;
  return true;
}

export function InlineObject17ValuesInnerFromJSON(
  json: any,
): InlineObject17ValuesInner {
  return InlineObject17ValuesInnerFromJSONTyped(json, false);
}

export function InlineObject17ValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject17ValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    tanh: json["tanh"],
  };
}

export function InlineObject17ValuesInnerToJSON(
  json: any,
): InlineObject17ValuesInner {
  return InlineObject17ValuesInnerToJSONTyped(json, false);
}

export function InlineObject17ValuesInnerToJSONTyped(
  value?: InlineObject17ValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    tanh: value["tanh"],
  };
}
