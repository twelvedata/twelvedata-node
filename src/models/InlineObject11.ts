/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject11Meta } from "./InlineObject11Meta";
import {
  InlineObject11MetaFromJSON,
  InlineObject11MetaFromJSONTyped,
  InlineObject11MetaToJSON,
  InlineObject11MetaToJSONTyped,
} from "./InlineObject11Meta";
import type { InlineObject11ValuesInner } from "./InlineObject11ValuesInner";
import {
  InlineObject11ValuesInnerFromJSON,
  InlineObject11ValuesInnerFromJSONTyped,
  InlineObject11ValuesInnerToJSON,
  InlineObject11ValuesInnerToJSONTyped,
} from "./InlineObject11ValuesInner";

/**
 *
 * @export
 * @interface InlineObject11
 */
export interface InlineObject11 {
  /**
   *
   * @type {InlineObject11Meta}
   * @memberof InlineObject11
   */
  meta: InlineObject11Meta;
  /**
   * Array of time series data points
   * @type {Array<InlineObject11ValuesInner>}
   * @memberof InlineObject11
   */
  values: Array<InlineObject11ValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof InlineObject11
   */
  status: string;
}

/**
 * Check if a given object implements the InlineObject11 interface.
 */
export function instanceOfInlineObject11(
  value: object,
): value is InlineObject11 {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function InlineObject11FromJSON(json: any): InlineObject11 {
  return InlineObject11FromJSONTyped(json, false);
}

export function InlineObject11FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject11 {
  if (json == null) {
    return json;
  }
  return {
    meta: InlineObject11MetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      InlineObject11ValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function InlineObject11ToJSON(json: any): InlineObject11 {
  return InlineObject11ToJSONTyped(json, false);
}

export function InlineObject11ToJSONTyped(
  value?: InlineObject11 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: InlineObject11MetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      InlineObject11ValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
