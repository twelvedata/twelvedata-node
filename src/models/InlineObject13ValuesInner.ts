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
    datetime: value["datetime"],
    mavp: value["mavp"],
  };
}
