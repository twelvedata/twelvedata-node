/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetBalanceSheet200ResponseBalanceSheetInner } from "./get-balance-sheet200-response-balance-sheet-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetBalanceSheet200ResponseMeta } from "./get-balance-sheet200-response-meta";

export interface GetBalanceSheet200Response {
  meta?: GetBalanceSheet200ResponseMeta;
  /**
   * Array of balance sheet records
   */
  balance_sheet?: Array<GetBalanceSheet200ResponseBalanceSheetInner>;
}
