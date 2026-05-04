/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { CrossListingsItem } from "./CrossListingsItem";
import {
  CrossListingsItemFromJSON,
  CrossListingsItemFromJSONTyped,
  CrossListingsItemToJSON,
  CrossListingsItemToJSONTyped,
} from "./CrossListingsItem";

/**
 * Represents the result of cross listings
 * @export
 * @interface CrossListingsResult
 */
export interface CrossListingsResult {
  /**
   * Number of cross listings found
   * @type {number}
   * @memberof CrossListingsResult
   */
  count: number;
  /**
   * List of cross listings
   * @type {Array<CrossListingsItem>}
   * @memberof CrossListingsResult
   */
  list: Array<CrossListingsItem>;
}

/**
 * Check if a given object implements the CrossListingsResult interface.
 */
export function instanceOfCrossListingsResult(
  value: object,
): value is CrossListingsResult {
  if (!("count" in value) || value["count"] === undefined) return false;
  if (!("list" in value) || value["list"] === undefined) return false;
  return true;
}

export function CrossListingsResultFromJSON(json: any): CrossListingsResult {
  return CrossListingsResultFromJSONTyped(json, false);
}

export function CrossListingsResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CrossListingsResult {
  if (json == null) {
    return json;
  }
  return {
    count: json["count"],
    list: (json["list"] as Array<any>).map(CrossListingsItemFromJSON),
  };
}

export function CrossListingsResultToJSON(json: any): CrossListingsResult {
  return CrossListingsResultToJSONTyped(json, false);
}

export function CrossListingsResultToJSONTyped(
  value?: CrossListingsResult | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    count: value["count"],
    list: (value["list"] as Array<any>).map(CrossListingsItemToJSON),
  };
}
