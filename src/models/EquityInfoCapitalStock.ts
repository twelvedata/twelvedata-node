/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Capital stock information
 * @export
 * @interface EquityInfoCapitalStock
 */
export interface EquityInfoCapitalStock {
  /**
   * Common stock
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  commonStock?: number;
  /**
   * Preferred stock
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  preferredStock?: number;
  /**
   * Total partnership capital
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  totalPartnershipCapital?: number;
  /**
   * General partnership capital
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  generalPartnershipCapital?: number;
  /**
   * Limited partnership capital
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  limitedPartnershipCapital?: number;
  /**
   * Capital stock
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  capitalStock?: number;
  /**
   * Other capital stock
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  otherCapitalStock?: number;
  /**
   * Additional paid in capital
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  additionalPaidInCapital?: number;
  /**
   * Retained earnings
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  retainedEarnings?: number;
  /**
   * Treasury stock
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  treasuryStock?: number;
  /**
   * Treasury shares number
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  treasurySharesNumber?: number;
  /**
   * Ordinary shares number
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  ordinarySharesNumber?: number;
  /**
   * Preferred shares number
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  preferredSharesNumber?: number;
  /**
   * Share issued
   * @type {number}
   * @memberof EquityInfoCapitalStock
   */
  shareIssued?: number;
}

/**
 * Check if a given object implements the EquityInfoCapitalStock interface.
 */
export function instanceOfEquityInfoCapitalStock(
  value: object,
): value is EquityInfoCapitalStock {
  return true;
}

export function EquityInfoCapitalStockFromJSON(
  json: any,
): EquityInfoCapitalStock {
  return EquityInfoCapitalStockFromJSONTyped(json, false);
}

export function EquityInfoCapitalStockFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EquityInfoCapitalStock {
  if (json == null) {
    return json;
  }
  return {
    commonStock:
      json["common_stock"] == null ? undefined : json["common_stock"],
    preferredStock:
      json["preferred_stock"] == null ? undefined : json["preferred_stock"],
    totalPartnershipCapital:
      json["total_partnership_capital"] == null
        ? undefined
        : json["total_partnership_capital"],
    generalPartnershipCapital:
      json["general_partnership_capital"] == null
        ? undefined
        : json["general_partnership_capital"],
    limitedPartnershipCapital:
      json["limited_partnership_capital"] == null
        ? undefined
        : json["limited_partnership_capital"],
    capitalStock:
      json["capital_stock"] == null ? undefined : json["capital_stock"],
    otherCapitalStock:
      json["other_capital_stock"] == null
        ? undefined
        : json["other_capital_stock"],
    additionalPaidInCapital:
      json["additional_paid_in_capital"] == null
        ? undefined
        : json["additional_paid_in_capital"],
    retainedEarnings:
      json["retained_earnings"] == null ? undefined : json["retained_earnings"],
    treasuryStock:
      json["treasury_stock"] == null ? undefined : json["treasury_stock"],
    treasurySharesNumber:
      json["treasury_shares_number"] == null
        ? undefined
        : json["treasury_shares_number"],
    ordinarySharesNumber:
      json["ordinary_shares_number"] == null
        ? undefined
        : json["ordinary_shares_number"],
    preferredSharesNumber:
      json["preferred_shares_number"] == null
        ? undefined
        : json["preferred_shares_number"],
    shareIssued:
      json["share_issued"] == null ? undefined : json["share_issued"],
  };
}

export function EquityInfoCapitalStockToJSON(
  json: any,
): EquityInfoCapitalStock {
  return EquityInfoCapitalStockToJSONTyped(json, false);
}

export function EquityInfoCapitalStockToJSONTyped(
  value?: EquityInfoCapitalStock | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    common_stock: value["commonStock"],
    preferred_stock: value["preferredStock"],
    total_partnership_capital: value["totalPartnershipCapital"],
    general_partnership_capital: value["generalPartnershipCapital"],
    limited_partnership_capital: value["limitedPartnershipCapital"],
    capital_stock: value["capitalStock"],
    other_capital_stock: value["otherCapitalStock"],
    additional_paid_in_capital: value["additionalPaidInCapital"],
    retained_earnings: value["retainedEarnings"],
    treasury_stock: value["treasuryStock"],
    treasury_shares_number: value["treasurySharesNumber"],
    ordinary_shares_number: value["ordinarySharesNumber"],
    preferred_shares_number: value["preferredSharesNumber"],
    share_issued: value["shareIssued"],
  };
}
