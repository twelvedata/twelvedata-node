/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { EarningsItem } from "./EarningsItem";
import {
  EarningsItemFromJSON,
  EarningsItemFromJSONTyped,
  EarningsItemToJSON,
  EarningsItemToJSONTyped,
} from "./EarningsItem";
import type { GetEarnings200ResponseMeta } from "./GetEarnings200ResponseMeta";
import {
  GetEarnings200ResponseMetaFromJSON,
  GetEarnings200ResponseMetaFromJSONTyped,
  GetEarnings200ResponseMetaToJSON,
  GetEarnings200ResponseMetaToJSONTyped,
} from "./GetEarnings200ResponseMeta";

/**
 *
 * @export
 * @interface GetEarnings200Response
 */
export interface GetEarnings200Response {
  /**
   *
   * @type {GetEarnings200ResponseMeta}
   * @memberof GetEarnings200Response
   */
  meta?: GetEarnings200ResponseMeta;
  /**
   * List of earnings data
   * @type {Array<EarningsItem>}
   * @memberof GetEarnings200Response
   */
  earnings?: Array<EarningsItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetEarnings200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetEarnings200Response interface.
 */
export function instanceOfGetEarnings200Response(
  value: object,
): value is GetEarnings200Response {
  return true;
}

export function GetEarnings200ResponseFromJSON(
  json: any,
): GetEarnings200Response {
  return GetEarnings200ResponseFromJSONTyped(json, false);
}

export function GetEarnings200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEarnings200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetEarnings200ResponseMetaFromJSON(json["meta"]),
    earnings:
      json["earnings"] == null
        ? undefined
        : (json["earnings"] as Array<any>).map(EarningsItemFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetEarnings200ResponseToJSON(
  json: any,
): GetEarnings200Response {
  return GetEarnings200ResponseToJSONTyped(json, false);
}

export function GetEarnings200ResponseToJSONTyped(
  value?: GetEarnings200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetEarnings200ResponseMetaToJSON(value["meta"]),
    earnings:
      value["earnings"] == null
        ? undefined
        : (value["earnings"] as Array<any>).map(EarningsItemToJSON),
    status: value["status"],
  };
}
