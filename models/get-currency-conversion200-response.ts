/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetCurrencyConversion200Response {
  /**
   * Requested currency symbol
   */
  symbol?: string;
  /**
   * Real-time exchange rate for the corresponding symbol
   */
  rate?: number;
  /**
   * Amount of converted currency
   */
  amount?: number;
  /**
   * Unix timestamp of the rate
   */
  timestamp?: number;
}
