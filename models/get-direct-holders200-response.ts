/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { DirectHolderItem } from "./direct-holder-item";
// May contain unused imports in some cases
// @ts-ignore
import type { GetDirectHolders200ResponseMeta } from "./get-direct-holders200-response-meta";

export interface GetDirectHolders200Response {
  meta?: GetDirectHolders200ResponseMeta;
  /**
   * List of direct holders for the financial instrument
   */
  direct_holders?: Array<DirectHolderItem>;
}
