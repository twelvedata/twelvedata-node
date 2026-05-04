/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { CryptocurrencyExchangesResponseItem } from "./CryptocurrencyExchangesResponseItem";
import {
  CryptocurrencyExchangesResponseItemFromJSON,
  CryptocurrencyExchangesResponseItemFromJSONTyped,
  CryptocurrencyExchangesResponseItemToJSON,
  CryptocurrencyExchangesResponseItemToJSONTyped,
} from "./CryptocurrencyExchangesResponseItem";

/**
 *
 * @export
 * @interface GetCryptocurrencyExchanges200Response
 */
export interface GetCryptocurrencyExchanges200Response {
  /**
   * List of cryptocurrency exchanges
   * @type {Array<CryptocurrencyExchangesResponseItem>}
   * @memberof GetCryptocurrencyExchanges200Response
   */
  data: Array<CryptocurrencyExchangesResponseItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetCryptocurrencyExchanges200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetCryptocurrencyExchanges200Response interface.
 */
export function instanceOfGetCryptocurrencyExchanges200Response(
  value: object,
): value is GetCryptocurrencyExchanges200Response {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetCryptocurrencyExchanges200ResponseFromJSON(
  json: any,
): GetCryptocurrencyExchanges200Response {
  return GetCryptocurrencyExchanges200ResponseFromJSONTyped(json, false);
}

export function GetCryptocurrencyExchanges200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetCryptocurrencyExchanges200Response {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(
      CryptocurrencyExchangesResponseItemFromJSON,
    ),
    status: json["status"],
  };
}

export function GetCryptocurrencyExchanges200ResponseToJSON(
  json: any,
): GetCryptocurrencyExchanges200Response {
  return GetCryptocurrencyExchanges200ResponseToJSONTyped(json, false);
}

export function GetCryptocurrencyExchanges200ResponseToJSONTyped(
  value?: GetCryptocurrencyExchanges200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data: (value["data"] as Array<any>).map(
      CryptocurrencyExchangesResponseItemToJSON,
    ),
    status: value["status"],
  };
}
