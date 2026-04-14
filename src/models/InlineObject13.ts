/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject13Meta } from "./InlineObject13Meta";
import {
  InlineObject13MetaFromJSON,
  InlineObject13MetaFromJSONTyped,
  InlineObject13MetaToJSON,
  InlineObject13MetaToJSONTyped,
} from "./InlineObject13Meta";
import type { InlineObject13ValuesInner } from "./InlineObject13ValuesInner";
import {
  InlineObject13ValuesInnerFromJSON,
  InlineObject13ValuesInnerFromJSONTyped,
  InlineObject13ValuesInnerToJSON,
  InlineObject13ValuesInnerToJSONTyped,
} from "./InlineObject13ValuesInner";

/**
 *
 * @export
 * @interface InlineObject13
 */
export interface InlineObject13 {
  /**
   *
   * @type {InlineObject13Meta}
   * @memberof InlineObject13
   */
  meta?: InlineObject13Meta;
  /**
   *
   * @type {Array<InlineObject13ValuesInner>}
   * @memberof InlineObject13
   */
  values?: Array<InlineObject13ValuesInner>;
}

/**
 * Check if a given object implements the InlineObject13 interface.
 */
export function instanceOfInlineObject13(
  value: object,
): value is InlineObject13 {
  return true;
}

export function InlineObject13FromJSON(json: any): InlineObject13 {
  return InlineObject13FromJSONTyped(json, false);
}

export function InlineObject13FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject13 {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : InlineObject13MetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(InlineObject13ValuesInnerFromJSON),
  };
}

export function InlineObject13ToJSON(json: any): InlineObject13 {
  return InlineObject13ToJSONTyped(json, false);
}

export function InlineObject13ToJSONTyped(
  value?: InlineObject13 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: InlineObject13MetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(InlineObject13ValuesInnerToJSON),
  };
}
