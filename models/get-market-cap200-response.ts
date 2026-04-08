/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetMarketCap200ResponseMarketCapInner } from "./get-market-cap200-response-market-cap-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMarketCap200ResponseMeta } from "./get-market-cap200-response-meta";

export interface GetMarketCap200Response {
  meta?: GetMarketCap200ResponseMeta;
  /**
   * Market capitalization values
   */
  market_cap?: Array<GetMarketCap200ResponseMarketCapInner>;
}
