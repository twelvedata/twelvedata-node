/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ETFsListResponseItem } from "./ETFsListResponseItem";
import {
  ETFsListResponseItemFromJSON,
  ETFsListResponseItemFromJSONTyped,
  ETFsListResponseItemToJSON,
  ETFsListResponseItemToJSONTyped,
} from "./ETFsListResponseItem";

/**
 *
 * @export
 * @interface GetETFsList200ResponseResult
 */
export interface GetETFsList200ResponseResult {
  /**
   * Total number of matching funds
   * @type {number}
   * @memberof GetETFsList200ResponseResult
   */
  count?: number;
  /**
   * List of ETFs
   * @type {Array<ETFsListResponseItem>}
   * @memberof GetETFsList200ResponseResult
   */
  list?: Array<ETFsListResponseItem>;
}

/**
 * Check if a given object implements the GetETFsList200ResponseResult interface.
 */
export function instanceOfGetETFsList200ResponseResult(
  value: object,
): value is GetETFsList200ResponseResult {
  return true;
}

export function GetETFsList200ResponseResultFromJSON(
  json: any,
): GetETFsList200ResponseResult {
  return GetETFsList200ResponseResultFromJSONTyped(json, false);
}

export function GetETFsList200ResponseResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsList200ResponseResult {
  if (json == null) {
    return json;
  }
  return {
    count: json["count"] == null ? undefined : json["count"],
    list:
      json["list"] == null
        ? undefined
        : (json["list"] as Array<any>).map(ETFsListResponseItemFromJSON),
  };
}

export function GetETFsList200ResponseResultToJSON(
  json: any,
): GetETFsList200ResponseResult {
  return GetETFsList200ResponseResultToJSONTyped(json, false);
}

export function GetETFsList200ResponseResultToJSONTyped(
  value?: GetETFsList200ResponseResult | null,
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
        : (value["list"] as Array<any>).map(ETFsListResponseItemToJSON),
  };
}
