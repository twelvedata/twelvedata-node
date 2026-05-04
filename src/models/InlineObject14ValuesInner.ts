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
 * @interface InlineObject14ValuesInner
 */
export interface InlineObject14ValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof InlineObject14ValuesInner
   */
  datetime: string;
  /**
   * SIN value
   * @type {string}
   * @memberof InlineObject14ValuesInner
   */
  sin: string;
}

/**
 * Check if a given object implements the InlineObject14ValuesInner interface.
 */
export function instanceOfInlineObject14ValuesInner(
  value: object,
): value is InlineObject14ValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("sin" in value) || value["sin"] === undefined) return false;
  return true;
}

export function InlineObject14ValuesInnerFromJSON(
  json: any,
): InlineObject14ValuesInner {
  return InlineObject14ValuesInnerFromJSONTyped(json, false);
}

export function InlineObject14ValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject14ValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    sin: json["sin"],
  };
}

export function InlineObject14ValuesInnerToJSON(
  json: any,
): InlineObject14ValuesInner {
  return InlineObject14ValuesInnerToJSONTyped(json, false);
}

export function InlineObject14ValuesInnerToJSONTyped(
  value?: InlineObject14ValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    sin: value["sin"],
  };
}
