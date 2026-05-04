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
 * @interface MarketMoversResponseValue
 */
export interface MarketMoversResponseValue {
  /**
   * The exchange symbol ticker
   * @type {string}
   * @memberof MarketMoversResponseValue
   */
  symbol: string;
  /**
   * The official name of the instrument
   * @type {string}
   * @memberof MarketMoversResponseValue
   */
  name: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof MarketMoversResponseValue
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof MarketMoversResponseValue
   */
  micCode?: string;
  /**
   * The last updated datetime timestamp
   * @type {string}
   * @memberof MarketMoversResponseValue
   */
  datetime: string;
  /**
   * The latest available price for the symbol today
   * @type {number}
   * @memberof MarketMoversResponseValue
   */
  last: number;
  /**
   * The highest price for the symbol today
   * @type {number}
   * @memberof MarketMoversResponseValue
   */
  high: number;
  /**
   * The lowest price for the symbol today
   * @type {number}
   * @memberof MarketMoversResponseValue
   */
  low: number;
  /**
   * The trading volume of the symbol today
   * @type {number}
   * @memberof MarketMoversResponseValue
   */
  volume: number;
  /**
   * The value of the change since the previous day
   * @type {number}
   * @memberof MarketMoversResponseValue
   */
  change: number;
  /**
   * The percentage change since the previous day
   * @type {number}
   * @memberof MarketMoversResponseValue
   */
  percentChange: number;
}

/**
 * Check if a given object implements the MarketMoversResponseValue interface.
 */
export function instanceOfMarketMoversResponseValue(
  value: object,
): value is MarketMoversResponseValue {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("last" in value) || value["last"] === undefined) return false;
  if (!("high" in value) || value["high"] === undefined) return false;
  if (!("low" in value) || value["low"] === undefined) return false;
  if (!("volume" in value) || value["volume"] === undefined) return false;
  if (!("change" in value) || value["change"] === undefined) return false;
  if (!("percentChange" in value) || value["percentChange"] === undefined)
    return false;
  return true;
}

export function MarketMoversResponseValueFromJSON(
  json: any,
): MarketMoversResponseValue {
  return MarketMoversResponseValueFromJSONTyped(json, false);
}

export function MarketMoversResponseValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MarketMoversResponseValue {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    datetime: json["datetime"],
    last: json["last"],
    high: json["high"],
    low: json["low"],
    volume: json["volume"],
    change: json["change"],
    percentChange: json["percent_change"],
  };
}

export function MarketMoversResponseValueToJSON(
  json: any,
): MarketMoversResponseValue {
  return MarketMoversResponseValueToJSONTyped(json, false);
}

export function MarketMoversResponseValueToJSONTyped(
  value?: MarketMoversResponseValue | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    datetime: value["datetime"],
    last: value["last"],
    high: value["high"],
    low: value["low"],
    volume: value["volume"],
    change: value["change"],
    percent_change: value["percentChange"],
  };
}
