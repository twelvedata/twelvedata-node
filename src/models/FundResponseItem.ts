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
 * FundResponseItem represents details of a fund
 * @export
 * @interface FundResponseItem
 */
export interface FundResponseItem {
  /**
   * Instrument symbol (ticker)
   * @type {string}
   * @memberof FundResponseItem
   */
  symbol: string;
  /**
   * Full name of the fund
   * @type {string}
   * @memberof FundResponseItem
   */
  name: string;
  /**
   * Country where the fund is located
   * @type {string}
   * @memberof FundResponseItem
   */
  country: string;
  /**
   * Currency of the fund according to the ISO 4217 standard
   * @type {string}
   * @memberof FundResponseItem
   */
  currency: string;
  /**
   * Exchange where the fund is traded
   * @type {string}
   * @memberof FundResponseItem
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof FundResponseItem
   */
  micCode: string;
  /**
   * Type of the fund
   * @type {string}
   * @memberof FundResponseItem
   */
  type: string;
  /**
   * Financial instrument global identifier (FIGI)
   * @type {string}
   * @memberof FundResponseItem
   */
  figiCode: string;
  /**
   * Classification of Financial Instruments (CFI)
   * @type {string}
   * @memberof FundResponseItem
   */
  cfiCode: string;
  /**
   * International securities identification number (ISIN)
   * @type {string}
   * @memberof FundResponseItem
   */
  isin: string;
  /**
   * A unique nine-character alphanumeric code used to identify financial securities, ensuring accurate data retrieval for the specified asset
   * @type {string}
   * @memberof FundResponseItem
   */
  cusip: string;
  /**
   *
   * @type {EtfResponseItemAccess}
   * @memberof FundResponseItem
   */
  access?: EtfResponseItemAccess;
}

/**
 * Check if a given object implements the FundResponseItem interface.
 */
export function instanceOfFundResponseItem(
  value: object,
): value is FundResponseItem {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("country" in value) || value["country"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("type" in value) || value["type"] === undefined) return false;
  if (!("figiCode" in value) || value["figiCode"] === undefined) return false;
  if (!("cfiCode" in value) || value["cfiCode"] === undefined) return false;
  if (!("isin" in value) || value["isin"] === undefined) return false;
  if (!("cusip" in value) || value["cusip"] === undefined) return false;
  return true;
}

export function FundResponseItemFromJSON(json: any): FundResponseItem {
  return FundResponseItemFromJSONTyped(json, false);
}

export function FundResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FundResponseItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    country: json["country"],
    currency: json["currency"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
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

export function FundResponseItemToJSON(json: any): FundResponseItem {
  return FundResponseItemToJSONTyped(json, false);
}

export function FundResponseItemToJSONTyped(
  value?: FundResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    country: value["country"],
    currency: value["currency"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    type: value["type"],
    figi_code: value["figiCode"],
    cfi_code: value["cfiCode"],
    isin: value["isin"],
    cusip: value["cusip"],
    access: EtfResponseItemAccessToJSON(value["access"]),
  };
}
