/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Meta information about the instrument
 * @export
 * @interface GetLogo200ResponseMeta
 */
export interface GetLogo200ResponseMeta {
  /**
   * The ticker symbol of an instrument
   * @type {string}
   * @memberof GetLogo200ResponseMeta
   */
  symbol: string;
  /**
   * The exchange where the instrument is traded (for `crypto` only)
   * @type {string}
   * @memberof GetLogo200ResponseMeta
   */
  exchange?: string;
}

/**
 * Check if a given object implements the GetLogo200ResponseMeta interface.
 */
export function instanceOfGetLogo200ResponseMeta(
  value: object,
): value is GetLogo200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  return true;
}

export function GetLogo200ResponseMetaFromJSON(
  json: any,
): GetLogo200ResponseMeta {
  return GetLogo200ResponseMetaFromJSONTyped(json, false);
}

export function GetLogo200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetLogo200ResponseMeta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
  };
}

export function GetLogo200ResponseMetaToJSON(
  json: any,
): GetLogo200ResponseMeta {
  return GetLogo200ResponseMetaToJSONTyped(json, false);
}

export function GetLogo200ResponseMetaToJSONTyped(
  value?: GetLogo200ResponseMeta | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    exchange: value["exchange"],
  };
}
