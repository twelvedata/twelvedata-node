/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { EtfResponseItemAccess } from "./EtfResponseItemAccess";
import {
  EtfResponseItemAccessFromJSON,
  EtfResponseItemAccessFromJSONTyped,
  EtfResponseItemAccessToJSON,
  EtfResponseItemAccessToJSONTyped,
} from "./EtfResponseItemAccess";

/**
 * StocksResponseItem represents details of a stock instrument
 * @export
 * @interface StocksResponseItem
 */
export interface StocksResponseItem {
  /**
   * Instrument symbol (ticker)
   * @type {string}
   * @memberof StocksResponseItem
   */
  symbol: string;
  /**
   * Full name of instrument
   * @type {string}
   * @memberof StocksResponseItem
   */
  name: string;
  /**
   * Currency of the instrument according to the ISO 4217 standard
   * @type {string}
   * @memberof StocksResponseItem
   */
  currency: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof StocksResponseItem
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof StocksResponseItem
   */
  micCode: string;
  /**
   * Country where exchange is located
   * @type {string}
   * @memberof StocksResponseItem
   */
  country: string;
  /**
   * Common issue type
   * @type {string}
   * @memberof StocksResponseItem
   */
  type: string;
  /**
   * Financial instrument global identifier (FIGI)
   * @type {string}
   * @memberof StocksResponseItem
   */
  figiCode: string;
  /**
   * Classification of Financial Instruments (CFI)
   * @type {string}
   * @memberof StocksResponseItem
   */
  cfiCode: string;
  /**
   * International securities identification number (ISIN), available by individual request to support
   * @type {string}
   * @memberof StocksResponseItem
   */
  isin: string;
  /**
   * A unique nine-character alphanumeric code used to identify financial securities, ensuring accurate data retrieval for the specified asset
   * @type {string}
   * @memberof StocksResponseItem
   */
  cusip: string;
  /**
   *
   * @type {EtfResponseItemAccess}
   * @memberof StocksResponseItem
   */
  access?: EtfResponseItemAccess;
}

/**
 * Check if a given object implements the StocksResponseItem interface.
 */
export function instanceOfStocksResponseItem(
  value: object,
): value is StocksResponseItem {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("country" in value) || value["country"] === undefined) return false;
  if (!("type" in value) || value["type"] === undefined) return false;
  if (!("figiCode" in value) || value["figiCode"] === undefined) return false;
  if (!("cfiCode" in value) || value["cfiCode"] === undefined) return false;
  if (!("isin" in value) || value["isin"] === undefined) return false;
  if (!("cusip" in value) || value["cusip"] === undefined) return false;
  return true;
}

export function StocksResponseItemFromJSON(json: any): StocksResponseItem {
  return StocksResponseItemFromJSONTyped(json, false);
}

export function StocksResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): StocksResponseItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    currency: json["currency"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
    country: json["country"],
    type: json["type"],
    figiCode: json["figi_code"],
    cfiCode: json["cfi_code"],
    isin: json["isin"],
    cusip: json["cusip"],
    access:
      json["access"] == null
        ? undefined
        : EtfResponseItemAccessFromJSON(json["access"]),
  };
}

export function StocksResponseItemToJSON(json: any): StocksResponseItem {
  return StocksResponseItemToJSONTyped(json, false);
}

export function StocksResponseItemToJSONTyped(
  value?: StocksResponseItem | null,
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
    country: value["country"],
    type: value["type"],
    figi_code: value["figiCode"],
    cfi_code: value["cfiCode"],
    isin: value["isin"],
    cusip: value["cusip"],
    access: EtfResponseItemAccessToJSON(value["access"]),
  };
}
