/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetKeyExecutives200ResponseMeta } from "./GetKeyExecutives200ResponseMeta";
import {
  GetKeyExecutives200ResponseMetaFromJSON,
  GetKeyExecutives200ResponseMetaFromJSONTyped,
  GetKeyExecutives200ResponseMetaToJSON,
  GetKeyExecutives200ResponseMetaToJSONTyped,
} from "./GetKeyExecutives200ResponseMeta";
import type { GetKeyExecutives200ResponseKeyExecutivesInner } from "./GetKeyExecutives200ResponseKeyExecutivesInner";
import {
  GetKeyExecutives200ResponseKeyExecutivesInnerFromJSON,
  GetKeyExecutives200ResponseKeyExecutivesInnerFromJSONTyped,
  GetKeyExecutives200ResponseKeyExecutivesInnerToJSON,
  GetKeyExecutives200ResponseKeyExecutivesInnerToJSONTyped,
} from "./GetKeyExecutives200ResponseKeyExecutivesInner";

/**
 *
 * @export
 * @interface GetKeyExecutives200Response
 */
export interface GetKeyExecutives200Response {
  /**
   *
   * @type {GetKeyExecutives200ResponseMeta}
   * @memberof GetKeyExecutives200Response
   */
  meta: GetKeyExecutives200ResponseMeta;
  /**
   * List of key executives
   * @type {Array<GetKeyExecutives200ResponseKeyExecutivesInner>}
   * @memberof GetKeyExecutives200Response
   */
  keyExecutives?: Array<GetKeyExecutives200ResponseKeyExecutivesInner>;
}

/**
 * Check if a given object implements the GetKeyExecutives200Response interface.
 */
export function instanceOfGetKeyExecutives200Response(
  value: object,
): value is GetKeyExecutives200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  return true;
}

export function GetKeyExecutives200ResponseFromJSON(
  json: any,
): GetKeyExecutives200Response {
  return GetKeyExecutives200ResponseFromJSONTyped(json, false);
}

export function GetKeyExecutives200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetKeyExecutives200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetKeyExecutives200ResponseMetaFromJSON(json["meta"]),
    keyExecutives:
      json["key_executives"] == null
        ? undefined
        : (json["key_executives"] as Array<any>).map(
            GetKeyExecutives200ResponseKeyExecutivesInnerFromJSON,
          ),
  };
}

export function GetKeyExecutives200ResponseToJSON(
  json: any,
): GetKeyExecutives200Response {
  return GetKeyExecutives200ResponseToJSONTyped(json, false);
}

export function GetKeyExecutives200ResponseToJSONTyped(
  value?: GetKeyExecutives200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetKeyExecutives200ResponseMetaToJSON(value["meta"]),
    key_executives:
      value["keyExecutives"] == null
        ? undefined
        : (value["keyExecutives"] as Array<any>).map(
            GetKeyExecutives200ResponseKeyExecutivesInnerToJSON,
          ),
  };
}
