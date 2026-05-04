/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject12Meta } from "./InlineObject12Meta";
import {
  InlineObject12MetaFromJSON,
  InlineObject12MetaFromJSONTyped,
  InlineObject12MetaToJSON,
  InlineObject12MetaToJSONTyped,
} from "./InlineObject12Meta";
import type { InlineObject12ValuesInner } from "./InlineObject12ValuesInner";
import {
  InlineObject12ValuesInnerFromJSON,
  InlineObject12ValuesInnerFromJSONTyped,
  InlineObject12ValuesInnerToJSON,
  InlineObject12ValuesInnerToJSONTyped,
} from "./InlineObject12ValuesInner";

/**
 *
 * @export
 * @interface InlineObject12
 */
export interface InlineObject12 {
  /**
   *
   * @type {InlineObject12Meta}
   * @memberof InlineObject12
   */
  meta: InlineObject12Meta;
  /**
   * Array of time series data points
   * @type {Array<InlineObject12ValuesInner>}
   * @memberof InlineObject12
   */
  values: Array<InlineObject12ValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof InlineObject12
   */
  status: string;
}

/**
 * Check if a given object implements the InlineObject12 interface.
 */
export function instanceOfInlineObject12(
  value: object,
): value is InlineObject12 {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function InlineObject12FromJSON(json: any): InlineObject12 {
  return InlineObject12FromJSONTyped(json, false);
}

export function InlineObject12FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject12 {
  if (json == null) {
    return json;
  }
  return {
    meta: InlineObject12MetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      InlineObject12ValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function InlineObject12ToJSON(json: any): InlineObject12 {
  return InlineObject12ToJSONTyped(json, false);
}

export function InlineObject12ToJSONTyped(
  value?: InlineObject12 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: InlineObject12MetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      InlineObject12ValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
