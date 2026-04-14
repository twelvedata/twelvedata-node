/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ModelIndex } from "./ModelIndex";
import {
  ModelIndexFromJSON,
  ModelIndexFromJSONTyped,
  ModelIndexToJSON,
  ModelIndexToJSONTyped,
} from "./ModelIndex";

/**
 *
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
  /**
   *
   * @type {Array<ModelIndex>}
   * @memberof InlineObject1
   */
  data?: Array<ModelIndex>;
}

/**
 * Check if a given object implements the InlineObject1 interface.
 */
export function instanceOfInlineObject1(value: object): value is InlineObject1 {
  return true;
}

export function InlineObject1FromJSON(json: any): InlineObject1 {
  return InlineObject1FromJSONTyped(json, false);
}

export function InlineObject1FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject1 {
  if (json == null) {
    return json;
  }
  return {
    data:
      json["data"] == null
        ? undefined
        : (json["data"] as Array<any>).map(ModelIndexFromJSON),
  };
}

export function InlineObject1ToJSON(json: any): InlineObject1 {
  return InlineObject1ToJSONTyped(json, false);
}

export function InlineObject1ToJSONTyped(
  value?: InlineObject1 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data:
      value["data"] == null
        ? undefined
        : (value["data"] as Array<any>).map(ModelIndexToJSON),
  };
}
