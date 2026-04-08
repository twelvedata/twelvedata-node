/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetQuote200ResponseFiftyTwoWeek } from "./get-quote200-response-fifty-two-week";

export interface GetQuote200Response {
  /**
   * Symbol passed
   */
  symbol?: string;
  /**
   * Name of the instrument
   */
  name?: string;
  /**
   * Exchange where instrument is traded
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard. Available for stocks, ETFs, mutual funds, bonds
   */
  mic_code?: string;
  /**
   * Currency in which the equity is denominated. Available for stocks, ETFs, mutual funds, bonds
   */
  currency?: string;
  /**
   * Datetime in defined timezone referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * Unix timestamp representing the opening candle of the specified interval
   */
  timestamp?: number;
  /**
   * Unix timestamp of last minute candle
   */
  last_quote_at?: number;
  /**
   * Price at the opening of current bar
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar
   */
  low?: string;
  /**
   * Close price at the end of the bar
   */
  close?: string;
  /**
   * Trading volume during the bar. Available not for all instrument types
   */
  volume?: string;
  /**
   * Close price at the end of the previous bar
   */
  previous_close?: string;
  /**
   * Close - previous_close
   */
  change?: string;
  /**
   * (Close - previous_close) / previous_close * 100
   */
  percent_change?: string;
  /**
   * Average volume of the specified period. Available not for all instrument types
   */
  average_volume?: string;
  /**
   * Percent change in price between the current and the backward one, where period is 1 day. Available for crypto
   */
  rolling_1d_change?: string;
  /**
   * Percent change in price between the current and the backward one, where period is 7 days. Available for crypto
   */
  rolling_7d_change?: string;
  /**
   * Percent change in price between the current and the backward one, where period specified in request param rolling_period. Available for crypto
   */
  rolling_change?: string;
  /**
   * True if market is open; false if closed
   */
  is_market_open?: boolean;
  fifty_two_week?: GetQuote200ResponseFiftyTwoWeek;
  /**
   * Diff between the regular close price and the latest extended price. Displayed only if prepost is true
   */
  extended_change?: string;
  /**
   * Percent change in price between the regular close price and the latest extended price. Displayed only if prepost is true
   */
  extended_percent_change?: string;
  /**
   * Latest extended price. Displayed only if prepost is true
   */
  extended_price?: string;
  /**
   * Unix timestamp of the last extended price. Displayed only if prepost is true
   */
  extended_timestamp?: number;
}
