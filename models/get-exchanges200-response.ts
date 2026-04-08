/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { ExchangesResponseItem } from "./exchanges-response-item";

export interface GetExchanges200Response {
  /**
   * List of exchanges
   */
  data?: Array<ExchangesResponseItem>;
  /**
   * Response status
   */
  status?: string;
}
