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
 * @interface GetKeyExecutives200ResponseMeta
 */
export interface GetKeyExecutives200ResponseMeta {
  /**
   * Ticker symbol of instrument
   * @type {string}
   * @memberof GetKeyExecutives200ResponseMeta
   */
  symbol: string;
  /**
   * Name of the company
   * @type {string}
   * @memberof GetKeyExecutives200ResponseMeta
   */
  name: string;
  /**
   * Currency code in which the instrument is denominated
   * @type {string}
   * @memberof GetKeyExecutives200ResponseMeta
   */
  currency: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetKeyExecutives200ResponseMeta
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetKeyExecutives200ResponseMeta
   */
  micCode: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetKeyExecutives200ResponseMeta
   */
  exchangeTimezone: string;
}

/**
 * Check if a given object implements the GetKeyExecutives200ResponseMeta interface.
 */
export function instanceOfGetKeyExecutives200ResponseMeta(
  value: object,
): value is GetKeyExecutives200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  return true;
}

export function GetKeyExecutives200ResponseMetaFromJSON(
  json: any,
): GetKeyExecutives200ResponseMeta {
  return GetKeyExecutives200ResponseMetaFromJSONTyped(json, false);
}

export function GetKeyExecutives200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetKeyExecutives200ResponseMeta {
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

export function GetKeyExecutives200ResponseMetaToJSON(
  json: any,
): GetKeyExecutives200ResponseMeta {
  return GetKeyExecutives200ResponseMetaToJSONTyped(json, false);
}

export function GetKeyExecutives200ResponseMetaToJSONTyped(
  value?: GetKeyExecutives200ResponseMeta | null,
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
