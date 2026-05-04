/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetSplits200ResponseSplitsInner } from "./GetSplits200ResponseSplitsInner";
import {
  GetSplits200ResponseSplitsInnerFromJSON,
  GetSplits200ResponseSplitsInnerFromJSONTyped,
  GetSplits200ResponseSplitsInnerToJSON,
  GetSplits200ResponseSplitsInnerToJSONTyped,
} from "./GetSplits200ResponseSplitsInner";
import type { GetSplits200ResponseMeta } from "./GetSplits200ResponseMeta";
import {
  GetSplits200ResponseMetaFromJSON,
  GetSplits200ResponseMetaFromJSONTyped,
  GetSplits200ResponseMetaToJSON,
  GetSplits200ResponseMetaToJSONTyped,
} from "./GetSplits200ResponseMeta";

/**
 *
 * @export
 * @interface GetSplits200Response
 */
export interface GetSplits200Response {
  /**
   *
   * @type {GetSplits200ResponseMeta}
   * @memberof GetSplits200Response
   */
  meta: GetSplits200ResponseMeta;
  /**
   * List of stock splits
   * @type {Array<GetSplits200ResponseSplitsInner>}
   * @memberof GetSplits200Response
   */
  splits: Array<GetSplits200ResponseSplitsInner>;
}

/**
 * Check if a given object implements the GetSplits200Response interface.
 */
export function instanceOfGetSplits200Response(
  value: object,
): value is GetSplits200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("splits" in value) || value["splits"] === undefined) return false;
  return true;
}

export function GetSplits200ResponseFromJSON(json: any): GetSplits200Response {
  return GetSplits200ResponseFromJSONTyped(json, false);
}

export function GetSplits200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSplits200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetSplits200ResponseMetaFromJSON(json["meta"]),
    splits: (json["splits"] as Array<any>).map(
      GetSplits200ResponseSplitsInnerFromJSON,
    ),
  };
}

export function GetSplits200ResponseToJSON(json: any): GetSplits200Response {
  return GetSplits200ResponseToJSONTyped(json, false);
}

export function GetSplits200ResponseToJSONTyped(
  value?: GetSplits200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetSplits200ResponseMetaToJSON(value["meta"]),
    splits: (value["splits"] as Array<any>).map(
      GetSplits200ResponseSplitsInnerToJSON,
    ),
  };
}
