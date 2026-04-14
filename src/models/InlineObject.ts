/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetAssetsResponseItem } from "./GetAssetsResponseItem";
import {
  GetAssetsResponseItemFromJSON,
  GetAssetsResponseItemFromJSONTyped,
  GetAssetsResponseItemToJSON,
  GetAssetsResponseItemToJSONTyped,
} from "./GetAssetsResponseItem";

/**
 *
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
  /**
   * List of assets with their details
   * @type {Array<GetAssetsResponseItem>}
   * @memberof InlineObject
   */
  data: Array<GetAssetsResponseItem>;
}

/**
 * Check if a given object implements the InlineObject interface.
 */
export function instanceOfInlineObject(value: object): value is InlineObject {
  if (!("data" in value) || value["data"] === undefined) return false;
  return true;
}

export function InlineObjectFromJSON(json: any): InlineObject {
  return InlineObjectFromJSONTyped(json, false);
}

export function InlineObjectFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(GetAssetsResponseItemFromJSON),
  };
}

export function InlineObjectToJSON(json: any): InlineObject {
  return InlineObjectToJSONTyped(json, false);
}

export function InlineObjectToJSONTyped(
  value?: InlineObject | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data: (value["data"] as Array<any>).map(GetAssetsResponseItemToJSON),
  };
}
