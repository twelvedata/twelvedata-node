/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject9ValuesInner } from "./InlineObject9ValuesInner";
import {
  InlineObject9ValuesInnerFromJSON,
  InlineObject9ValuesInnerFromJSONTyped,
  InlineObject9ValuesInnerToJSON,
  InlineObject9ValuesInnerToJSONTyped,
} from "./InlineObject9ValuesInner";
import type { InlineObject9Meta } from "./InlineObject9Meta";
import {
  InlineObject9MetaFromJSON,
  InlineObject9MetaFromJSONTyped,
  InlineObject9MetaToJSON,
  InlineObject9MetaToJSONTyped,
} from "./InlineObject9Meta";

/**
 *
 * @export
 * @interface InlineObject9
 */
export interface InlineObject9 {
  /**
   *
   * @type {InlineObject9Meta}
   * @memberof InlineObject9
   */
  meta?: InlineObject9Meta;
  /**
   * Array of time series data points
   * @type {Array<InlineObject9ValuesInner>}
   * @memberof InlineObject9
   */
  values?: Array<InlineObject9ValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof InlineObject9
   */
  status?: string;
}

/**
 * Check if a given object implements the InlineObject9 interface.
 */
export function instanceOfInlineObject9(value: object): value is InlineObject9 {
  return true;
}

export function InlineObject9FromJSON(json: any): InlineObject9 {
  return InlineObject9FromJSONTyped(json, false);
}

export function InlineObject9FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject9 {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : InlineObject9MetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(InlineObject9ValuesInnerFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function InlineObject9ToJSON(json: any): InlineObject9 {
  return InlineObject9ToJSONTyped(json, false);
}

export function InlineObject9ToJSONTyped(
  value?: InlineObject9 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: InlineObject9MetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(InlineObject9ValuesInnerToJSON),
    status: value["status"],
  };
}
