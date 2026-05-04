/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject10ValuesInner } from "./InlineObject10ValuesInner";
import {
  InlineObject10ValuesInnerFromJSON,
  InlineObject10ValuesInnerFromJSONTyped,
  InlineObject10ValuesInnerToJSON,
  InlineObject10ValuesInnerToJSONTyped,
} from "./InlineObject10ValuesInner";
import type { InlineObject10Meta } from "./InlineObject10Meta";
import {
  InlineObject10MetaFromJSON,
  InlineObject10MetaFromJSONTyped,
  InlineObject10MetaToJSON,
  InlineObject10MetaToJSONTyped,
} from "./InlineObject10Meta";

/**
 *
 * @export
 * @interface InlineObject10
 */
export interface InlineObject10 {
  /**
   *
   * @type {InlineObject10Meta}
   * @memberof InlineObject10
   */
  meta: InlineObject10Meta;
  /**
   * Array of time series data points
   * @type {Array<InlineObject10ValuesInner>}
   * @memberof InlineObject10
   */
  values: Array<InlineObject10ValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof InlineObject10
   */
  status: string;
}

/**
 * Check if a given object implements the InlineObject10 interface.
 */
export function instanceOfInlineObject10(
  value: object,
): value is InlineObject10 {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function InlineObject10FromJSON(json: any): InlineObject10 {
  return InlineObject10FromJSONTyped(json, false);
}

export function InlineObject10FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject10 {
  if (json == null) {
    return json;
  }
  return {
    meta: InlineObject10MetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      InlineObject10ValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function InlineObject10ToJSON(json: any): InlineObject10 {
  return InlineObject10ToJSONTyped(json, false);
}

export function InlineObject10ToJSONTyped(
  value?: InlineObject10 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: InlineObject10MetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      InlineObject10ValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
