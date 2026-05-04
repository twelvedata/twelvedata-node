/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Meta information about the company
 * @export
 * @interface GetMarketCap200ResponseMeta
 */
export interface GetMarketCap200ResponseMeta {
  /**
   * Ticker of the company
   * @type {string}
   * @memberof GetMarketCap200ResponseMeta
   */
  symbol: string;
  /**
   * Name of the company
   * @type {string}
   * @memberof GetMarketCap200ResponseMeta
   */
  name: string;
  /**
   * Currency in which instrument is traded by ISO 4217 standard
   * @type {string}
   * @memberof GetMarketCap200ResponseMeta
   */
  currency: string;
  /**
   * Exchange name where the company is listed
   * @type {string}
   * @memberof GetMarketCap200ResponseMeta
   */
  exchange: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetMarketCap200ResponseMeta
   */
  micCode: string;
  /**
   * Exchange timezone
   * @type {string}
   * @memberof GetMarketCap200ResponseMeta
   */
  exchangeTimezone: string;
}

/**
 * Check if a given object implements the GetMarketCap200ResponseMeta interface.
 */
export function instanceOfGetMarketCap200ResponseMeta(
  value: object,
): value is GetMarketCap200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  return true;
}

export function GetMarketCap200ResponseMetaFromJSON(
  json: any,
): GetMarketCap200ResponseMeta {
  return GetMarketCap200ResponseMetaFromJSONTyped(json, false);
}

export function GetMarketCap200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMarketCap200ResponseMeta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    currency: json["currency"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
    exchangeTimezone: json["exchange_timezone"],
  };
}

export function GetMarketCap200ResponseMetaToJSON(
  json: any,
): GetMarketCap200ResponseMeta {
  return GetMarketCap200ResponseMetaToJSONTyped(json, false);
}

export function GetMarketCap200ResponseMetaToJSONTyped(
  value?: GetMarketCap200ResponseMeta | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    currency: value["currency"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    exchange_timezone: value["exchangeTimezone"],
  };
}
