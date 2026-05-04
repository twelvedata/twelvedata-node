/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * CryptocurrencyResponseItem represents details of a cryptocurrency
 * @export
 * @interface CryptocurrencyResponseItem
 */
export interface CryptocurrencyResponseItem {
  /**
   * Cryptocurrency pair codes with slash(/) delimiter
   * @type {string}
   * @memberof CryptocurrencyResponseItem
   */
  symbol: string;
  /**
   * List of exchanges where the cryptocurrency is available
   * @type {Array<string>}
   * @memberof CryptocurrencyResponseItem
   */
  availableExchanges: Array<string>;
  /**
   * Base currency of the cryptocurrency pair
   * @type {string}
   * @memberof CryptocurrencyResponseItem
   */
  currencyBase: string;
  /**
   * Quote currency of the cryptocurrency pair
   * @type {string}
   * @memberof CryptocurrencyResponseItem
   */
  currencyQuote: string;
}

/**
 * Check if a given object implements the CryptocurrencyResponseItem interface.
 */
export function instanceOfCryptocurrencyResponseItem(
  value: object,
): value is CryptocurrencyResponseItem {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (
    !("availableExchanges" in value) ||
    value["availableExchanges"] === undefined
  )
    return false;
  if (!("currencyBase" in value) || value["currencyBase"] === undefined)
    return false;
  if (!("currencyQuote" in value) || value["currencyQuote"] === undefined)
    return false;
  return true;
}

export function CryptocurrencyResponseItemFromJSON(
  json: any,
): CryptocurrencyResponseItem {
  return CryptocurrencyResponseItemFromJSONTyped(json, false);
}

export function CryptocurrencyResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CryptocurrencyResponseItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    availableExchanges: json["available_exchanges"],
    currencyBase: json["currency_base"],
    currencyQuote: json["currency_quote"],
  };
}

export function CryptocurrencyResponseItemToJSON(
  json: any,
): CryptocurrencyResponseItem {
  return CryptocurrencyResponseItemToJSONTyped(json, false);
}

export function CryptocurrencyResponseItemToJSONTyped(
  value?: CryptocurrencyResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    available_exchanges: value["availableExchanges"],
    currency_base: value["currencyBase"],
    currency_quote: value["currencyQuote"],
  };
}
