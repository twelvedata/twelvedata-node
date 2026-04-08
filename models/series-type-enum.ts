/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export const SeriesTypeEnum = {
  CLOSE: "close",
  OPEN: "open",
  HIGH: "high",
  LOW: "low",
  VOLUME: "volume",
} as const;

export type SeriesTypeEnum =
  (typeof SeriesTypeEnum)[keyof typeof SeriesTypeEnum];
