/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorld200ResponseEtfCompositionTopHoldingsInner } from "./GetETFsWorld200ResponseEtfCompositionTopHoldingsInner";
import {
  GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerFromJSON,
  GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerFromJSONTyped,
  GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerToJSON,
  GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerToJSONTyped,
} from "./GetETFsWorld200ResponseEtfCompositionTopHoldingsInner";
import type { GetETFsWorld200ResponseEtfCompositionAssetAllocation } from "./GetETFsWorld200ResponseEtfCompositionAssetAllocation";
import {
  GetETFsWorld200ResponseEtfCompositionAssetAllocationFromJSON,
  GetETFsWorld200ResponseEtfCompositionAssetAllocationFromJSONTyped,
  GetETFsWorld200ResponseEtfCompositionAssetAllocationToJSON,
  GetETFsWorld200ResponseEtfCompositionAssetAllocationToJSONTyped,
} from "./GetETFsWorld200ResponseEtfCompositionAssetAllocation";
import type { GetETFsWorld200ResponseEtfCompositionCountryAllocationInner } from "./GetETFsWorld200ResponseEtfCompositionCountryAllocationInner";
import {
  GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerFromJSON,
  GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerFromJSONTyped,
  GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerToJSON,
  GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerToJSONTyped,
} from "./GetETFsWorld200ResponseEtfCompositionCountryAllocationInner";
import type { GetETFsWorld200ResponseEtfCompositionBondBreakdown } from "./GetETFsWorld200ResponseEtfCompositionBondBreakdown";
import {
  GetETFsWorld200ResponseEtfCompositionBondBreakdownFromJSON,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownFromJSONTyped,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownToJSON,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownToJSONTyped,
} from "./GetETFsWorld200ResponseEtfCompositionBondBreakdown";
import type { GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner } from "./GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner";
import {
  GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerFromJSON,
  GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerFromJSONTyped,
  GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerToJSON,
  GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerToJSONTyped,
} from "./GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner";

/**
 * Composition of a etf
 * @export
 * @interface GetETFsWorldComposition200ResponseEtfComposition
 */
export interface GetETFsWorldComposition200ResponseEtfComposition {
  /**
   * Breakdown of the fund’s portfolio by major industry sectors and their respective weights
   * @type {Array<GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner>}
   * @memberof GetETFsWorldComposition200ResponseEtfComposition
   */
  majorMarketSectors?: Array<GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner>;
  /**
   * Breakdown of the fund’s portfolio by country and their respective weights
   * @type {Array<GetETFsWorld200ResponseEtfCompositionCountryAllocationInner>}
   * @memberof GetETFsWorldComposition200ResponseEtfComposition
   */
  countryAllocation?: Array<GetETFsWorld200ResponseEtfCompositionCountryAllocationInner>;
  /**
   *
   * @type {GetETFsWorld200ResponseEtfCompositionAssetAllocation}
   * @memberof GetETFsWorldComposition200ResponseEtfComposition
   */
  assetAllocation?: GetETFsWorld200ResponseEtfCompositionAssetAllocation;
  /**
   * Top holdings of a fund with their respective weights in the overall portfolio composition
   * @type {Array<GetETFsWorld200ResponseEtfCompositionTopHoldingsInner>}
   * @memberof GetETFsWorldComposition200ResponseEtfComposition
   */
  topHoldings?: Array<GetETFsWorld200ResponseEtfCompositionTopHoldingsInner>;
  /**
   *
   * @type {GetETFsWorld200ResponseEtfCompositionBondBreakdown}
   * @memberof GetETFsWorldComposition200ResponseEtfComposition
   */
  bondBreakdown?: GetETFsWorld200ResponseEtfCompositionBondBreakdown;
}

/**
 * Check if a given object implements the GetETFsWorldComposition200ResponseEtfComposition interface.
 */
export function instanceOfGetETFsWorldComposition200ResponseEtfComposition(
  value: object,
): value is GetETFsWorldComposition200ResponseEtfComposition {
  return true;
}

export function GetETFsWorldComposition200ResponseEtfCompositionFromJSON(
  json: any,
): GetETFsWorldComposition200ResponseEtfComposition {
  return GetETFsWorldComposition200ResponseEtfCompositionFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorldComposition200ResponseEtfCompositionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldComposition200ResponseEtfComposition {
  if (json == null) {
    return json;
  }
  return {
    majorMarketSectors:
      json["major_market_sectors"] == null
        ? undefined
        : (json["major_market_sectors"] as Array<any>).map(
            GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerFromJSON,
          ),
    countryAllocation:
      json["country_allocation"] == null
        ? undefined
        : (json["country_allocation"] as Array<any>).map(
            GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerFromJSON,
          ),
    assetAllocation:
      json["asset_allocation"] == null
        ? undefined
        : GetETFsWorld200ResponseEtfCompositionAssetAllocationFromJSON(
            json["asset_allocation"],
          ),
    topHoldings:
      json["top_holdings"] == null
        ? undefined
        : (json["top_holdings"] as Array<any>).map(
            GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerFromJSON,
          ),
    bondBreakdown:
      json["bond_breakdown"] == null
        ? undefined
        : GetETFsWorld200ResponseEtfCompositionBondBreakdownFromJSON(
            json["bond_breakdown"],
          ),
  };
}

export function GetETFsWorldComposition200ResponseEtfCompositionToJSON(
  json: any,
): GetETFsWorldComposition200ResponseEtfComposition {
  return GetETFsWorldComposition200ResponseEtfCompositionToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorldComposition200ResponseEtfCompositionToJSONTyped(
  value?: GetETFsWorldComposition200ResponseEtfComposition | null,
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
            GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerToJSON,
          ),
    country_allocation:
      value["countryAllocation"] == null
        ? undefined
        : (value["countryAllocation"] as Array<any>).map(
            GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerToJSON,
          ),
    asset_allocation:
      GetETFsWorld200ResponseEtfCompositionAssetAllocationToJSON(
        value["assetAllocation"],
      ),
    top_holdings:
      value["topHoldings"] == null
        ? undefined
        : (value["topHoldings"] as Array<any>).map(
            GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerToJSON,
          ),
    bond_breakdown: GetETFsWorld200ResponseEtfCompositionBondBreakdownToJSON(
      value["bondBreakdown"],
    ),
  };
}
