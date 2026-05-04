/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Meta information about the security
 * @export
 * @interface GetPriceTarget200ResponseMeta
 */
export interface GetPriceTarget200ResponseMeta {
  /**
   * Symbol ticker of the instrument
   * @type {string}
   * @memberof GetPriceTarget200ResponseMeta
   */
  symbol: string;
  /**
   * Name of the instrument
   * @type {string}
   * @memberof GetPriceTarget200ResponseMeta
   */
  name: string;
  /**
   * Currency in which the instrument is traded
   * @type {string}
   * @memberof GetPriceTarget200ResponseMeta
   */
  currency: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetPriceTarget200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * Exchange where the instrument is traded
   * @type {string}
   * @memberof GetPriceTarget200ResponseMeta
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetPriceTarget200ResponseMeta
   */
  micCode: string;
  /**
   * Type of the instrument
   * @type {string}
   * @memberof GetPriceTarget200ResponseMeta
   */
  type: string;
}

/**
 * Check if a given object implements the GetPriceTarget200ResponseMeta interface.
 */
export function instanceOfGetPriceTarget200ResponseMeta(
  value: object,
): value is GetPriceTarget200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("type" in value) || value["type"] === undefined) return false;
  return true;
}

export function GetPriceTarget200ResponseMetaFromJSON(
  json: any,
): GetPriceTarget200ResponseMeta {
  return GetPriceTarget200ResponseMetaFromJSONTyped(json, false);
}

export function GetPriceTarget200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPriceTarget200ResponseMeta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    currency: json["currency"],
    exchangeTimezone: json["exchange_timezone"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
    type: json["type"],
  };
}

export function GetPriceTarget200ResponseMetaToJSON(
  json: any,
): GetPriceTarget200ResponseMeta {
  return GetPriceTarget200ResponseMetaToJSONTyped(json, false);
}

export function GetPriceTarget200ResponseMetaToJSONTyped(
  value?: GetPriceTarget200ResponseMeta | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    currency: value["currency"],
    exchange_timezone: value["exchangeTimezone"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    type: value["type"],
  };
}
