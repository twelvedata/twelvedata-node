/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Json object with request general information
 * @export
 * @interface GetStatistics200ResponseMeta
 */
export interface GetStatistics200ResponseMeta {
  /**
   * Symbol ticker of instrument
   * @type {string}
   * @memberof GetStatistics200ResponseMeta
   */
  symbol: string;
  /**
   * Name of the company
   * @type {string}
   * @memberof GetStatistics200ResponseMeta
   */
  name: string;
  /**
   * Currency of the instrument
   * @type {string}
   * @memberof GetStatistics200ResponseMeta
   */
  currency: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetStatistics200ResponseMeta
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetStatistics200ResponseMeta
   */
  micCode: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetStatistics200ResponseMeta
   */
  exchangeTimezone: string;
}

/**
 * Check if a given object implements the GetStatistics200ResponseMeta interface.
 */
export function instanceOfGetStatistics200ResponseMeta(
  value: object,
): value is GetStatistics200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  return true;
}

export function GetStatistics200ResponseMetaFromJSON(
  json: any,
): GetStatistics200ResponseMeta {
  return GetStatistics200ResponseMetaFromJSONTyped(json, false);
}

export function GetStatistics200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200ResponseMeta {
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

export function GetStatistics200ResponseMetaToJSON(
  json: any,
): GetStatistics200ResponseMeta {
  return GetStatistics200ResponseMetaToJSONTyped(json, false);
}

export function GetStatistics200ResponseMetaToJSONTyped(
  value?: GetStatistics200ResponseMeta | null,
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
