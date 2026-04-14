/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { BondResponseItem } from "./BondResponseItem";
import {
  BondResponseItemFromJSON,
  BondResponseItemFromJSONTyped,
  BondResponseItemToJSON,
  BondResponseItemToJSONTyped,
} from "./BondResponseItem";

/**
 *
 * @export
 * @interface GetBonds200ResponseResult
 */
export interface GetBonds200ResponseResult {
  /**
   * Total number of matching instruments
   * @type {number}
   * @memberof GetBonds200ResponseResult
   */
  count?: number;
  /**
   *
   * @type {Array<BondResponseItem>}
   * @memberof GetBonds200ResponseResult
   */
  list?: Array<BondResponseItem>;
}

/**
 * Check if a given object implements the GetBonds200ResponseResult interface.
 */
export function instanceOfGetBonds200ResponseResult(
  value: object,
): value is GetBonds200ResponseResult {
  return true;
}

export function GetBonds200ResponseResultFromJSON(
  json: any,
): GetBonds200ResponseResult {
  return GetBonds200ResponseResultFromJSONTyped(json, false);
}

export function GetBonds200ResponseResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBonds200ResponseResult {
  if (json == null) {
    return json;
  }
  return {
    count: json["count"] == null ? undefined : json["count"],
    list:
      json["list"] == null
        ? undefined
        : (json["list"] as Array<any>).map(BondResponseItemFromJSON),
  };
}

export function GetBonds200ResponseResultToJSON(
  json: any,
): GetBonds200ResponseResult {
  return GetBonds200ResponseResultToJSONTyped(json, false);
}

export function GetBonds200ResponseResultToJSONTyped(
  value?: GetBonds200ResponseResult | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    count: value["count"],
    list:
      value["list"] == null
        ? undefined
        : (value["list"] as Array<any>).map(BondResponseItemToJSON),
  };
}
