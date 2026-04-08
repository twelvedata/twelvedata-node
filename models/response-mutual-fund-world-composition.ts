/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation } from "./get-mutual-funds-world200-response-mutual-fund-composition-asset-allocation";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown } from "./get-mutual-funds-world200-response-mutual-fund-composition-bond-breakdown";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner } from "./get-mutual-funds-world200-response-mutual-fund-composition-major-market-sectors-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner } from "./get-mutual-funds-world200-response-mutual-fund-composition-top-holdings-inner";

/**
 * Mutual fund composition
 */
export interface ResponseMutualFundWorldComposition {
  /**
   * Breakdown of the fund’s portfolio by major industry sectors and their respective weights
   */
  major_market_sectors?: Array<GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner>;
  asset_allocation?: GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation;
  /**
   * Top holdings of the fund with their respective weights in the overall portfolio composition
   */
  top_holdings?: Array<GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner>;
  bond_breakdown?: GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown;
}
