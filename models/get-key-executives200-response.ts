/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetKeyExecutives200ResponseKeyExecutivesInner } from "./get-key-executives200-response-key-executives-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetKeyExecutives200ResponseMeta } from "./get-key-executives200-response-meta";

export interface GetKeyExecutives200Response {
  meta?: GetKeyExecutives200ResponseMeta;
  /**
   * List of key executives
   */
  key_executives?: Array<GetKeyExecutives200ResponseKeyExecutivesInner>;
}
