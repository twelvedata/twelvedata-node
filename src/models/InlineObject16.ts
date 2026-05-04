/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject16Meta } from "./InlineObject16Meta";
import {
  InlineObject16MetaFromJSON,
  InlineObject16MetaFromJSONTyped,
  InlineObject16MetaToJSON,
  InlineObject16MetaToJSONTyped,
} from "./InlineObject16Meta";
import type { InlineObject16ValuesInner } from "./InlineObject16ValuesInner";
import {
  InlineObject16ValuesInnerFromJSON,
  InlineObject16ValuesInnerFromJSONTyped,
  InlineObject16ValuesInnerToJSON,
  InlineObject16ValuesInnerToJSONTyped,
} from "./InlineObject16ValuesInner";

/**
 *
 * @export
 * @interface InlineObject16
 */
export interface InlineObject16 {
  /**
   *
   * @type {InlineObject16Meta}
   * @memberof InlineObject16
   */
  meta: InlineObject16Meta;
  /**
   * Array of time series data points
   * @type {Array<InlineObject16ValuesInner>}
   * @memberof InlineObject16
   */
  values: Array<InlineObject16ValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof InlineObject16
   */
  status: string;
}

/**
 * Check if a given object implements the InlineObject16 interface.
 */
export function instanceOfInlineObject16(
  value: object,
): value is InlineObject16 {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function InlineObject16FromJSON(json: any): InlineObject16 {
  return InlineObject16FromJSONTyped(json, false);
}

export function InlineObject16FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject16 {
  if (json == null) {
    return json;
  }
  return {
    meta: InlineObject16MetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      InlineObject16ValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function InlineObject16ToJSON(json: any): InlineObject16 {
  return InlineObject16ToJSONTyped(json, false);
}

export function InlineObject16ToJSONTyped(
  value?: InlineObject16 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: InlineObject16MetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      InlineObject16ValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
