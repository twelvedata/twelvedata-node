/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CryptocurrencyResponseItem } from "./cryptocurrency-response-item";

export interface GetCryptocurrencies200Response {
  /**
   * List of cryptocurrencies
   */
  data?: Array<CryptocurrencyResponseItem>;
  /**
   * Response status
   */
  status?: string;
}
