/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetFunds200ResponseResult } from "./GetFunds200ResponseResult";
import {
  GetFunds200ResponseResultFromJSON,
  GetFunds200ResponseResultFromJSONTyped,
  GetFunds200ResponseResultToJSON,
  GetFunds200ResponseResultToJSONTyped,
} from "./GetFunds200ResponseResult";

/**
 *
 * @export
 * @interface GetFunds200Response
 */
export interface GetFunds200Response {
  /**
   *
   * @type {GetFunds200ResponseResult}
   * @memberof GetFunds200Response
   */
  result?: GetFunds200ResponseResult;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetFunds200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetFunds200Response interface.
 */
export function instanceOfGetFunds200Response(
  value: object,
): value is GetFunds200Response {
  return true;
}

export function GetFunds200ResponseFromJSON(json: any): GetFunds200Response {
  return GetFunds200ResponseFromJSONTyped(json, false);
}

export function GetFunds200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetFunds200Response {
  if (json == null) {
    return json;
  }
  return {
    result:
      json["result"] == null
        ? undefined
        : GetFunds200ResponseResultFromJSON(json["result"]),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetFunds200ResponseToJSON(json: any): GetFunds200Response {
  return GetFunds200ResponseToJSONTyped(json, false);
}

export function GetFunds200ResponseToJSONTyped(
  value?: GetFunds200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    result: GetFunds200ResponseResultToJSON(value["result"]),
    status: value["status"],
  };
}
