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
 * EtfResponseItem represents details of an ETF
 * @export
 * @interface EtfResponseItem
 */
export interface EtfResponseItem {
  /**
   * Instrument symbol (ticker)
   * @type {string}
   * @memberof EtfResponseItem
   */
  symbol?: string;
  /**
   * Full name of the ETF
   * @type {string}
   * @memberof EtfResponseItem
   */
  name?: string;
  /**
   * Currency of the ETF according to the ISO 4217 standard
   * @type {string}
   * @memberof EtfResponseItem
   */
  currency?: string;
  /**
   * Exchange where the ETF is traded
   * @type {string}
   * @memberof EtfResponseItem
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof EtfResponseItem
   */
  micCode?: string;
  /**
   * Country where the ETF is located
   * @type {string}
   * @memberof EtfResponseItem
   */
  country?: string;
  /**
   * Financial instrument global identifier (FIGI)
   * @type {string}
   * @memberof EtfResponseItem
   */
  figiCode?: string;
  /**
   * Classification of Financial Instruments (CFI)
   * @type {string}
   * @memberof EtfResponseItem
   */
  cfiCode?: string;
  /**
   * International securities identification number (ISIN)
   * @type {string}
   * @memberof EtfResponseItem
   */
  isin?: string;
  /**
   * A unique nine-character alphanumeric code used to identify financial securities, ensuring accurate data retrieval for the specified asset
   * @type {string}
   * @memberof EtfResponseItem
   */
  cusip?: string;
  /**
   *
   * @type {EtfResponseItemAccess}
   * @memberof EtfResponseItem
   */
  access?: EtfResponseItemAccess;
}

/**
 * Check if a given object implements the EtfResponseItem interface.
 */
export function instanceOfEtfResponseItem(
  value: object,
): value is EtfResponseItem {
  return true;
}

export function EtfResponseItemFromJSON(json: any): EtfResponseItem {
  return EtfResponseItemFromJSONTyped(json, false);
}

export function EtfResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EtfResponseItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    name: json["name"] == null ? undefined : json["name"],
    currency: json["currency"] == null ? undefined : json["currency"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    country: json["country"] == null ? undefined : json["country"],
    figiCode: json["figi_code"] == null ? undefined : json["figi_code"],
    cfiCode: json["cfi_code"] == null ? undefined : json["cfi_code"],
    isin: json["isin"] == null ? undefined : json["isin"],
    cusip: json["cusip"] == null ? undefined : json["cusip"],
    access:
      json["access"] == null
        ? undefined
        : EtfResponseItemAccessFromJSON(json["access"]),
  };
}

export function EtfResponseItemToJSON(json: any): EtfResponseItem {
  return EtfResponseItemToJSONTyped(json, false);
}

export function EtfResponseItemToJSONTyped(
  value?: EtfResponseItem | null,
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
    figi_code: value["figiCode"],
    cfi_code: value["cfiCode"],
    isin: value["isin"],
    cusip: value["cusip"],
    access: EtfResponseItemAccessToJSON(value["access"]),
  };
}
