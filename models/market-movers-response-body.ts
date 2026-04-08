/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { MarketMoversResponseValue } from "./market-movers-response-value";

export interface MarketMoversResponseBody {
  /**
   * Market movers list
   */
  values: Array<MarketMoversResponseValue>;
  /**
   * Response status
   */
  status?: string;
}
