/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetSplits200ResponseMeta } from "./get-splits200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetSplits200ResponseSplitsInner } from "./get-splits200-response-splits-inner";

export interface GetSplits200Response {
  meta?: GetSplits200ResponseMeta;
  /**
   * List of stock splits
   */
  splits?: Array<GetSplits200ResponseSplitsInner>;
}
