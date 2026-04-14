/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Json object with request general information
 * @export
 * @interface CrossMeta
 */
export interface CrossMeta {
  /**
   * Base instrument symbol
   * @type {string}
   * @memberof CrossMeta
   */
  baseInstrument?: string;
  /**
   * Base currency
   * @type {string}
   * @memberof CrossMeta
   */
  baseCurrency?: string;
  /**
   * Base exchange
   * @type {string}
   * @memberof CrossMeta
   */
  baseExchange?: string;
  /**
   * Interval between two consecutive points in time series
   * @type {string}
   * @memberof CrossMeta
   */
  interval?: string;
  /**
   * Quote instrument symbol
   * @type {string}
   * @memberof CrossMeta
   */
  quoteInstrument?: string;
  /**
   * Quote currency
   * @type {string}
   * @memberof CrossMeta
   */
  quoteCurrency?: string;
  /**
   * Quote exchange
   * @type {string}
   * @memberof CrossMeta
   */
  quoteExchange?: string;
}

/**
 * Check if a given object implements the CrossMeta interface.
 */
export function instanceOfCrossMeta(value: object): value is CrossMeta {
  return true;
}

export function CrossMetaFromJSON(json: any): CrossMeta {
  return CrossMetaFromJSONTyped(json, false);
}

export function CrossMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CrossMeta {
  if (json == null) {
    return json;
  }
  return {
    baseInstrument:
      json["base_instrument"] == null ? undefined : json["base_instrument"],
    baseCurrency:
      json["base_currency"] == null ? undefined : json["base_currency"],
    baseExchange:
      json["base_exchange"] == null ? undefined : json["base_exchange"],
    interval: json["interval"] == null ? undefined : json["interval"],
    quoteInstrument:
      json["quote_instrument"] == null ? undefined : json["quote_instrument"],
    quoteCurrency:
      json["quote_currency"] == null ? undefined : json["quote_currency"],
    quoteExchange:
      json["quote_exchange"] == null ? undefined : json["quote_exchange"],
  };
}

export function CrossMetaToJSON(json: any): CrossMeta {
  return CrossMetaToJSONTyped(json, false);
}

export function CrossMetaToJSONTyped(
  value?: CrossMeta | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    base_instrument: value["baseInstrument"],
    base_currency: value["baseCurrency"],
    base_exchange: value["baseExchange"],
    interval: value["interval"],
    quote_instrument: value["quoteInstrument"],
    quote_currency: value["quoteCurrency"],
    quote_exchange: value["quoteExchange"],
  };
}
