/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetLogo200ResponseMeta } from "./GetLogo200ResponseMeta";
import {
  GetLogo200ResponseMetaFromJSON,
  GetLogo200ResponseMetaFromJSONTyped,
  GetLogo200ResponseMetaToJSON,
  GetLogo200ResponseMetaToJSONTyped,
} from "./GetLogo200ResponseMeta";

/**
 *
 * @export
 * @interface GetLogo200Response
 */
export interface GetLogo200Response {
  /**
   *
   * @type {GetLogo200ResponseMeta}
   * @memberof GetLogo200Response
   */
  meta?: GetLogo200ResponseMeta;
  /**
   * Link to download the logo (for stocks only)
   * @type {string}
   * @memberof GetLogo200Response
   */
  url?: string;
  /**
   * Link to download the base currency logo (for `forex` and `crypto` only)
   * @type {string}
   * @memberof GetLogo200Response
   */
  logoBase?: string;
  /**
   * Link to download the quote currency logo (for `forex` and `crypto` only)
   * @type {string}
   * @memberof GetLogo200Response
   */
  logoQuote?: string;
}

/**
 * Check if a given object implements the GetLogo200Response interface.
 */
export function instanceOfGetLogo200Response(
  value: object,
): value is GetLogo200Response {
  return true;
}

export function GetLogo200ResponseFromJSON(json: any): GetLogo200Response {
  return GetLogo200ResponseFromJSONTyped(json, false);
}

export function GetLogo200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetLogo200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetLogo200ResponseMetaFromJSON(json["meta"]),
    url: json["url"] == null ? undefined : json["url"],
    logoBase: json["logo_base"] == null ? undefined : json["logo_base"],
    logoQuote: json["logo_quote"] == null ? undefined : json["logo_quote"],
  };
}

export function GetLogo200ResponseToJSON(json: any): GetLogo200Response {
  return GetLogo200ResponseToJSONTyped(json, false);
}

export function GetLogo200ResponseToJSONTyped(
  value?: GetLogo200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetLogo200ResponseMetaToJSON(value["meta"]),
    url: value["url"],
    logo_base: value["logoBase"],
    logo_quote: value["logoQuote"],
  };
}
