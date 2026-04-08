/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export const RatingChangeEnum = {
  MAINTAINS: "Maintains",
  UPGRADE: "Upgrade",
  DOWNGRADE: "Downgrade",
  INITIATES: "Initiates",
  REITERATES: "Reiterates",
} as const;

export type RatingChangeEnum =
  (typeof RatingChangeEnum)[keyof typeof RatingChangeEnum];
