/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export const MarketEnum = {
  STOCKS: "stocks",
  ETF: "etf",
  MUTUAL_FUNDS: "mutual_funds",
  FOREX: "forex",
  CRYPTO: "crypto",
} as const;

export type MarketEnum = (typeof MarketEnum)[keyof typeof MarketEnum];
