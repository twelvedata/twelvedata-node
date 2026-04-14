/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { EquityInfoEquityAdjustments } from "./EquityInfoEquityAdjustments";
import {
  EquityInfoEquityAdjustmentsFromJSON,
  EquityInfoEquityAdjustmentsFromJSONTyped,
  EquityInfoEquityAdjustmentsToJSON,
  EquityInfoEquityAdjustmentsToJSONTyped,
} from "./EquityInfoEquityAdjustments";
import type { EquityInfoCapitalStock } from "./EquityInfoCapitalStock";
import {
  EquityInfoCapitalStockFromJSON,
  EquityInfoCapitalStockFromJSONTyped,
  EquityInfoCapitalStockToJSON,
  EquityInfoCapitalStockToJSONTyped,
} from "./EquityInfoCapitalStock";

/**
 * EquityInfo represents equity information
 * @export
 * @interface EquityInfo
 */
export interface EquityInfo {
  /**
   * Total equity gross minority interest
   * @type {number}
   * @memberof EquityInfo
   */
  totalEquityGrossMinorityInterest?: number;
  /**
   * Stockholders equity
   * @type {number}
   * @memberof EquityInfo
   */
  stockholdersEquity?: number;
  /**
   * Common stock equity
   * @type {number}
   * @memberof EquityInfo
   */
  commonStockEquity?: number;
  /**
   * Preferred stock equity
   * @type {number}
   * @memberof EquityInfo
   */
  preferredStockEquity?: number;
  /**
   * Other equity interest
   * @type {number}
   * @memberof EquityInfo
   */
  otherEquityInterest?: number;
  /**
   * Minority interest
   * @type {number}
   * @memberof EquityInfo
   */
  minorityInterest?: number;
  /**
   * Total capitalization
   * @type {number}
   * @memberof EquityInfo
   */
  totalCapitalization?: number;
  /**
   * Net tangible assets
   * @type {number}
   * @memberof EquityInfo
   */
  netTangibleAssets?: number;
  /**
   * Tangible book value
   * @type {number}
   * @memberof EquityInfo
   */
  tangibleBookValue?: number;
  /**
   * Invested capital
   * @type {number}
   * @memberof EquityInfo
   */
  investedCapital?: number;
  /**
   * Working capital
   * @type {number}
   * @memberof EquityInfo
   */
  workingCapital?: number;
  /**
   *
   * @type {EquityInfoCapitalStock}
   * @memberof EquityInfo
   */
  capitalStock?: EquityInfoCapitalStock;
  /**
   *
   * @type {EquityInfoEquityAdjustments}
   * @memberof EquityInfo
   */
  equityAdjustments?: EquityInfoEquityAdjustments;
  /**
   * Net debt
   * @type {number}
   * @memberof EquityInfo
   */
  netDebt?: number;
  /**
   * Total debt
   * @type {number}
   * @memberof EquityInfo
   */
  totalDebt?: number;
}

/**
 * Check if a given object implements the EquityInfo interface.
 */
export function instanceOfEquityInfo(value: object): value is EquityInfo {
  return true;
}

export function EquityInfoFromJSON(json: any): EquityInfo {
  return EquityInfoFromJSONTyped(json, false);
}

export function EquityInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EquityInfo {
  if (json == null) {
    return json;
  }
  return {
    totalEquityGrossMinorityInterest:
      json["total_equity_gross_minority_interest"] == null
        ? undefined
        : json["total_equity_gross_minority_interest"],
    stockholdersEquity:
      json["stockholders_equity"] == null
        ? undefined
        : json["stockholders_equity"],
    commonStockEquity:
      json["common_stock_equity"] == null
        ? undefined
        : json["common_stock_equity"],
    preferredStockEquity:
      json["preferred_stock_equity"] == null
        ? undefined
        : json["preferred_stock_equity"],
    otherEquityInterest:
      json["other_equity_interest"] == null
        ? undefined
        : json["other_equity_interest"],
    minorityInterest:
      json["minority_interest"] == null ? undefined : json["minority_interest"],
    totalCapitalization:
      json["total_capitalization"] == null
        ? undefined
        : json["total_capitalization"],
    netTangibleAssets:
      json["net_tangible_assets"] == null
        ? undefined
        : json["net_tangible_assets"],
    tangibleBookValue:
      json["tangible_book_value"] == null
        ? undefined
        : json["tangible_book_value"],
    investedCapital:
      json["invested_capital"] == null ? undefined : json["invested_capital"],
    workingCapital:
      json["working_capital"] == null ? undefined : json["working_capital"],
    capitalStock:
      json["capital_stock"] == null
        ? undefined
        : EquityInfoCapitalStockFromJSON(json["capital_stock"]),
    equityAdjustments:
      json["equity_adjustments"] == null
        ? undefined
        : EquityInfoEquityAdjustmentsFromJSON(json["equity_adjustments"]),
    netDebt: json["net_debt"] == null ? undefined : json["net_debt"],
    totalDebt: json["total_debt"] == null ? undefined : json["total_debt"],
  };
}

export function EquityInfoToJSON(json: any): EquityInfo {
  return EquityInfoToJSONTyped(json, false);
}

export function EquityInfoToJSONTyped(
  value?: EquityInfo | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_equity_gross_minority_interest:
      value["totalEquityGrossMinorityInterest"],
    stockholders_equity: value["stockholdersEquity"],
    common_stock_equity: value["commonStockEquity"],
    preferred_stock_equity: value["preferredStockEquity"],
    other_equity_interest: value["otherEquityInterest"],
    minority_interest: value["minorityInterest"],
    total_capitalization: value["totalCapitalization"],
    net_tangible_assets: value["netTangibleAssets"],
    tangible_book_value: value["tangibleBookValue"],
    invested_capital: value["investedCapital"],
    working_capital: value["workingCapital"],
    capital_stock: EquityInfoCapitalStockToJSON(value["capitalStock"]),
    equity_adjustments: EquityInfoEquityAdjustmentsToJSON(
      value["equityAdjustments"],
    ),
    net_debt: value["netDebt"],
    total_debt: value["totalDebt"],
  };
}
