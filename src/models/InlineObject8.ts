/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject8ValuesInner } from "./InlineObject8ValuesInner";
import {
  InlineObject8ValuesInnerFromJSON,
  InlineObject8ValuesInnerFromJSONTyped,
  InlineObject8ValuesInnerToJSON,
  InlineObject8ValuesInnerToJSONTyped,
} from "./InlineObject8ValuesInner";
import type { InlineObject8Meta } from "./InlineObject8Meta";
import {
  InlineObject8MetaFromJSON,
  InlineObject8MetaFromJSONTyped,
  InlineObject8MetaToJSON,
  InlineObject8MetaToJSONTyped,
} from "./InlineObject8Meta";

/**
 *
 * @export
 * @interface InlineObject8
 */
export interface InlineObject8 {
  /**
   *
   * @type {InlineObject8Meta}
   * @memberof InlineObject8
   */
  meta?: InlineObject8Meta;
  /**
   * Array of time series data points
   * @type {Array<InlineObject8ValuesInner>}
   * @memberof InlineObject8
   */
  values?: Array<InlineObject8ValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof InlineObject8
   */
  status?: string;
}

/**
 * Check if a given object implements the InlineObject8 interface.
 */
export function instanceOfInlineObject8(value: object): value is InlineObject8 {
  return true;
}

export function InlineObject8FromJSON(json: any): InlineObject8 {
  return InlineObject8FromJSONTyped(json, false);
}

export function InlineObject8FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject8 {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : InlineObject8MetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(InlineObject8ValuesInnerFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function InlineObject8ToJSON(json: any): InlineObject8 {
  return InlineObject8ToJSONTyped(json, false);
}

export function InlineObject8ToJSONTyped(
  value?: InlineObject8 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: InlineObject8MetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(InlineObject8ValuesInnerToJSON),
    status: value["status"],
  };
}
