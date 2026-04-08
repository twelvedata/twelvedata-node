/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities } from "./get-balance-sheet200-response-balance-sheet-inner-liabilities-current-liabilities";
// May contain unused imports in some cases
// @ts-ignore
import type { GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities } from "./get-balance-sheet200-response-balance-sheet-inner-liabilities-non-current-liabilities";

/**
 * Liabilities section of the balance sheet
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerLiabilities {
  current_liabilities?: GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities;
  non_current_liabilities?: GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities;
  /**
   * The sum of total_current_liabilities + total_non_current_liabilities
   */
  total_liabilities?: number;
}
