/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { BondsResponseItemAccess } from "./BondsResponseItemAccess";
import {
  BondsResponseItemAccessFromJSON,
  BondsResponseItemAccessFromJSONTyped,
  BondsResponseItemAccessToJSON,
  BondsResponseItemAccessToJSONTyped,
} from "./BondsResponseItemAccess";

/**
 * BondResponseItem represents details of a bond
 * @export
 * @interface BondResponseItem
 */
export interface BondResponseItem {
  /**
   * Bond symbol
   * @type {string}
   * @memberof BondResponseItem
   */
  symbol: string;
  /**
   * Full name of the bond
   * @type {string}
   * @memberof BondResponseItem
   */
  name: string;
  /**
   * Country where the bond is located
   * @type {string}
   * @memberof BondResponseItem
   */
  country: string;
  /**
   * Currency of the bond according to the ISO 4217 standard
   * @type {string}
   * @memberof BondResponseItem
   */
  currency: string;
  /**
   * Exchange where the bond is traded
   * @type {string}
   * @memberof BondResponseItem
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof BondResponseItem
   */
  micCode: string;
  /**
   * Type of the bond
   * @type {string}
   * @memberof BondResponseItem
   */
  type: string;
  /**
   *
   * @type {BondsResponseItemAccess}
   * @memberof BondResponseItem
   */
  access?: BondsResponseItemAccess;
}

/**
 * Check if a given object implements the BondResponseItem interface.
 */
export function instanceOfBondResponseItem(
  value: object,
): value is BondResponseItem {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("country" in value) || value["country"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("type" in value) || value["type"] === undefined) return false;
  return true;
}

export function BondResponseItemFromJSON(json: any): BondResponseItem {
  return BondResponseItemFromJSONTyped(json, false);
}

export function BondResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): BondResponseItem {
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
    access:
      json["access"] == null
        ? undefined
        : BondsResponseItemAccessFromJSON(json["access"]),
  };
}

export function BondResponseItemToJSON(json: any): BondResponseItem {
  return BondResponseItemToJSONTyped(json, false);
}

export function BondResponseItemToJSONTyped(
  value?: BondResponseItem | null,
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
    access: BondsResponseItemAccessToJSON(value["access"]),
  };
}
