/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { FundHolderItem } from "./fund-holder-item";
// May contain unused imports in some cases
// @ts-ignore
import type { GetFundHolders200ResponseMeta } from "./get-fund-holders200-response-meta";

export interface GetFundHolders200Response {
  meta?: GetFundHolders200ResponseMeta;
  /**
   * List of fund holders for the financial instrument
   */
  fund_holders?: Array<FundHolderItem>;
}
