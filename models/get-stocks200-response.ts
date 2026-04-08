/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { StocksResponseItem } from "./stocks-response-item";

export interface GetStocks200Response {
  /**
   * List of stock instruments
   */
  data?: Array<StocksResponseItem>;
  /**
   * Response status
   */
  status?: string;
}
