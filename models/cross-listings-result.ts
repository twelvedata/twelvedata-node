/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CrossListingsItem } from "./cross-listings-item";

/**
 * Represents the result of cross listings
 */
export interface CrossListingsResult {
  /**
   * Number of cross listings found
   */
  count?: number;
  /**
   * List of cross listings
   */
  list?: Array<CrossListingsItem>;
}
