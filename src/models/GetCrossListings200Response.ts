/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { CrossListingsResult } from "./CrossListingsResult";
import {
  CrossListingsResultFromJSON,
  CrossListingsResultFromJSONTyped,
  CrossListingsResultToJSON,
  CrossListingsResultToJSONTyped,
} from "./CrossListingsResult";

/**
 *
 * @export
 * @interface GetCrossListings200Response
 */
export interface GetCrossListings200Response {
  /**
   *
   * @type {CrossListingsResult}
   * @memberof GetCrossListings200Response
   */
  result?: CrossListingsResult;
}

/**
 * Check if a given object implements the GetCrossListings200Response interface.
 */
export function instanceOfGetCrossListings200Response(
  value: object,
): value is GetCrossListings200Response {
  return true;
}

export function GetCrossListings200ResponseFromJSON(
  json: any,
): GetCrossListings200Response {
  return GetCrossListings200ResponseFromJSONTyped(json, false);
}

export function GetCrossListings200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetCrossListings200Response {
  if (json == null) {
    return json;
  }
  return {
    result:
      json["result"] == null
        ? undefined
        : CrossListingsResultFromJSON(json["result"]),
  };
}

export function GetCrossListings200ResponseToJSON(
  json: any,
): GetCrossListings200Response {
  return GetCrossListings200ResponseToJSONTyped(json, false);
}

export function GetCrossListings200ResponseToJSONTyped(
  value?: GetCrossListings200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    result: CrossListingsResultToJSON(value["result"]),
  };
}
