/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { BalanceSheetConsolidatedItem } from "./balance-sheet-consolidated-item";

export interface GetBalanceSheetConsolidated200Response {
  /**
   * Balance sheet data
   */
  balance_sheet?: Array<BalanceSheetConsolidatedItem>;
  /**
   * Response status
   */
  status?: string;
}
