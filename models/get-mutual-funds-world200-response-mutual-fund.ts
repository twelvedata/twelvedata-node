/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundComposition } from "./get-mutual-funds-world200-response-mutual-fund-composition";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundPerformance } from "./get-mutual-funds-world200-response-mutual-fund-performance";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundPurchaseInfo } from "./get-mutual-funds-world200-response-mutual-fund-purchase-info";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundRatings } from "./get-mutual-funds-world200-response-mutual-fund-ratings";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundRisk } from "./get-mutual-funds-world200-response-mutual-fund-risk";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundSummary } from "./get-mutual-funds-world200-response-mutual-fund-summary";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundSustainability } from "./get-mutual-funds-world200-response-mutual-fund-sustainability";

/**
 * Mutual fund information
 */
export interface GetMutualFundsWorld200ResponseMutualFund {
  summary?: GetMutualFundsWorld200ResponseMutualFundSummary;
  performance?: GetMutualFundsWorld200ResponseMutualFundPerformance;
  risk?: GetMutualFundsWorld200ResponseMutualFundRisk;
  ratings?: GetMutualFundsWorld200ResponseMutualFundRatings;
  composition?: GetMutualFundsWorld200ResponseMutualFundComposition;
  purchase_info?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfo;
  sustainability?: GetMutualFundsWorld200ResponseMutualFundSustainability;
}
