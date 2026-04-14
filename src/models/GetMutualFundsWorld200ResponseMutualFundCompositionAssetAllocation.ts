/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Asset allocation of the fund by different asset classes and their respective weights
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation
 */
export interface GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation {
  /**
   * Percentage of overall portfolio composition in cash
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation
   */
  cash?: number;
  /**
   * Percentage of overall portfolio composition in stocks
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation
   */
  stocks?: number;
  /**
   * Percentage of overall portfolio composition in preferred stocks
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation
   */
  preferredStocks?: number;
  /**
   * Percentage of overall portfolio composition in convertable securities
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation
   */
  convertables?: number;
  /**
   * Percentage of overall portfolio composition in bond
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation
   */
  bonds?: number;
  /**
   * Percentage of overall portfolio composition in other forms of holding
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation
   */
  others?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation {
  return GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation {
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

export function GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation {
  return GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocationToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation | null,
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
