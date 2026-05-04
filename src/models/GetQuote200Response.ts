/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetQuote200ResponseFiftyTwoWeek } from "./GetQuote200ResponseFiftyTwoWeek";
import {
  GetQuote200ResponseFiftyTwoWeekFromJSON,
  GetQuote200ResponseFiftyTwoWeekFromJSONTyped,
  GetQuote200ResponseFiftyTwoWeekToJSON,
  GetQuote200ResponseFiftyTwoWeekToJSONTyped,
} from "./GetQuote200ResponseFiftyTwoWeek";

/**
 *
 * @export
 * @interface GetQuote200Response
 */
export interface GetQuote200Response {
  /**
   * Symbol passed
   * @type {string}
   * @memberof GetQuote200Response
   */
  symbol: string;
  /**
   * Name of the instrument
   * @type {string}
   * @memberof GetQuote200Response
   */
  name: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetQuote200Response
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard. Available for stocks, ETFs, mutual funds, bonds
   * @type {string}
   * @memberof GetQuote200Response
   */
  micCode?: string;
  /**
   * Currency in which the equity is denominated. Available for stocks, ETFs, mutual funds, bonds
   * @type {string}
   * @memberof GetQuote200Response
   */
  currency?: string;
  /**
   * Datetime in defined timezone referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetQuote200Response
   */
  datetime: string;
  /**
   * Unix timestamp representing the opening candle of the specified interval
   * @type {number}
   * @memberof GetQuote200Response
   */
  timestamp: number;
  /**
   * Unix timestamp of last minute candle
   * @type {number}
   * @memberof GetQuote200Response
   */
  lastQuoteAt?: number;
  /**
   * Price at the opening of current bar
   * @type {string}
   * @memberof GetQuote200Response
   */
  open: string;
  /**
   * Highest price which occurred during the current bar
   * @type {string}
   * @memberof GetQuote200Response
   */
  high: string;
  /**
   * Lowest price which occurred during the current bar
   * @type {string}
   * @memberof GetQuote200Response
   */
  low: string;
  /**
   * Close price at the end of the bar
   * @type {string}
   * @memberof GetQuote200Response
   */
  close: string;
  /**
   * Trading volume during the bar. Available not for all instrument types
   * @type {string}
   * @memberof GetQuote200Response
   */
  volume?: string;
  /**
   * Close price at the end of the previous bar
   * @type {string}
   * @memberof GetQuote200Response
   */
  previousClose: string;
  /**
   * Close - previous_close
   * @type {string}
   * @memberof GetQuote200Response
   */
  change: string;
  /**
   * (Close - previous_close) / previous_close * 100
   * @type {string}
   * @memberof GetQuote200Response
   */
  percentChange: string;
  /**
   * Average volume of the specified period. Available not for all instrument types
   * @type {string}
   * @memberof GetQuote200Response
   */
  averageVolume?: string;
  /**
   * Percent change in price between the current and the backward one, where period is 1 day. Available for crypto
   * @type {string}
   * @memberof GetQuote200Response
   */
  rolling1dChange?: string;
  /**
   * Percent change in price between the current and the backward one, where period is 7 days. Available for crypto
   * @type {string}
   * @memberof GetQuote200Response
   */
  rolling7dChange?: string;
  /**
   * Percent change in price between the current and the backward one, where period specified in request param rolling_period. Available for crypto
   * @type {string}
   * @memberof GetQuote200Response
   */
  rollingChange?: string;
  /**
   * True if market is open; false if closed
   * @type {boolean}
   * @memberof GetQuote200Response
   */
  isMarketOpen: boolean;
  /**
   *
   * @type {GetQuote200ResponseFiftyTwoWeek}
   * @memberof GetQuote200Response
   */
  fiftyTwoWeek: GetQuote200ResponseFiftyTwoWeek;
  /**
   * Diff between the regular close price and the latest extended price. Displayed only if prepost is true
   * @type {string}
   * @memberof GetQuote200Response
   */
  extendedChange?: string;
  /**
   * Percent change in price between the regular close price and the latest extended price. Displayed only if prepost is true
   * @type {string}
   * @memberof GetQuote200Response
   */
  extendedPercentChange?: string;
  /**
   * Latest extended price. Displayed only if prepost is true
   * @type {string}
   * @memberof GetQuote200Response
   */
  extendedPrice?: string;
  /**
   * Unix timestamp of the last extended price. Displayed only if prepost is true
   * @type {number}
   * @memberof GetQuote200Response
   */
  extendedTimestamp?: number;
}

