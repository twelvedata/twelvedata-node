/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMarketCap200ResponseMeta } from "./GetMarketCap200ResponseMeta";
import {
  GetMarketCap200ResponseMetaFromJSON,
  GetMarketCap200ResponseMetaFromJSONTyped,
  GetMarketCap200ResponseMetaToJSON,
  GetMarketCap200ResponseMetaToJSONTyped,
} from "./GetMarketCap200ResponseMeta";
import type { GetMarketCap200ResponseMarketCapInner } from "./GetMarketCap200ResponseMarketCapInner";
import {
  GetMarketCap200ResponseMarketCapInnerFromJSON,
  GetMarketCap200ResponseMarketCapInnerFromJSONTyped,
  GetMarketCap200ResponseMarketCapInnerToJSON,
  GetMarketCap200ResponseMarketCapInnerToJSONTyped,
} from "./GetMarketCap200ResponseMarketCapInner";

/**
 *
 * @export
 * @interface GetMarketCap200Response
 */
export interface GetMarketCap200Response {
  /**
   *
   * @type {GetMarketCap200ResponseMeta}
   * @memberof GetMarketCap200Response
   */
  meta: GetMarketCap200ResponseMeta;
  /**
   * Market capitalization values
   * @type {Array<GetMarketCap200ResponseMarketCapInner>}
   * @memberof GetMarketCap200Response
   */
  marketCap: Array<GetMarketCap200ResponseMarketCapInner>;
}

/**
 * Check if a given object implements the GetMarketCap200Response interface.
 */
export function instanceOfGetMarketCap200Response(
  value: object,
): value is GetMarketCap200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("marketCap" in value) || value["marketCap"] === undefined) return false;
  return true;
}

export function GetMarketCap200ResponseFromJSON(
  json: any,
): GetMarketCap200Response {
  return GetMarketCap200ResponseFromJSONTyped(json, false);
}

export function GetMarketCap200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMarketCap200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetMarketCap200ResponseMetaFromJSON(json["meta"]),
    marketCap: (json["market_cap"] as Array<any>).map(
      GetMarketCap200ResponseMarketCapInnerFromJSON,
    ),
  };
}

export function GetMarketCap200ResponseToJSON(
  json: any,
): GetMarketCap200Response {
  return GetMarketCap200ResponseToJSONTyped(json, false);
}

export function GetMarketCap200ResponseToJSONTyped(
  value?: GetMarketCap200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetMarketCap200ResponseMetaToJSON(value["meta"]),
    market_cap: (value["marketCap"] as Array<any>).map(
      GetMarketCap200ResponseMarketCapInnerToJSON,
    ),
  };
}
