/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets } from "./get-balance-sheet200-response-balance-sheet-inner-assets-current-assets";
// May contain unused imports in some cases
// @ts-ignore
import type { GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets } from "./get-balance-sheet200-response-balance-sheet-inner-assets-non-current-assets";

/**
 * Assets section of the balance sheet
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerAssets {
  current_assets?: GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets;
  non_current_assets?: GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets;
  /**
   * The sum of total_current_assets + total_non_current_assets
   */
  total_assets?: number;
}
