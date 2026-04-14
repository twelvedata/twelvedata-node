/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Revenue information
 * @export
 * @interface IncomeStatementItemRevenue
 */
export interface IncomeStatementItemRevenue {
  /**
   * Total revenue
   * @type {number}
   * @memberof IncomeStatementItemRevenue
   */
  totalRevenue?: number;
  /**
   * Operating revenue
   * @type {number}
   * @memberof IncomeStatementItemRevenue
   */
  operatingRevenue?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemRevenue interface.
 */
export function instanceOfIncomeStatementItemRevenue(
  value: object,
): value is IncomeStatementItemRevenue {
  return true;
}

export function IncomeStatementItemRevenueFromJSON(
  json: any,
): IncomeStatementItemRevenue {
  return IncomeStatementItemRevenueFromJSONTyped(json, false);
}

export function IncomeStatementItemRevenueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemRevenue {
  if (json == null) {
    return json;
  }
  return {
    totalRevenue:
      json["total_revenue"] == null ? undefined : json["total_revenue"],
    operatingRevenue:
      json["operating_revenue"] == null ? undefined : json["operating_revenue"],
  };
}

export function IncomeStatementItemRevenueToJSON(
  json: any,
): IncomeStatementItemRevenue {
  return IncomeStatementItemRevenueToJSONTyped(json, false);
}

export function IncomeStatementItemRevenueToJSONTyped(
  value?: IncomeStatementItemRevenue | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_revenue: value["totalRevenue"],
    operating_revenue: value["operatingRevenue"],
  };
}
