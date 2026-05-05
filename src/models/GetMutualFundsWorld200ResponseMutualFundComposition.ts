/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown } from "./GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown";
import {
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownFromJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownToJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown";
import type { GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation } from "./GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation";
import {
  GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationFromJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationToJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation";
import type { GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner } from "./GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner";
import {
  GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerFromJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerToJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner";
import type { GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner } from "./GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner";
import {
  GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerFromJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerToJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner";

/**
 * Composition of a mutual fund
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundComposition
 */
export interface GetMutualFundsWorld200ResponseMutualFundComposition {
  /**
   * Breakdown of the fund’s portfolio by major industry sectors and their respective weights
   * @type {Array<GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner>}
   * @memberof GetMutualFundsWorld200ResponseMutualFundComposition
   */
  majorMarketSectors?: Array<GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner>;
  /**
   * Top holdings of the fund with their respective weights in the overall portfolio composition
   * @type {Array<GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner>}
   * @memberof GetMutualFundsWorld200ResponseMutualFundComposition
   */
  topHoldings?: Array<GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner>;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation}
   * @memberof GetMutualFundsWorld200ResponseMutualFundComposition
   */
  assetAllocation?: GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown}
   * @memberof GetMutualFundsWorld200ResponseMutualFundComposition
   */
  bondBreakdown?: GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundComposition interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundComposition(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundComposition {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundComposition {
  return GetMutualFundsWorld200ResponseMutualFundCompositionFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundComposition {
  if (json == null) {
    return json;
  }
  return {
    majorMarketSectors:
      json["major_market_sectors"] == null
        ? undefined
        : (json["major_market_sectors"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerFromJSON,
          ),
    topHoldings:
      json["top_holdings"] == null
        ? undefined
        : (json["top_holdings"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerFromJSON,
          ),
    assetAllocation:
      json["asset_allocation"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationFromJSON(
            json["asset_allocation"],
          ),
    bondBreakdown:
      json["bond_breakdown"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownFromJSON(
            json["bond_breakdown"],
          ),
  };
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundComposition {
  return GetMutualFundsWorld200ResponseMutualFundCompositionToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundComposition | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    major_market_sectors:
      value["majorMarketSectors"] == null
        ? undefined
        : (value["majorMarketSectors"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerToJSON,
          ),
    top_holdings:
      value["topHoldings"] == null
        ? undefined
        : (value["topHoldings"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerToJSON,
          ),
    asset_allocation:
      GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationToJSON(
        value["assetAllocation"],
      ),
    bond_breakdown:
      GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownToJSON(
        value["bondBreakdown"],
      ),
  };
}
