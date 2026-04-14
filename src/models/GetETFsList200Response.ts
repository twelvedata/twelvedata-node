/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsList200ResponseResult } from "./GetETFsList200ResponseResult";
import {
  GetETFsList200ResponseResultFromJSON,
  GetETFsList200ResponseResultFromJSONTyped,
  GetETFsList200ResponseResultToJSON,
  GetETFsList200ResponseResultToJSONTyped,
} from "./GetETFsList200ResponseResult";

/**
 *
 * @export
 * @interface GetETFsList200Response
 */
export interface GetETFsList200Response {
  /**
   *
   * @type {GetETFsList200ResponseResult}
   * @memberof GetETFsList200Response
   */
  result?: GetETFsList200ResponseResult;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetETFsList200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetETFsList200Response interface.
 */
export function instanceOfGetETFsList200Response(
  value: object,
): value is GetETFsList200Response {
  return true;
}

export function GetETFsList200ResponseFromJSON(
  json: any,
): GetETFsList200Response {
  return GetETFsList200ResponseFromJSONTyped(json, false);
}

export function GetETFsList200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsList200Response {
  if (json == null) {
    return json;
  }
  return {
    result:
      json["result"] == null
        ? undefined
        : GetETFsList200ResponseResultFromJSON(json["result"]),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetETFsList200ResponseToJSON(
  json: any,
): GetETFsList200Response {
  return GetETFsList200ResponseToJSONTyped(json, false);
}

export function GetETFsList200ResponseToJSONTyped(
  value?: GetETFsList200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    result: GetETFsList200ResponseResultToJSON(value["result"]),
    status: value["status"],
  };
}
