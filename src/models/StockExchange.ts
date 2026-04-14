/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Stock info
 * @export
 * @interface StockExchange
 */
export interface StockExchange {
  /**
   *
   * @type {string}
   * @memberof StockExchange
   */
  country?: string;
  /**
   *
   * @type {string}
   * @memberof StockExchange
   */
  name?: string;
}

/**
 * Check if a given object implements the StockExchange interface.
 */
export function instanceOfStockExchange(value: object): value is StockExchange {
  return true;
}

export function StockExchangeFromJSON(json: any): StockExchange {
  return StockExchangeFromJSONTyped(json, false);
}

export function StockExchangeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): StockExchange {
  if (json == null) {
    return json;
  }
  return {
    country: json["country"] == null ? undefined : json["country"],
    name: json["name"] == null ? undefined : json["name"],
  };
}

export function StockExchangeToJSON(json: any): StockExchange {
  return StockExchangeToJSONTyped(json, false);
}

export function StockExchangeToJSONTyped(
  value?: StockExchange | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    country: value["country"],
    name: value["name"],
  };
}
