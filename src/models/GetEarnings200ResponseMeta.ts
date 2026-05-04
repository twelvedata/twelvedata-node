/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Metadata about the instrument
 * @export
 * @interface GetEarnings200ResponseMeta
 */
export interface GetEarnings200ResponseMeta {
  /**
   * Symbol of the instrument
   * @type {string}
   * @memberof GetEarnings200ResponseMeta
   */
  symbol: string;
  /**
   * Name of the company
   * @type {string}
   * @memberof GetEarnings200ResponseMeta
   */
  name: string;
  /**
   * Currency in which the instrument is traded
   * @type {string}
   * @memberof GetEarnings200ResponseMeta
   */
  currency: string;
  /**
   * Exchange where the instrument is traded
   * @type {string}
   * @memberof GetEarnings200ResponseMeta
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetEarnings200ResponseMeta
   */
  micCode: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetEarnings200ResponseMeta
   */
  exchangeTimezone: string;
}

/**
 * Check if a given object implements the GetEarnings200ResponseMeta interface.
 */
export function instanceOfGetEarnings200ResponseMeta(
  value: object,
): value is GetEarnings200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  return true;
}

export function GetEarnings200ResponseMetaFromJSON(
  json: any,
): GetEarnings200ResponseMeta {
  return GetEarnings200ResponseMetaFromJSONTyped(json, false);
}

export function GetEarnings200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEarnings200ResponseMeta {
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

export function GetEarnings200ResponseMetaToJSON(
  json: any,
): GetEarnings200ResponseMeta {
  return GetEarnings200ResponseMetaToJSONTyped(json, false);
}

export function GetEarnings200ResponseMetaToJSONTyped(
  value?: GetEarnings200ResponseMeta | null,
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
