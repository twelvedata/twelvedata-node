/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { SymbolSearchResponseItemAccess } from "./SymbolSearchResponseItemAccess";
import {
  SymbolSearchResponseItemAccessFromJSON,
  SymbolSearchResponseItemAccessFromJSONTyped,
  SymbolSearchResponseItemAccessToJSON,
  SymbolSearchResponseItemAccessToJSONTyped,
} from "./SymbolSearchResponseItemAccess";

/**
 * SymbolSearchResponseItem represents details of a symbol search result
 * @export
 * @interface SymbolSearchResponseItem
 */
export interface SymbolSearchResponseItem {
  /**
   * Ticker symbol of instrument
   * @type {string}
   * @memberof SymbolSearchResponseItem
   */
  symbol: string;
  /**
   * Name of exchange
   * @type {string}
   * @memberof SymbolSearchResponseItem
   */
  instrumentName: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof SymbolSearchResponseItem
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof SymbolSearchResponseItem
   */
  micCode: string;
  /**
   * Time zone where exchange is located
   * @type {string}
   * @memberof SymbolSearchResponseItem
   */
  exchangeTimezone: string;
  /**
   * Type of instrument
   * @type {string}
   * @memberof SymbolSearchResponseItem
   */
  instrumentType: string;
  /**
   * Country to which stock exchange belongs to
   * @type {string}
   * @memberof SymbolSearchResponseItem
   */
  country: string;
  /**
   * Currency in which the instrument is traded
   * @type {string}
   * @memberof SymbolSearchResponseItem
   */
  currency: string;
  /**
   *
   * @type {SymbolSearchResponseItemAccess}
   * @memberof SymbolSearchResponseItem
   */
  access?: SymbolSearchResponseItemAccess;
}

/**
 * Check if a given object implements the SymbolSearchResponseItem interface.
 */
export function instanceOfSymbolSearchResponseItem(
  value: object,
): value is SymbolSearchResponseItem {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("instrumentName" in value) || value["instrumentName"] === undefined)
    return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  if (!("instrumentType" in value) || value["instrumentType"] === undefined)
    return false;
  if (!("country" in value) || value["country"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  return true;
}

export function SymbolSearchResponseItemFromJSON(
  json: any,
): SymbolSearchResponseItem {
  return SymbolSearchResponseItemFromJSONTyped(json, false);
}

export function SymbolSearchResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SymbolSearchResponseItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    instrumentName: json["instrument_name"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
    exchangeTimezone: json["exchange_timezone"],
    instrumentType: json["instrument_type"],
    country: json["country"],
    currency: json["currency"],
    access:
      json["access"] == null
        ? undefined
        : SymbolSearchResponseItemAccessFromJSON(json["access"]),
  };
}

export function SymbolSearchResponseItemToJSON(
  json: any,
): SymbolSearchResponseItem {
  return SymbolSearchResponseItemToJSONTyped(json, false);
}

export function SymbolSearchResponseItemToJSONTyped(
  value?: SymbolSearchResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    instrument_name: value["instrumentName"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    exchange_timezone: value["exchangeTimezone"],
    instrument_type: value["instrumentType"],
    country: value["country"],
    currency: value["currency"],
    access: SymbolSearchResponseItemAccessToJSON(value["access"]),
  };
}
