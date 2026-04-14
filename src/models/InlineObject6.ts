/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface InlineObject6
 */
export interface InlineObject6 {
  /**
   *
   * @type {Array<string>}
   * @memberof InlineObject6
   */
  dates?: Array<string>;
}

/**
 * Check if a given object implements the InlineObject6 interface.
 */
export function instanceOfInlineObject6(value: object): value is InlineObject6 {
  return true;
}

export function InlineObject6FromJSON(json: any): InlineObject6 {
  return InlineObject6FromJSONTyped(json, false);
}

export function InlineObject6FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject6 {
  if (json == null) {
    return json;
  }
  return {
    dates: json["dates"] == null ? undefined : json["dates"],
  };
}

export function InlineObject6ToJSON(json: any): InlineObject6 {
  return InlineObject6ToJSONTyped(json, false);
}

export function InlineObject6ToJSONTyped(
  value?: InlineObject6 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    dates: value["dates"],
  };
}
