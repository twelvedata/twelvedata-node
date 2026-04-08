/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CryptocurrencyExchangesResponseItem } from "./cryptocurrency-exchanges-response-item";

export interface GetCryptocurrencyExchanges200Response {
  /**
   * List of cryptocurrency exchanges
   */
  data?: Array<CryptocurrencyExchangesResponseItem>;
  /**
   * Response status
   */
  status?: string;
}
