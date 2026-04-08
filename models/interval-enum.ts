/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export const IntervalEnum = {
  _1MIN: "1min",
  _5MIN: "5min",
  _15MIN: "15min",
  _30MIN: "30min",
  _45MIN: "45min",
  _1H: "1h",
  _2H: "2h",
  _4H: "4h",
  _8H: "8h",
  _1DAY: "1day",
  _1WEEK: "1week",
  _1MONTH: "1month",
} as const;

export type IntervalEnum = (typeof IntervalEnum)[keyof typeof IntervalEnum];
