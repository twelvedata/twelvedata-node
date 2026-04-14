/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Non-current assets section
 * @export
 * @interface GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets {
  /**
   * Represents property owned
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  properties?: number;
  /**
   * Represents land and improvements owned
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  landAndImprovements?: number;
  /**
   * Represents office equipment, furniture, and vehicles owned
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  machineryFurnitureEquipment?: number;
  /**
   * Represents the cost of construction work, which is not yet completed
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  constructionInProgress?: number;
  /**
   * Represents operating and financial leases
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  leases?: number;
  /**
   * Represents the cumulative depreciation of an asset that has been recorded
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  accumulatedDepreciation?: number;
  /**
   * Represents the value of a brand name, solid customer base, good customer relations, good employee relations, and proprietary technology
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  goodwill?: number;
  /**
   * Represents real estate property purchased with the intention of earning a return on the investment
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  investmentProperties?: number;
  /**
   * Represents liquid asset that gets its value from a contractual right or ownership claim
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  financialAssets?: number;
  /**
   * Represents the patents, trademarks, and other intellectual properties
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  intangibleAssets?: number;
  /**
   * Represents available for sale financial securities
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  investmentsAndAdvances?: number;
  /**
   * Represents other long-term assets
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  otherNonCurrentAssets?: number;
  /**
   * All long-term assets values in total
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets
   */
  totalNonCurrentAssets?: number;
}

/**
 * Check if a given object implements the GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets interface.
 */
export function instanceOfGetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets(
  value: object,
): value is GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets {
  return true;
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsFromJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets {
  return GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsFromJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets {
  if (json == null) {
    return json;
  }
  return {
    properties: json["properties"] == null ? undefined : json["properties"],
    landAndImprovements:
      json["land_and_improvements"] == null
        ? undefined
        : json["land_and_improvements"],
    machineryFurnitureEquipment:
      json["machinery_furniture_equipment"] == null
        ? undefined
        : json["machinery_furniture_equipment"],
    constructionInProgress:
      json["construction_in_progress"] == null
        ? undefined
        : json["construction_in_progress"],
    leases: json["leases"] == null ? undefined : json["leases"],
    accumulatedDepreciation:
      json["accumulated_depreciation"] == null
        ? undefined
        : json["accumulated_depreciation"],
    goodwill: json["goodwill"] == null ? undefined : json["goodwill"],
    investmentProperties:
      json["investment_properties"] == null
        ? undefined
        : json["investment_properties"],
    financialAssets:
      json["financial_assets"] == null ? undefined : json["financial_assets"],
    intangibleAssets:
      json["intangible_assets"] == null ? undefined : json["intangible_assets"],
    investmentsAndAdvances:
      json["investments_and_advances"] == null
        ? undefined
        : json["investments_and_advances"],
    otherNonCurrentAssets:
      json["other_non_current_assets"] == null
        ? undefined
        : json["other_non_current_assets"],
    totalNonCurrentAssets:
      json["total_non_current_assets"] == null
        ? undefined
        : json["total_non_current_assets"],
  };
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsToJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets {
  return GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsToJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsToJSONTyped(
  value?: GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    properties: value["properties"],
    land_and_improvements: value["landAndImprovements"],
    machinery_furniture_equipment: value["machineryFurnitureEquipment"],
    construction_in_progress: value["constructionInProgress"],
    leases: value["leases"],
    accumulated_depreciation: value["accumulatedDepreciation"],
    goodwill: value["goodwill"],
    investment_properties: value["investmentProperties"],
    financial_assets: value["financialAssets"],
    intangible_assets: value["intangibleAssets"],
    investments_and_advances: value["investmentsAndAdvances"],
    other_non_current_assets: value["otherNonCurrentAssets"],
    total_non_current_assets: value["totalNonCurrentAssets"],
  };
}
