/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Meta information about the response
 * @export
 * @interface GetCashFlow200ResponseMeta
 */
export interface GetCashFlow200ResponseMeta {
  /**
   * Symbol ticker of instrument
   * @type {string}
   * @memberof GetCashFlow200ResponseMeta
   */
  symbol: string;
  /**
   * Name of the company
   * @type {string}
   * @memberof GetCashFlow200ResponseMeta
   */
  name: string;
  /**
   * Currency of the cash flow data according to the ISO 4217 standard
   * @type {string}
   * @memberof GetCashFlow200ResponseMeta
   */
  currency: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetCashFlow200ResponseMeta
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetCashFlow200ResponseMeta
   */
  micCode: string;
  /**
   * Exchange timezone
   * @type {string}
   * @memberof GetCashFlow200ResponseMeta
   */
  exchangeTimezone: string;
  /**
   * Period of the cash flow data (Annual or Quarterly)
   * @type {string}
   * @memberof GetCashFlow200ResponseMeta
   */
  period: string;
}

/**
 * Check if a given object implements the GetCashFlow200ResponseMeta interface.
 */
export function instanceOfGetCashFlow200ResponseMeta(
  value: object,
): value is GetCashFlow200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  if (!("period" in value) || value["period"] === undefined) return false;
  return true;
}

export function GetCashFlow200ResponseMetaFromJSON(
  json: any,
): GetCashFlow200ResponseMeta {
  return GetCashFlow200ResponseMetaFromJSONTyped(json, false);
}

export function GetCashFlow200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetCashFlow200ResponseMeta {
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
    period: json["period"],
  };
}

export function GetCashFlow200ResponseMetaToJSON(
  json: any,
): GetCashFlow200ResponseMeta {
  return GetCashFlow200ResponseMetaToJSONTyped(json, false);
}

export function GetCashFlow200ResponseMetaToJSONTyped(
  value?: GetCashFlow200ResponseMeta | null,
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
    period: value["period"],
  };
}
