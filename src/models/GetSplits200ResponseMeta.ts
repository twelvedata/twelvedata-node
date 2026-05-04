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
 * @interface GetSplits200ResponseMeta
 */
export interface GetSplits200ResponseMeta {
  /**
   * Ticker symbol of instrument
   * @type {string}
   * @memberof GetSplits200ResponseMeta
   */
  symbol: string;
  /**
   * Name of the instrument
   * @type {string}
   * @memberof GetSplits200ResponseMeta
   */
  name: string;
  /**
   * Currency in which the instrument is denominated
   * @type {string}
   * @memberof GetSplits200ResponseMeta
   */
  currency: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetSplits200ResponseMeta
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetSplits200ResponseMeta
   */
  micCode: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetSplits200ResponseMeta
   */
  exchangeTimezone: string;
}

/**
 * Check if a given object implements the GetSplits200ResponseMeta interface.
 */
export function instanceOfGetSplits200ResponseMeta(
  value: object,
): value is GetSplits200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  return true;
}

export function GetSplits200ResponseMetaFromJSON(
  json: any,
): GetSplits200ResponseMeta {
  return GetSplits200ResponseMetaFromJSONTyped(json, false);
}

export function GetSplits200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSplits200ResponseMeta {
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

export function GetSplits200ResponseMetaToJSON(
  json: any,
): GetSplits200ResponseMeta {
  return GetSplits200ResponseMetaToJSONTyped(json, false);
}

export function GetSplits200ResponseMetaToJSONTyped(
  value?: GetSplits200ResponseMeta | null,
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
