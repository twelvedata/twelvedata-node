/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { MutualFundsListResponseListItem } from "./MutualFundsListResponseListItem";
import {
  MutualFundsListResponseListItemFromJSON,
  MutualFundsListResponseListItemFromJSONTyped,
  MutualFundsListResponseListItemToJSON,
  MutualFundsListResponseListItemToJSONTyped,
} from "./MutualFundsListResponseListItem";

/**
 * Response result
 * @export
 * @interface GetMutualFundsList200ResponseResult
 */
export interface GetMutualFundsList200ResponseResult {
  /**
   * Total number of matching funds
   * @type {number}
   * @memberof GetMutualFundsList200ResponseResult
   */
  count: number;
  /**
   * List of mutual funds
   * @type {Array<MutualFundsListResponseListItem>}
   * @memberof GetMutualFundsList200ResponseResult
   */
  list: Array<MutualFundsListResponseListItem>;
}

/**
 * Check if a given object implements the GetMutualFundsList200ResponseResult interface.
 */
export function instanceOfGetMutualFundsList200ResponseResult(
  value: object,
): value is GetMutualFundsList200ResponseResult {
  if (!("count" in value) || value["count"] === undefined) return false;
  if (!("list" in value) || value["list"] === undefined) return false;
  return true;
}

export function GetMutualFundsList200ResponseResultFromJSON(
  json: any,
): GetMutualFundsList200ResponseResult {
  return GetMutualFundsList200ResponseResultFromJSONTyped(json, false);
}

export function GetMutualFundsList200ResponseResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsList200ResponseResult {
  if (json == null) {
    return json;
  }
  return {
    count: json["count"],
    list: (json["list"] as Array<any>).map(
      MutualFundsListResponseListItemFromJSON,
    ),
  };
}

export function GetMutualFundsList200ResponseResultToJSON(
  json: any,
): GetMutualFundsList200ResponseResult {
  return GetMutualFundsList200ResponseResultToJSONTyped(json, false);
}

export function GetMutualFundsList200ResponseResultToJSONTyped(
  value?: GetMutualFundsList200ResponseResult | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    count: value["count"],
    list: (value["list"] as Array<any>).map(
      MutualFundsListResponseListItemToJSON,
    ),
  };
}
