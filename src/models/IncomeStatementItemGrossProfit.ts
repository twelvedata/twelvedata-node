/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { IncomeStatementItemGrossProfitCostOfRevenue } from "./IncomeStatementItemGrossProfitCostOfRevenue";
import {
  IncomeStatementItemGrossProfitCostOfRevenueFromJSON,
  IncomeStatementItemGrossProfitCostOfRevenueFromJSONTyped,
  IncomeStatementItemGrossProfitCostOfRevenueToJSON,
  IncomeStatementItemGrossProfitCostOfRevenueToJSONTyped,
} from "./IncomeStatementItemGrossProfitCostOfRevenue";

/**
 * Gross profit information
 * @export
 * @interface IncomeStatementItemGrossProfit
 */
export interface IncomeStatementItemGrossProfit {
  /**
   * Gross profit value
   * @type {number}
   * @memberof IncomeStatementItemGrossProfit
   */
  grossProfitValue?: number;
  /**
   *
   * @type {IncomeStatementItemGrossProfitCostOfRevenue}
   * @memberof IncomeStatementItemGrossProfit
   */
  costOfRevenue?: IncomeStatementItemGrossProfitCostOfRevenue;
}

/**
 * Check if a given object implements the IncomeStatementItemGrossProfit interface.
 */
export function instanceOfIncomeStatementItemGrossProfit(
  value: object,
): value is IncomeStatementItemGrossProfit {
  return true;
}

export function IncomeStatementItemGrossProfitFromJSON(
  json: any,
): IncomeStatementItemGrossProfit {
  return IncomeStatementItemGrossProfitFromJSONTyped(json, false);
}

export function IncomeStatementItemGrossProfitFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemGrossProfit {
  if (json == null) {
    return json;
  }
  return {
    grossProfitValue:
      json["gross_profit_value"] == null
        ? undefined
        : json["gross_profit_value"],
    costOfRevenue:
      json["cost_of_revenue"] == null
        ? undefined
        : IncomeStatementItemGrossProfitCostOfRevenueFromJSON(
            json["cost_of_revenue"],
          ),
  };
}

export function IncomeStatementItemGrossProfitToJSON(
  json: any,
): IncomeStatementItemGrossProfit {
  return IncomeStatementItemGrossProfitToJSONTyped(json, false);
}

export function IncomeStatementItemGrossProfitToJSONTyped(
  value?: IncomeStatementItemGrossProfit | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    gross_profit_value: value["grossProfitValue"],
    cost_of_revenue: IncomeStatementItemGrossProfitCostOfRevenueToJSON(
      value["costOfRevenue"],
    ),
  };
}
