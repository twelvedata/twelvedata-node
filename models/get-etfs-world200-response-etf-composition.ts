/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfCompositionAssetAllocation } from "./get-etfs-world200-response-etf-composition-asset-allocation";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfCompositionBondBreakdown } from "./get-etfs-world200-response-etf-composition-bond-breakdown";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfCompositionCountryAllocationInner } from "./get-etfs-world200-response-etf-composition-country-allocation-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner } from "./get-etfs-world200-response-etf-composition-major-market-sectors-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetETFsWorld200ResponseEtfCompositionTopHoldingsInner } from "./get-etfs-world200-response-etf-composition-top-holdings-inner";

/**
 * Composition of a etf
 */
export interface GetETFsWorld200ResponseEtfComposition {
  /**
   * Breakdown of the fund’s portfolio by major industry sectors and their respective weights
   */
  major_market_sectors?: Array<GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner>;
  /**
   * Breakdown of the fund’s portfolio by country and their respective weights
   */
  country_allocation?: Array<GetETFsWorld200ResponseEtfCompositionCountryAllocationInner>;
  asset_allocation?: GetETFsWorld200ResponseEtfCompositionAssetAllocation;
  /**
   * Top holdings of a fund with their respective weights in the overall portfolio composition
   */
  top_holdings?: Array<GetETFsWorld200ResponseEtfCompositionTopHoldingsInner>;
  bond_breakdown?: GetETFsWorld200ResponseEtfCompositionBondBreakdown;
}
