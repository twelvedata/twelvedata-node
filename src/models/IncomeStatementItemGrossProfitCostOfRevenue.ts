/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Cost of revenue information
 * @export
 * @interface IncomeStatementItemGrossProfitCostOfRevenue
 */
export interface IncomeStatementItemGrossProfitCostOfRevenue {
  /**
   * Cost of revenue value
   * @type {number}
   * @memberof IncomeStatementItemGrossProfitCostOfRevenue
   */
  costOfRevenueValue?: number;
  /**
   * Excise taxes
   * @type {number}
   * @memberof IncomeStatementItemGrossProfitCostOfRevenue
   */
  exciseTaxes?: number;
  /**
   * Reconciled cost of revenue
   * @type {number}
   * @memberof IncomeStatementItemGrossProfitCostOfRevenue
   */
  reconciledCostOfRevenue?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemGrossProfitCostOfRevenue interface.
 */
export function instanceOfIncomeStatementItemGrossProfitCostOfRevenue(
  value: object,
): value is IncomeStatementItemGrossProfitCostOfRevenue {
  return true;
}

export function IncomeStatementItemGrossProfitCostOfRevenueFromJSON(
  json: any,
): IncomeStatementItemGrossProfitCostOfRevenue {
  return IncomeStatementItemGrossProfitCostOfRevenueFromJSONTyped(json, false);
}

export function IncomeStatementItemGrossProfitCostOfRevenueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemGrossProfitCostOfRevenue {
  if (json == null) {
    return json;
  }
  return {
    costOfRevenueValue:
      json["cost_of_revenue_value"] == null
        ? undefined
        : json["cost_of_revenue_value"],
    exciseTaxes:
      json["excise_taxes"] == null ? undefined : json["excise_taxes"],
    reconciledCostOfRevenue:
      json["reconciled_cost_of_revenue"] == null
        ? undefined
        : json["reconciled_cost_of_revenue"],
  };
}

export function IncomeStatementItemGrossProfitCostOfRevenueToJSON(
  json: any,
): IncomeStatementItemGrossProfitCostOfRevenue {
  return IncomeStatementItemGrossProfitCostOfRevenueToJSONTyped(json, false);
}

export function IncomeStatementItemGrossProfitCostOfRevenueToJSONTyped(
  value?: IncomeStatementItemGrossProfitCostOfRevenue | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    cost_of_revenue_value: value["costOfRevenueValue"],
    excise_taxes: value["exciseTaxes"],
    reconciled_cost_of_revenue: value["reconciledCostOfRevenue"],
  };
}
