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
 * @interface GetInsiderTransactions200ResponseMeta
 */
export interface GetInsiderTransactions200ResponseMeta {
  /**
   * Ticker symbol of instrument
   * @type {string}
   * @memberof GetInsiderTransactions200ResponseMeta
   */
  symbol: string;
  /**
   * Name of the company
   * @type {string}
   * @memberof GetInsiderTransactions200ResponseMeta
   */
  name: string;
  /**
   * Currency of the instrument according to the ISO 4217 standard
   * @type {string}
   * @memberof GetInsiderTransactions200ResponseMeta
   */
  currency: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetInsiderTransactions200ResponseMeta
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetInsiderTransactions200ResponseMeta
   */
  micCode: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetInsiderTransactions200ResponseMeta
   */
  exchangeTimezone: string;
}

/**
 * Check if a given object implements the GetInsiderTransactions200ResponseMeta interface.
 */
export function instanceOfGetInsiderTransactions200ResponseMeta(
  value: object,
): value is GetInsiderTransactions200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  return true;
}

export function GetInsiderTransactions200ResponseMetaFromJSON(
  json: any,
): GetInsiderTransactions200ResponseMeta {
  return GetInsiderTransactions200ResponseMetaFromJSONTyped(json, false);
}

export function GetInsiderTransactions200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetInsiderTransactions200ResponseMeta {
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

export function GetInsiderTransactions200ResponseMetaToJSON(
  json: any,
): GetInsiderTransactions200ResponseMeta {
  return GetInsiderTransactions200ResponseMetaToJSONTyped(json, false);
}

export function GetInsiderTransactions200ResponseMetaToJSONTyped(
  value?: GetInsiderTransactions200ResponseMeta | null,
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
