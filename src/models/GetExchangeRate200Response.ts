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
 * @interface GetExchangeRate200Response
 */
export interface GetExchangeRate200Response {
  /**
   * Requested currency symbol
   * @type {string}
   * @memberof GetExchangeRate200Response
   */
  symbol?: string;
  /**
   * Real-time exchange rate for the corresponding symbol
   * @type {number}
   * @memberof GetExchangeRate200Response
   */
  rate?: number;
  /**
   * Unix timestamp of the rate
   * @type {number}
   * @memberof GetExchangeRate200Response
   */
  timestamp?: number;
}

/**
 * Check if a given object implements the GetExchangeRate200Response interface.
 */
export function instanceOfGetExchangeRate200Response(
  value: object,
): value is GetExchangeRate200Response {
  return true;
}

export function GetExchangeRate200ResponseFromJSON(
  json: any,
): GetExchangeRate200Response {
  return GetExchangeRate200ResponseFromJSONTyped(json, false);
}

export function GetExchangeRate200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetExchangeRate200Response {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    rate: json["rate"] == null ? undefined : json["rate"],
    timestamp: json["timestamp"] == null ? undefined : json["timestamp"],
  };
}

export function GetExchangeRate200ResponseToJSON(
  json: any,
): GetExchangeRate200Response {
  return GetExchangeRate200ResponseToJSONTyped(json, false);
}

export function GetExchangeRate200ResponseToJSONTyped(
  value?: GetExchangeRate200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    rate: value["rate"],
    timestamp: value["timestamp"],
  };
}
