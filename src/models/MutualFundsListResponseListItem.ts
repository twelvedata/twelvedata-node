/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface MutualFundsListResponseListItem
 */
export interface MutualFundsListResponseListItem {
  /**
   * Fund symbol ticker
   * @type {string}
   * @memberof MutualFundsListResponseListItem
   */
  symbol: string;
  /**
   * Fund name
   * @type {string}
   * @memberof MutualFundsListResponseListItem
   */
  name: string;
  /**
   * Country of fund incorporation
   * @type {string}
   * @memberof MutualFundsListResponseListItem
   */
  country: string;
  /**
   * Investment company that manages the fund
   * @type {string}
   * @memberof MutualFundsListResponseListItem
   */
  fundFamily: string;
  /**
   * Type of fund
   * @type {string}
   * @memberof MutualFundsListResponseListItem
   */
  fundType: string;
  /**
   * Performance rating from `0` to `5`
   * @type {number}
   * @memberof MutualFundsListResponseListItem
   */
  performanceRating?: number;
  /**
   * Risk rating from `0` to `5`
   * @type {number}
   * @memberof MutualFundsListResponseListItem
   */
  riskRating?: number;
  /**
   * Currency code in which the fund is denominated
   * @type {string}
   * @memberof MutualFundsListResponseListItem
   */
  currency: string;
  /**
   * Exchange name where the fund is listed
   * @type {string}
   * @memberof MutualFundsListResponseListItem
   */
  exchange: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof MutualFundsListResponseListItem
   */
  micCode: string;
}

/**
 * Check if a given object implements the MutualFundsListResponseListItem interface.
 */
export function instanceOfMutualFundsListResponseListItem(
  value: object,
): value is MutualFundsListResponseListItem {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("country" in value) || value["country"] === undefined) return false;
  if (!("fundFamily" in value) || value["fundFamily"] === undefined)
    return false;
  if (!("fundType" in value) || value["fundType"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  return true;
}

export function MutualFundsListResponseListItemFromJSON(
  json: any,
): MutualFundsListResponseListItem {
  return MutualFundsListResponseListItemFromJSONTyped(json, false);
}

export function MutualFundsListResponseListItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MutualFundsListResponseListItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    country: json["country"],
    fundFamily: json["fund_family"],
    fundType: json["fund_type"],
    performanceRating:
      json["performance_rating"] == null
        ? undefined
        : json["performance_rating"],
    riskRating: json["risk_rating"] == null ? undefined : json["risk_rating"],
    currency: json["currency"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
  };
}

export function MutualFundsListResponseListItemToJSON(
  json: any,
): MutualFundsListResponseListItem {
  return MutualFundsListResponseListItemToJSONTyped(json, false);
}

export function MutualFundsListResponseListItemToJSONTyped(
  value?: MutualFundsListResponseListItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    country: value["country"],
    fund_family: value["fundFamily"],
    fund_type: value["fundType"],
    performance_rating: value["performanceRating"],
    risk_rating: value["riskRating"],
    currency: value["currency"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
  };
}
