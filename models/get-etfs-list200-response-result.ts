/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { ETFsListResponseItem } from "./etfs-list-response-item";

export interface GetETFsList200ResponseResult {
  /**
   * Total number of matching funds
   */
  count?: number;
  /**
   * List of ETFs
   */
  list?: Array<ETFsListResponseItem>;
}
