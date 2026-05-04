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
 * @interface GetCurrencyConversion200Response
 */
export interface GetCurrencyConversion200Response {
  /**
   * Requested currency symbol
   * @type {string}
   * @memberof GetCurrencyConversion200Response
   */
  symbol: string;
  /**
   * Real-time exchange rate for the corresponding symbol
   * @type {number}
   * @memberof GetCurrencyConversion200Response
   */
  rate: number;
  /**
   * Amount of converted currency
   * @type {number}
   * @memberof GetCurrencyConversion200Response
   */
  amount?: number;
  /**
   * Unix timestamp of the rate
   * @type {number}
   * @memberof GetCurrencyConversion200Response
   */
  timestamp: number;
}

/**
 * Check if a given object implements the GetCurrencyConversion200Response interface.
 */
export function instanceOfGetCurrencyConversion200Response(
  value: object,
): value is GetCurrencyConversion200Response {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("rate" in value) || value["rate"] === undefined) return false;
  if (!("timestamp" in value) || value["timestamp"] === undefined) return false;
  return true;
}

export function GetCurrencyConversion200ResponseFromJSON(
  json: any,
): GetCurrencyConversion200Response {
  return GetCurrencyConversion200ResponseFromJSONTyped(json, false);
}

export function GetCurrencyConversion200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetCurrencyConversion200Response {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    rate: json["rate"],
    amount: json["amount"] == null ? undefined : json["amount"],
    timestamp: json["timestamp"],
  };
}

export function GetCurrencyConversion200ResponseToJSON(
  json: any,
): GetCurrencyConversion200Response {
  return GetCurrencyConversion200ResponseToJSONTyped(json, false);
}

export function GetCurrencyConversion200ResponseToJSONTyped(
  value?: GetCurrencyConversion200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    rate: value["rate"],
    amount: value["amount"],
    timestamp: value["timestamp"],
  };
}
