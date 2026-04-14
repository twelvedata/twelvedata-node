/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject17Meta } from "./InlineObject17Meta";
import {
  InlineObject17MetaFromJSON,
  InlineObject17MetaFromJSONTyped,
  InlineObject17MetaToJSON,
  InlineObject17MetaToJSONTyped,
} from "./InlineObject17Meta";
import type { InlineObject17ValuesInner } from "./InlineObject17ValuesInner";
import {
  InlineObject17ValuesInnerFromJSON,
  InlineObject17ValuesInnerFromJSONTyped,
  InlineObject17ValuesInnerToJSON,
  InlineObject17ValuesInnerToJSONTyped,
} from "./InlineObject17ValuesInner";

/**
 *
 * @export
 * @interface InlineObject17
 */
export interface InlineObject17 {
  /**
   *
   * @type {InlineObject17Meta}
   * @memberof InlineObject17
   */
  meta?: InlineObject17Meta;
  /**
   * Array of time series data points
   * @type {Array<InlineObject17ValuesInner>}
   * @memberof InlineObject17
   */
  values?: Array<InlineObject17ValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof InlineObject17
   */
  status?: string;
}

/**
 * Check if a given object implements the InlineObject17 interface.
 */
export function instanceOfInlineObject17(
  value: object,
): value is InlineObject17 {
  return true;
}

export function InlineObject17FromJSON(json: any): InlineObject17 {
  return InlineObject17FromJSONTyped(json, false);
}

export function InlineObject17FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject17 {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : InlineObject17MetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(InlineObject17ValuesInnerFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function InlineObject17ToJSON(json: any): InlineObject17 {
  return InlineObject17ToJSONTyped(json, false);
}

export function InlineObject17ToJSONTyped(
  value?: InlineObject17 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: InlineObject17MetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(InlineObject17ValuesInnerToJSON),
    status: value["status"],
  };
}