/**
 * Check if a given object implements the GetQuote200Response interface.
 */
export function instanceOfGetQuote200Response(
  value: object,
): value is GetQuote200Response {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("timestamp" in value) || value["timestamp"] === undefined) return false;
  if (!("open" in value) || value["open"] === undefined) return false;
  if (!("high" in value) || value["high"] === undefined) return false;
  if (!("low" in value) || value["low"] === undefined) return false;
  if (!("close" in value) || value["close"] === undefined) return false;
  if (!("previousClose" in value) || value["previousClose"] === undefined)
    return false;
  if (!("change" in value) || value["change"] === undefined) return false;
  if (!("percentChange" in value) || value["percentChange"] === undefined)
    return false;
  if (!("isMarketOpen" in value) || value["isMarketOpen"] === undefined)
    return false;
  if (!("fiftyTwoWeek" in value) || value["fiftyTwoWeek"] === undefined)
    return false;
  return true;
}

export function GetQuote200ResponseFromJSON(json: any): GetQuote200Response {
  return GetQuote200ResponseFromJSONTyped(json, false);
}

export function GetQuote200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetQuote200Response {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    exchange: json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    currency: json["currency"] == null ? undefined : json["currency"],
    datetime: json["datetime"],
    timestamp: json["timestamp"],
    lastQuoteAt:
      json["last_quote_at"] == null ? undefined : json["last_quote_at"],
    open: json["open"],
    high: json["high"],
    low: json["low"],
    close: json["close"],
    volume: json["volume"] == null ? undefined : json["volume"],
    previousClose: json["previous_close"],
    change: json["change"],
    percentChange: json["percent_change"],
    averageVolume:
      json["average_volume"] == null ? undefined : json["average_volume"],
    rolling1dChange:
      json["rolling_1d_change"] == null ? undefined : json["rolling_1d_change"],
    rolling7dChange:
      json["rolling_7d_change"] == null ? undefined : json["rolling_7d_change"],
    rollingChange:
      json["rolling_change"] == null ? undefined : json["rolling_change"],
    isMarketOpen: json["is_market_open"],
    fiftyTwoWeek: GetQuote200ResponseFiftyTwoWeekFromJSON(
      json["fifty_two_week"],
    ),
    extendedChange:
      json["extended_change"] == null ? undefined : json["extended_change"],
    extendedPercentChange:
      json["extended_percent_change"] == null
        ? undefined
        : json["extended_percent_change"],
    extendedPrice:
      json["extended_price"] == null ? undefined : json["extended_price"],
    extendedTimestamp:
      json["extended_timestamp"] == null
        ? undefined
        : json["extended_timestamp"],
  };
}

export function GetQuote200ResponseToJSON(json: any): GetQuote200Response {
  return GetQuote200ResponseToJSONTyped(json, false);
}

export function GetQuote200ResponseToJSONTyped(
  value?: GetQuote200Response | null,
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
    currency: value["currency"],
    datetime: value["datetime"],
    timestamp: value["timestamp"],
    last_quote_at: value["lastQuoteAt"],
    open: value["open"],
    high: value["high"],
    low: value["low"],
    close: value["close"],
    volume: value["volume"],
    previous_close: value["previousClose"],
    change: value["change"],
    percent_change: value["percentChange"],
    average_volume: value["averageVolume"],
    rolling_1d_change: value["rolling1dChange"],
    rolling_7d_change: value["rolling7dChange"],
    rolling_change: value["rollingChange"],
    is_market_open: value["isMarketOpen"],
    fifty_two_week: GetQuote200ResponseFiftyTwoWeekToJSON(
      value["fiftyTwoWeek"],
    ),
    extended_change: value["extendedChange"],
    extended_percent_change: value["extendedPercentChange"],
    extended_price: value["extendedPrice"],
    extended_timestamp: value["extendedTimestamp"],
  };
}
