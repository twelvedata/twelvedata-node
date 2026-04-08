/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetFundHolders200ResponseMeta } from "./get-fund-holders200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { InstitutionalHolderItem } from "./institutional-holder-item";

export interface GetInstitutionalHolders200Response {
  meta?: GetFundHolders200ResponseMeta;
  /**
   * List of institutional holders for the financial instrument
   */
  institutional_holders?: Array<InstitutionalHolderItem>;
}
