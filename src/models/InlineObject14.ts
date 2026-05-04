/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject14ValuesInner } from "./InlineObject14ValuesInner";
import {
  InlineObject14ValuesInnerFromJSON,
  InlineObject14ValuesInnerFromJSONTyped,
  InlineObject14ValuesInnerToJSON,
  InlineObject14ValuesInnerToJSONTyped,
} from "./InlineObject14ValuesInner";
import type { InlineObject14Meta } from "./InlineObject14Meta";
import {
  InlineObject14MetaFromJSON,
  InlineObject14MetaFromJSONTyped,
  InlineObject14MetaToJSON,
  InlineObject14MetaToJSONTyped,
} from "./InlineObject14Meta";

/**
 *
 * @export
 * @interface InlineObject14
 */
export interface InlineObject14 {
  /**
   *
   * @type {InlineObject14Meta}
   * @memberof InlineObject14
   */
  meta: InlineObject14Meta;
  /**
   * Array of time series data points
   * @type {Array<InlineObject14ValuesInner>}
   * @memberof InlineObject14
   */
  values: Array<InlineObject14ValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof InlineObject14
   */
  status: string;
}

/**
 * Check if a given object implements the InlineObject14 interface.
 */
export function instanceOfInlineObject14(
  value: object,
): value is InlineObject14 {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function InlineObject14FromJSON(json: any): InlineObject14 {
  return InlineObject14FromJSONTyped(json, false);
}

export function InlineObject14FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject14 {
  if (json == null) {
    return json;
  }
  return {
    meta: InlineObject14MetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      InlineObject14ValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function InlineObject14ToJSON(json: any): InlineObject14 {
  return InlineObject14ToJSONTyped(json, false);
}

export function InlineObject14ToJSONTyped(
  value?: InlineObject14 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: InlineObject14MetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      InlineObject14ValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
