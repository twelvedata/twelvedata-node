/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { CryptocurrencyResponseItem } from "./CryptocurrencyResponseItem";
import {
  CryptocurrencyResponseItemFromJSON,
  CryptocurrencyResponseItemFromJSONTyped,
  CryptocurrencyResponseItemToJSON,
  CryptocurrencyResponseItemToJSONTyped,
} from "./CryptocurrencyResponseItem";

/**
 *
 * @export
 * @interface GetCryptocurrencies200Response
 */
export interface GetCryptocurrencies200Response {
  /**
   * List of cryptocurrencies
   * @type {Array<CryptocurrencyResponseItem>}
   * @memberof GetCryptocurrencies200Response
   */
  data?: Array<CryptocurrencyResponseItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetCryptocurrencies200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetCryptocurrencies200Response interface.
 */
export function instanceOfGetCryptocurrencies200Response(
  value: object,
): value is GetCryptocurrencies200Response {
  return true;
}

export function GetCryptocurrencies200ResponseFromJSON(
  json: any,
): GetCryptocurrencies200Response {
  return GetCryptocurrencies200ResponseFromJSONTyped(json, false);
}

export function GetCryptocurrencies200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetCryptocurrencies200Response {
  if (json == null) {
    return json;
  }
  return {
    data:
      json["data"] == null
        ? undefined
        : (json["data"] as Array<any>).map(CryptocurrencyResponseItemFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetCryptocurrencies200ResponseToJSON(
  json: any,
): GetCryptocurrencies200Response {
  return GetCryptocurrencies200ResponseToJSONTyped(json, false);
}

export function GetCryptocurrencies200ResponseToJSONTyped(
  value?: GetCryptocurrencies200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data:
      value["data"] == null
        ? undefined
        : (value["data"] as Array<any>).map(CryptocurrencyResponseItemToJSON),
    status: value["status"],
  };
}
