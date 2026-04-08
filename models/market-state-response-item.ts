/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface MarketStateResponseItem {
  /**
   * The full name of exchange
   */
  name?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  code?: string;
  /**
   * Country where the exchange is located
   */
  country?: string;
  /**
   * Indicates if the market is currently open
   */
  is_market_open?: boolean;
  /**
   * Time after market opening in <code>HH:MM:SS</code> format; if currently closed - returns <code>00:00:00</code>
   */
  time_after_open?: string;
  /**
   * Time to market opening in <code>HH:MM:SS</code> format; if currently open - returns <code>00:00:00</code>
   */
  time_to_open?: string;
  /**
   * Time to market closing in <code>HH:MM:SS</code> format; if currently closed - returns <code>00:00:00</code>
   */
  time_to_close?: string;
}
