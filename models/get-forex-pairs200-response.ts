/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { ForexResponseItem } from "./forex-response-item";

export interface GetForexPairs200Response {
  /**
   * List of forex pairs
   */
  data?: Array<ForexResponseItem>;
  /**
   * Response status
   */
  status?: string;
}
