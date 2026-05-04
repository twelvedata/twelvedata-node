/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Meta information about the company and listing
 * @export
 * @interface GetEdgarFilingsArchive200ResponseMeta
 */
export interface GetEdgarFilingsArchive200ResponseMeta {
  /**
   * Ticker of the company
   * @type {string}
   * @memberof GetEdgarFilingsArchive200ResponseMeta
   */
  symbol: string;
  /**
   * Exchange name where the company is listed
   * @type {string}
   * @memberof GetEdgarFilingsArchive200ResponseMeta
   */
  exchange: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetEdgarFilingsArchive200ResponseMeta
   */
  micCode: string;
  /**
   * Issue type of the stock
   * @type {string}
   * @memberof GetEdgarFilingsArchive200ResponseMeta
   */
  type: string;
}

/**
 * Check if a given object implements the GetEdgarFilingsArchive200ResponseMeta interface.
 */
export function instanceOfGetEdgarFilingsArchive200ResponseMeta(
  value: object,
): value is GetEdgarFilingsArchive200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("type" in value) || value["type"] === undefined) return false;
  return true;
}

export function GetEdgarFilingsArchive200ResponseMetaFromJSON(
  json: any,
): GetEdgarFilingsArchive200ResponseMeta {
  return GetEdgarFilingsArchive200ResponseMetaFromJSONTyped(json, false);
}

export function GetEdgarFilingsArchive200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEdgarFilingsArchive200ResponseMeta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
    type: json["type"],
  };
}

export function GetEdgarFilingsArchive200ResponseMetaToJSON(
  json: any,
): GetEdgarFilingsArchive200ResponseMeta {
  return GetEdgarFilingsArchive200ResponseMetaToJSONTyped(json, false);
}

export function GetEdgarFilingsArchive200ResponseMetaToJSONTyped(
  value?: GetEdgarFilingsArchive200ResponseMeta | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    type: value["type"],
  };
}
