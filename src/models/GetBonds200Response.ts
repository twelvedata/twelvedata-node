/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetBonds200ResponseResult } from "./GetBonds200ResponseResult";
import {
  GetBonds200ResponseResultFromJSON,
  GetBonds200ResponseResultFromJSONTyped,
  GetBonds200ResponseResultToJSON,
  GetBonds200ResponseResultToJSONTyped,
} from "./GetBonds200ResponseResult";

/**
 *
 * @export
 * @interface GetBonds200Response
 */
export interface GetBonds200Response {
  /**
   *
   * @type {GetBonds200ResponseResult}
   * @memberof GetBonds200Response
   */
  result: GetBonds200ResponseResult;
  /**
   * Response status
   * @type {string}
   * @memberof GetBonds200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetBonds200Response interface.
 */
export function instanceOfGetBonds200Response(
  value: object,
): value is GetBonds200Response {
  if (!("result" in value) || value["result"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetBonds200ResponseFromJSON(json: any): GetBonds200Response {
  return GetBonds200ResponseFromJSONTyped(json, false);
}

export function GetBonds200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBonds200Response {
  if (json == null) {
    return json;
  }
  return {
    result: GetBonds200ResponseResultFromJSON(json["result"]),
    status: json["status"],
  };
}

export function GetBonds200ResponseToJSON(json: any): GetBonds200Response {
  return GetBonds200ResponseToJSONTyped(json, false);
}

export function GetBonds200ResponseToJSONTyped(
  value?: GetBonds200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    result: GetBonds200ResponseResultToJSON(value["result"]),
    status: value["status"],
  };
}
