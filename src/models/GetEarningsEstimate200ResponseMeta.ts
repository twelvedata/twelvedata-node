/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Meta information about the symbol
 * @export
 * @interface GetEarningsEstimate200ResponseMeta
 */
export interface GetEarningsEstimate200ResponseMeta {
  /**
   * Symbol ticker of the instrument
   * @type {string}
   * @memberof GetEarningsEstimate200ResponseMeta
   */
  symbol: string;
  /**
   * Name of the instrument
   * @type {string}
   * @memberof GetEarningsEstimate200ResponseMeta
   */
  name: string;
  /**
   * Currency in which the instrument is traded
   * @type {string}
   * @memberof GetEarningsEstimate200ResponseMeta
   */
  currency: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetEarningsEstimate200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * Exchange where the instrument is traded
   * @type {string}
   * @memberof GetEarningsEstimate200ResponseMeta
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetEarningsEstimate200ResponseMeta
   */
  micCode: string;
  /**
   * Type of the instrument
   * @type {string}
   * @memberof GetEarningsEstimate200ResponseMeta
   */
  type: string;
}

/**
 * Check if a given object implements the GetEarningsEstimate200ResponseMeta interface.
 */
export function instanceOfGetEarningsEstimate200ResponseMeta(
  value: object,
): value is GetEarningsEstimate200ResponseMeta {
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

export function GetEarningsEstimate200ResponseMetaFromJSON(
  json: any,
): GetEarningsEstimate200ResponseMeta {
  return GetEarningsEstimate200ResponseMetaFromJSONTyped(json, false);
}

export function GetEarningsEstimate200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEarningsEstimate200ResponseMeta {
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

export function GetEarningsEstimate200ResponseMetaToJSON(
  json: any,
): GetEarningsEstimate200ResponseMeta {
  return GetEarningsEstimate200ResponseMetaToJSONTyped(json, false);
}

export function GetEarningsEstimate200ResponseMetaToJSONTyped(
  value?: GetEarningsEstimate200ResponseMeta | null,
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
