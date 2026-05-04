/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface CryptocurrencyExchangesResponseItem
 */
export interface CryptocurrencyExchangesResponseItem {
  /**
   * Name of cryptocurrency exchange
   * @type {string}
   * @memberof CryptocurrencyExchangesResponseItem
   */
  name: string;
}

/**
 * Check if a given object implements the CryptocurrencyExchangesResponseItem interface.
 */
export function instanceOfCryptocurrencyExchangesResponseItem(
  value: object,
): value is CryptocurrencyExchangesResponseItem {
  if (!("name" in value) || value["name"] === undefined) return false;
  return true;
}

export function CryptocurrencyExchangesResponseItemFromJSON(
  json: any,
): CryptocurrencyExchangesResponseItem {
  return CryptocurrencyExchangesResponseItemFromJSONTyped(json, false);
}

export function CryptocurrencyExchangesResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CryptocurrencyExchangesResponseItem {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
  };
}

export function CryptocurrencyExchangesResponseItemToJSON(
  json: any,
): CryptocurrencyExchangesResponseItem {
  return CryptocurrencyExchangesResponseItemToJSONTyped(json, false);
}

export function CryptocurrencyExchangesResponseItemToJSONTyped(
  value?: CryptocurrencyExchangesResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
  };
}
