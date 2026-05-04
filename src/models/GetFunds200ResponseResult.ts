/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { FundResponseItem } from "./FundResponseItem";
import {
  FundResponseItemFromJSON,
  FundResponseItemFromJSONTyped,
  FundResponseItemToJSON,
  FundResponseItemToJSONTyped,
} from "./FundResponseItem";

/**
 *
 * @export
 * @interface GetFunds200ResponseResult
 */
export interface GetFunds200ResponseResult {
  /**
   * Total number of matching instruments
   * @type {number}
   * @memberof GetFunds200ResponseResult
   */
  count: number;
  /**
   * List of funds
   * @type {Array<FundResponseItem>}
   * @memberof GetFunds200ResponseResult
   */
  list: Array<FundResponseItem>;
}

/**
 * Check if a given object implements the GetFunds200ResponseResult interface.
 */
export function instanceOfGetFunds200ResponseResult(
  value: object,
): value is GetFunds200ResponseResult {
  if (!("count" in value) || value["count"] === undefined) return false;
  if (!("list" in value) || value["list"] === undefined) return false;
  return true;
}

export function GetFunds200ResponseResultFromJSON(
  json: any,
): GetFunds200ResponseResult {
  return GetFunds200ResponseResultFromJSONTyped(json, false);
}

export function GetFunds200ResponseResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetFunds200ResponseResult {
  if (json == null) {
    return json;
  }
  return {
    count: json["count"],
    list: (json["list"] as Array<any>).map(FundResponseItemFromJSON),
  };
}

export function GetFunds200ResponseResultToJSON(
  json: any,
): GetFunds200ResponseResult {
  return GetFunds200ResponseResultToJSONTyped(json, false);
}

export function GetFunds200ResponseResultToJSONTyped(
  value?: GetFunds200ResponseResult | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    count: value["count"],
    list: (value["list"] as Array<any>).map(FundResponseItemToJSON),
  };
}
