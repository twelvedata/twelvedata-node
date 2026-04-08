/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetBalanceSheet200ResponseBalanceSheetInnerAssets } from "./get-balance-sheet200-response-balance-sheet-inner-assets";
// May contain unused imports in some cases
// @ts-ignore
import type { GetBalanceSheet200ResponseBalanceSheetInnerLiabilities } from "./get-balance-sheet200-response-balance-sheet-inner-liabilities";
// May contain unused imports in some cases
// @ts-ignore
import type { GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity } from "./get-balance-sheet200-response-balance-sheet-inner-shareholders-equity";

export interface GetBalanceSheet200ResponseBalanceSheetInner {
  /**
   * Date of the balance sheet release
   */
  fiscal_date?: string;
  /**
   * Fiscal year
   */
  year?: number;
  assets?: GetBalanceSheet200ResponseBalanceSheetInnerAssets;
  liabilities?: GetBalanceSheet200ResponseBalanceSheetInnerLiabilities;
  shareholders_equity?: GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity;
}
