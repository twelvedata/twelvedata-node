/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export const RangeSplitsEnum = {
  LAST: "last",
  _1M: "1m",
  _3M: "3m",
  _6M: "6m",
  YTD: "ytd",
  _1Y: "1y",
  _2Y: "2y",
  _5Y: "5y",
  FULL: "full",
} as const;

export type RangeSplitsEnum =
  (typeof RangeSplitsEnum)[keyof typeof RangeSplitsEnum];
