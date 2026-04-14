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
 * @interface MarketStateResponseItem
 */
export interface MarketStateResponseItem {
  /**
   * The full name of exchange
   * @type {string}
   * @memberof MarketStateResponseItem
   */
  name?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof MarketStateResponseItem
   */
  code?: string;
  /**
   * Country where the exchange is located
   * @type {string}
   * @memberof MarketStateResponseItem
   */
  country?: string;
  /**
   * Indicates if the market is currently open
   * @type {boolean}
   * @memberof MarketStateResponseItem
   */
  isMarketOpen?: boolean;
  /**
   * Time after market opening in <code>HH:MM:SS</code> format; if currently closed - returns <code>00:00:00</code>
   * @type {string}
   * @memberof MarketStateResponseItem
   */
  timeAfterOpen?: string;
  /**
   * Time to market opening in <code>HH:MM:SS</code> format; if currently open - returns <code>00:00:00</code>
   * @type {string}
   * @memberof MarketStateResponseItem
   */
  timeToOpen?: string;
  /**
   * Time to market closing in <code>HH:MM:SS</code> format; if currently closed - returns <code>00:00:00</code>
   * @type {string}
   * @memberof MarketStateResponseItem
   */
  timeToClose?: string;
}

/**
 * Check if a given object implements the MarketStateResponseItem interface.
 */
export function instanceOfMarketStateResponseItem(
  value: object,
): value is MarketStateResponseItem {
  return true;
}

export function MarketStateResponseItemFromJSON(
  json: any,
): MarketStateResponseItem {
  return MarketStateResponseItemFromJSONTyped(json, false);
}

export function MarketStateResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MarketStateResponseItem {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    code: json["code"] == null ? undefined : json["code"],
    country: json["country"] == null ? undefined : json["country"],
    isMarketOpen:
      json["is_market_open"] == null ? undefined : json["is_market_open"],
    timeAfterOpen:
      json["time_after_open"] == null ? undefined : json["time_after_open"],
    timeToOpen: json["time_to_open"] == null ? undefined : json["time_to_open"],
    timeToClose:
      json["time_to_close"] == null ? undefined : json["time_to_close"],
  };
}

export function MarketStateResponseItemToJSON(
  json: any,
): MarketStateResponseItem {
  return MarketStateResponseItemToJSONTyped(json, false);
}

export function MarketStateResponseItemToJSONTyped(
  value?: MarketStateResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    code: value["code"],
    country: value["country"],
    is_market_open: value["isMarketOpen"],
    time_after_open: value["timeAfterOpen"],
    time_to_open: value["timeToOpen"],
    time_to_close: value["timeToClose"],
  };
}
