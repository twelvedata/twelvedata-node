/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { AssetsInfo } from "./assets-info";

/**
 * Balance sheet for a specific fiscal date
 */
export interface BalanceSheetConsolidatedItem {
  /**
   * Date of the balance sheet release
   */
  fiscal_date?: string;
  assets?: AssetsInfo;
}
