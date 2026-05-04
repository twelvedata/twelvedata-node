/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetDirectHolders200ResponseMeta } from "./GetDirectHolders200ResponseMeta";
import {
  GetDirectHolders200ResponseMetaFromJSON,
  GetDirectHolders200ResponseMetaFromJSONTyped,
  GetDirectHolders200ResponseMetaToJSON,
  GetDirectHolders200ResponseMetaToJSONTyped,
} from "./GetDirectHolders200ResponseMeta";
import type { DirectHolderItem } from "./DirectHolderItem";
import {
  DirectHolderItemFromJSON,
  DirectHolderItemFromJSONTyped,
  DirectHolderItemToJSON,
  DirectHolderItemToJSONTyped,
} from "./DirectHolderItem";

/**
 *
 * @export
 * @interface GetDirectHolders200Response
 */
export interface GetDirectHolders200Response {
  /**
   *
   * @type {GetDirectHolders200ResponseMeta}
   * @memberof GetDirectHolders200Response
   */
  meta: GetDirectHolders200ResponseMeta;
  /**
   * List of direct holders for the financial instrument
   * @type {Array<DirectHolderItem>}
   * @memberof GetDirectHolders200Response
   */
  directHolders: Array<DirectHolderItem>;
}

/**
 * Check if a given object implements the GetDirectHolders200Response interface.
 */
export function instanceOfGetDirectHolders200Response(
  value: object,
): value is GetDirectHolders200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("directHolders" in value) || value["directHolders"] === undefined)
    return false;
  return true;
}

export function GetDirectHolders200ResponseFromJSON(
  json: any,
): GetDirectHolders200Response {
  return GetDirectHolders200ResponseFromJSONTyped(json, false);
}

export function GetDirectHolders200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetDirectHolders200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetDirectHolders200ResponseMetaFromJSON(json["meta"]),
    directHolders: (json["direct_holders"] as Array<any>).map(
      DirectHolderItemFromJSON,
    ),
  };
}

export function GetDirectHolders200ResponseToJSON(
  json: any,
): GetDirectHolders200Response {
  return GetDirectHolders200ResponseToJSONTyped(json, false);
}

export function GetDirectHolders200ResponseToJSONTyped(
  value?: GetDirectHolders200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetDirectHolders200ResponseMetaToJSON(value["meta"]),
    direct_holders: (value["directHolders"] as Array<any>).map(
      DirectHolderItemToJSON,
    ),
  };
}
