/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * CryptocurrencyResponseItem represents details of a cryptocurrency
 */
export interface CryptocurrencyResponseItem {
  /**
   * Cryptocurrency pair codes with slash(/) delimiter
   */
  symbol?: string;
  /**
   * List of exchanges where the cryptocurrency is available
   */
  available_exchanges?: Array<string>;
  /**
   * Base currency of the cryptocurrency pair
   */
  currency_base?: string;
  /**
   * Quote currency of the cryptocurrency pair
   */
  currency_quote?: string;
}
