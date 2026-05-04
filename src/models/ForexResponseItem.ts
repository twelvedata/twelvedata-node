/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * ForexResponseItem represents details of a forex pair
 * @export
 * @interface ForexResponseItem
 */
export interface ForexResponseItem {
  /**
   * Currency pair according to ISO 4217 standard codes with slash(/) delimiter
   * @type {string}
   * @memberof ForexResponseItem
   */
  symbol: string;
  /**
   * Group to which currency pair belongs to, could be: Major, Minor, Exotic and Exotic-Cross
   * @type {string}
   * @memberof ForexResponseItem
   */
  currencyGroup: string;
  /**
   * Base currency name according to ISO 4217 standard
   * @type {string}
   * @memberof ForexResponseItem
   */
  currencyBase: string;
  /**
   * Quote currency name according to ISO 4217 standard
   * @type {string}
   * @memberof ForexResponseItem
   */
  currencyQuote: string;
}

/**
 * Check if a given object implements the ForexResponseItem interface.
 */
export function instanceOfForexResponseItem(
  value: object,
): value is ForexResponseItem {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("currencyGroup" in value) || value["currencyGroup"] === undefined)
    return false;
  if (!("currencyBase" in value) || value["currencyBase"] === undefined)
    return false;
  if (!("currencyQuote" in value) || value["currencyQuote"] === undefined)
    return false;
  return true;
}

export function ForexResponseItemFromJSON(json: any): ForexResponseItem {
  return ForexResponseItemFromJSONTyped(json, false);
}

export function ForexResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ForexResponseItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    currencyGroup: json["currency_group"],
    currencyBase: json["currency_base"],
    currencyQuote: json["currency_quote"],
  };
}

export function ForexResponseItemToJSON(json: any): ForexResponseItem {
  return ForexResponseItemToJSONTyped(json, false);
}

export function ForexResponseItemToJSONTyped(
  value?: ForexResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    currency_group: value["currencyGroup"],
    currency_base: value["currencyBase"],
    currency_quote: value["currencyQuote"],
  };
}
