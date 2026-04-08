/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { MutualFundsListResponseListItem } from "./mutual-funds-list-response-list-item";

/**
 * Response result
 */
export interface GetMutualFundsList200ResponseResult {
  /**
   * Total number of matching funds
   */
  count?: number;
  /**
   * List of mutual funds
   */
  list?: Array<MutualFundsListResponseListItem>;
}
