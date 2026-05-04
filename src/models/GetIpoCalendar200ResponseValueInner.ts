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
 * @interface GetIpoCalendar200ResponseValueInner
 */
export interface GetIpoCalendar200ResponseValueInner {
  /**
   * Ticker of the company
   * @type {string}
   * @memberof GetIpoCalendar200ResponseValueInner
   */
  symbol: string;
  /**
   * Name of the company
   * @type {string}
   * @memberof GetIpoCalendar200ResponseValueInner
   */
  name: string;
  /**
   * Exchange name where the company is listed
   * @type {string}
   * @memberof GetIpoCalendar200ResponseValueInner
   */
  exchange: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetIpoCalendar200ResponseValueInner
   */
  micCode: string;
  /**
   * The lower bound of stock price range if available
   * @type {number}
   * @memberof GetIpoCalendar200ResponseValueInner
   */
  priceRangeLow?: number;
  /**
   * The upper bound of stock price range if available
   * @type {number}
   * @memberof GetIpoCalendar200ResponseValueInner
   */
  priceRangeHigh?: number;
  /**
   * Initial offer price if available
   * @type {number}
   * @memberof GetIpoCalendar200ResponseValueInner
   */
  offerPrice?: number;
  /**
   * Currency of the stock
   * @type {string}
   * @memberof GetIpoCalendar200ResponseValueInner
   */
  currency: string;
  /**
   * Number of shares, if available
   * @type {number}
   * @memberof GetIpoCalendar200ResponseValueInner
   */
  shares?: number;
}

/**
 * Check if a given object implements the GetIpoCalendar200ResponseValueInner interface.
 */
export function instanceOfGetIpoCalendar200ResponseValueInner(
  value: object,
): value is GetIpoCalendar200ResponseValueInner {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  return true;
}

export function GetIpoCalendar200ResponseValueInnerFromJSON(
  json: any,
): GetIpoCalendar200ResponseValueInner {
  return GetIpoCalendar200ResponseValueInnerFromJSONTyped(json, false);
}

export function GetIpoCalendar200ResponseValueInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetIpoCalendar200ResponseValueInner {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
    priceRangeLow:
      json["price_range_low"] == null ? undefined : json["price_range_low"],
    priceRangeHigh:
      json["price_range_high"] == null ? undefined : json["price_range_high"],
    offerPrice: json["offer_price"] == null ? undefined : json["offer_price"],
    currency: json["currency"],
    shares: json["shares"] == null ? undefined : json["shares"],
  };
}

export function GetIpoCalendar200ResponseValueInnerToJSON(
  json: any,
): GetIpoCalendar200ResponseValueInner {
  return GetIpoCalendar200ResponseValueInnerToJSONTyped(json, false);
}

export function GetIpoCalendar200ResponseValueInnerToJSONTyped(
  value?: GetIpoCalendar200ResponseValueInner | null,
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
    price_range_low: value["priceRangeLow"],
    price_range_high: value["priceRangeHigh"],
    offer_price: value["offerPrice"],
    currency: value["currency"],
    shares: value["shares"],
  };
}
