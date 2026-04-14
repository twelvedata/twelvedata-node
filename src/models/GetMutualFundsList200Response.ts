/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsList200ResponseResult } from "./GetMutualFundsList200ResponseResult";
import {
  GetMutualFundsList200ResponseResultFromJSON,
  GetMutualFundsList200ResponseResultFromJSONTyped,
  GetMutualFundsList200ResponseResultToJSON,
  GetMutualFundsList200ResponseResultToJSONTyped,
} from "./GetMutualFundsList200ResponseResult";

/**
 *
 * @export
 * @interface GetMutualFundsList200Response
 */
export interface GetMutualFundsList200Response {
  /**
   *
   * @type {GetMutualFundsList200ResponseResult}
   * @memberof GetMutualFundsList200Response
   */
  result?: GetMutualFundsList200ResponseResult;
  /**
   * Response status
   * @type {string}
   * @memberof GetMutualFundsList200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetMutualFundsList200Response interface.
 */
export function instanceOfGetMutualFundsList200Response(
  value: object,
): value is GetMutualFundsList200Response {
  return true;
}

export function GetMutualFundsList200ResponseFromJSON(
  json: any,
): GetMutualFundsList200Response {
  return GetMutualFundsList200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsList200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsList200Response {
  if (json == null) {
    return json;
  }
  return {
    result:
      json["result"] == null
        ? undefined
        : GetMutualFundsList200ResponseResultFromJSON(json["result"]),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetMutualFundsList200ResponseToJSON(
  json: any,
): GetMutualFundsList200Response {
  return GetMutualFundsList200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsList200ResponseToJSONTyped(
  value?: GetMutualFundsList200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    result: GetMutualFundsList200ResponseResultToJSON(value["result"]),
    status: value["status"],
  };
}
