/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses } from "./get-mutual-funds-world200-response-mutual-fund-purchase-info-expenses";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums } from "./get-mutual-funds-world200-response-mutual-fund-purchase-info-minimums";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing } from "./get-mutual-funds-world200-response-mutual-fund-purchase-info-pricing";

/**
 * Purchase information of a mutual fund
 */
export interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfo {
  expenses?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses;
  minimums?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums;
  pricing?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing;
  /**
   * List of brokerages where mutual fund can be purchased
   */
  brokerages?: Array<string>;
}
