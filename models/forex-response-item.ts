/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * ForexResponseItem represents details of a forex pair
 */
export interface ForexResponseItem {
  /**
   * Currency pair according to ISO 4217 standard codes with slash(/) delimiter
   */
  symbol?: string;
  /**
   * Group to which currency pair belongs to, could be: Major, Minor, Exotic and Exotic-Cross
   */
  currency_group?: string;
  /**
   * Base currency name according to ISO 4217 standard
   */
  currency_base?: string;
  /**
   * Quote currency name according to ISO 4217 standard
   */
  currency_quote?: string;
}
