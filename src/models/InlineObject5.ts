/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { OptionSide } from "./OptionSide";
import {
  OptionSideFromJSON,
  OptionSideFromJSONTyped,
  OptionSideToJSON,
  OptionSideToJSONTyped,
} from "./OptionSide";

/**
 *
 * @export
 * @interface InlineObject5
 */
export interface InlineObject5 {
  /**
   *
   * @type {Array<OptionSide>}
   * @memberof InlineObject5
   */
  calls?: Array<OptionSide>;
  /**
   *
   * @type {Array<OptionSide>}
   * @memberof InlineObject5
   */
  puts?: Array<OptionSide>;
}

/**
 * Check if a given object implements the InlineObject5 interface.
 */
export function instanceOfInlineObject5(value: object): value is InlineObject5 {
  return true;
}

export function InlineObject5FromJSON(json: any): InlineObject5 {
  return InlineObject5FromJSONTyped(json, false);
}

export function InlineObject5FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject5 {
  if (json == null) {
    return json;
  }
  return {
    calls:
      json["calls"] == null
        ? undefined
        : (json["calls"] as Array<any>).map(OptionSideFromJSON),
    puts:
      json["puts"] == null
        ? undefined
        : (json["puts"] as Array<any>).map(OptionSideFromJSON),
  };
}

export function InlineObject5ToJSON(json: any): InlineObject5 {
  return InlineObject5ToJSONTyped(json, false);
}

export function InlineObject5ToJSONTyped(
  value?: InlineObject5 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    calls:
      value["calls"] == null
        ? undefined
        : (value["calls"] as Array<any>).map(OptionSideToJSON),
    puts:
      value["puts"] == null
        ? undefined
        : (value["puts"] as Array<any>).map(OptionSideToJSON),
  };
}
