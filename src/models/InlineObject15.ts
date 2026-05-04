/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject15ValuesInner } from "./InlineObject15ValuesInner";
import {
  InlineObject15ValuesInnerFromJSON,
  InlineObject15ValuesInnerFromJSONTyped,
  InlineObject15ValuesInnerToJSON,
  InlineObject15ValuesInnerToJSONTyped,
} from "./InlineObject15ValuesInner";
import type { InlineObject15Meta } from "./InlineObject15Meta";
import {
  InlineObject15MetaFromJSON,
  InlineObject15MetaFromJSONTyped,
  InlineObject15MetaToJSON,
  InlineObject15MetaToJSONTyped,
} from "./InlineObject15Meta";

/**
 *
 * @export
 * @interface InlineObject15
 */
export interface InlineObject15 {
  /**
   *
   * @type {InlineObject15Meta}
   * @memberof InlineObject15
   */
  meta: InlineObject15Meta;
  /**
   * Array of time series data points
   * @type {Array<InlineObject15ValuesInner>}
   * @memberof InlineObject15
   */
  values: Array<InlineObject15ValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof InlineObject15
   */
  status: string;
}

/**
 * Check if a given object implements the InlineObject15 interface.
 */
export function instanceOfInlineObject15(
  value: object,
): value is InlineObject15 {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function InlineObject15FromJSON(json: any): InlineObject15 {
  return InlineObject15FromJSONTyped(json, false);
}

export function InlineObject15FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject15 {
  if (json == null) {
    return json;
  }
  return {
    meta: InlineObject15MetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      InlineObject15ValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function InlineObject15ToJSON(json: any): InlineObject15 {
  return InlineObject15ToJSONTyped(json, false);
}

export function InlineObject15ToJSONTyped(
  value?: InlineObject15 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: InlineObject15MetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      InlineObject15ValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
