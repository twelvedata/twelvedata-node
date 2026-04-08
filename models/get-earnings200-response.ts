/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { EarningsItem } from "./earnings-item";
// May contain unused imports in some cases
// @ts-ignore
import type { GetEarnings200ResponseMeta } from "./get-earnings200-response-meta";

export interface GetEarnings200Response {
  meta?: GetEarnings200ResponseMeta;
  /**
   * List of earnings data
   */
  earnings?: Array<EarningsItem>;
  /**
   * Response status
   */
  status?: string;
}
