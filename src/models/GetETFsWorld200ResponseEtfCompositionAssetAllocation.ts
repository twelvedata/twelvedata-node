/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Asset allocation of a fund by different asset classes and their respective weights
 * @export
 * @interface GetETFsWorld200ResponseEtfCompositionAssetAllocation
 */
export interface GetETFsWorld200ResponseEtfCompositionAssetAllocation {
  /**
   * Percentage of overall portfolio composition in cash
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionAssetAllocation
   */
  cash?: number;
  /**
   * Percentage of overall portfolio composition in stocks
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionAssetAllocation
   */
  stocks?: number;
  /**
   * Percentage of overall portfolio composition in preferred stocks
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionAssetAllocation
   */
  preferredStocks?: number;
  /**
   * Percentage of overall portfolio composition in convertable securities
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionAssetAllocation
   */
  convertables?: number;
  /**
   * Percentage of overall portfolio composition in bond
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionAssetAllocation
   */
  bonds?: number;
  /**
   * Percentage of overall portfolio composition in other forms of holding
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionAssetAllocation
   */
  others?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfCompositionAssetAllocation interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfCompositionAssetAllocation(
  value: object,
): value is GetETFsWorld200ResponseEtfCompositionAssetAllocation {
  return true;
}

export function GetETFsWorld200ResponseEtfCompositionAssetAllocationFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionAssetAllocation {
  return GetETFsWorld200ResponseEtfCompositionAssetAllocationFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionAssetAllocationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfCompositionAssetAllocation {
  if (json == null) {
    return json;
  }
  return {
    cash: json["cash"] == null ? undefined : json["cash"],
    stocks: json["stocks"] == null ? undefined : json["stocks"],
    preferredStocks:
      json["preferred_stocks"] == null ? undefined : json["preferred_stocks"],
    convertables:
      json["convertables"] == null ? undefined : json["convertables"],
    bonds: json["bonds"] == null ? undefined : json["bonds"],
    others: json["others"] == null ? undefined : json["others"],
  };
}

export function GetETFsWorld200ResponseEtfCompositionAssetAllocationToJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionAssetAllocation {
  return GetETFsWorld200ResponseEtfCompositionAssetAllocationToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionAssetAllocationToJSONTyped(
  value?: GetETFsWorld200ResponseEtfCompositionAssetAllocation | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    cash: value["cash"],
    stocks: value["stocks"],
    preferred_stocks: value["preferredStocks"],
    convertables: value["convertables"],
    bonds: value["bonds"],
    others: value["others"],
  };
}
