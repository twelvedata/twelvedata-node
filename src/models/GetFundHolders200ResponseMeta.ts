/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Meta information about the financial instrument
 * @export
 * @interface GetFundHolders200ResponseMeta
 */
export interface GetFundHolders200ResponseMeta {
  /**
   * Ticker symbol of instrument
   * @type {string}
   * @memberof GetFundHolders200ResponseMeta
   */
  symbol: string;
  /**
   * Name of symbol
   * @type {string}
   * @memberof GetFundHolders200ResponseMeta
   */
  name: string;
  /**
   * Currency of the instrument according to the ISO 4217 standard
   * @type {string}
   * @memberof GetFundHolders200ResponseMeta
   */
  currency: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetFundHolders200ResponseMeta
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetFundHolders200ResponseMeta
   */
  micCode: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetFundHolders200ResponseMeta
   */
  exchangeTimezone: string;
}

/**
 * Check if a given object implements the GetFundHolders200ResponseMeta interface.
 */
export function instanceOfGetFundHolders200ResponseMeta(
  value: object,
): value is GetFundHolders200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  return true;
}

export function GetFundHolders200ResponseMetaFromJSON(
  json: any,
): GetFundHolders200ResponseMeta {
  return GetFundHolders200ResponseMetaFromJSONTyped(json, false);
}

export function GetFundHolders200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetFundHolders200ResponseMeta {
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

export function GetFundHolders200ResponseMetaToJSON(
  json: any,
): GetFundHolders200ResponseMeta {
  return GetFundHolders200ResponseMetaToJSONTyped(json, false);
}

export function GetFundHolders200ResponseMetaToJSONTyped(
  value?: GetFundHolders200ResponseMeta | null,
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
