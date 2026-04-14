/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Cash flow information
 * @export
 * @interface GetStatistics200ResponseStatisticsFinancialsCashFlow
 */
export interface GetStatistics200ResponseStatisticsFinancialsCashFlow {
  /**
   * Refers to operating cash flow measure over the last 12 months
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsCashFlow
   */
  operatingCashFlowTtm?: number;
  /**
   * Refers to levered free cash flow measure over the last 12 months
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsCashFlow
   */
  leveredFreeCashFlowTtm?: number;
}

/**
 * Check if a given object implements the GetStatistics200ResponseStatisticsFinancialsCashFlow interface.
 */
export function instanceOfGetStatistics200ResponseStatisticsFinancialsCashFlow(
  value: object,
): value is GetStatistics200ResponseStatisticsFinancialsCashFlow {
  return true;
}

export function GetStatistics200ResponseStatisticsFinancialsCashFlowFromJSON(
  json: any,
): GetStatistics200ResponseStatisticsFinancialsCashFlow {
  return GetStatistics200ResponseStatisticsFinancialsCashFlowFromJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsFinancialsCashFlowFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200ResponseStatisticsFinancialsCashFlow {
  if (json == null) {
    return json;
  }
  return {
    operatingCashFlowTtm:
      json["operating_cash_flow_ttm"] == null
        ? undefined
        : json["operating_cash_flow_ttm"],
    leveredFreeCashFlowTtm:
      json["levered_free_cash_flow_ttm"] == null
        ? undefined
        : json["levered_free_cash_flow_ttm"],
  };
}

export function GetStatistics200ResponseStatisticsFinancialsCashFlowToJSON(
  json: any,
): GetStatistics200ResponseStatisticsFinancialsCashFlow {
  return GetStatistics200ResponseStatisticsFinancialsCashFlowToJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsFinancialsCashFlowToJSONTyped(
  value?: GetStatistics200ResponseStatisticsFinancialsCashFlow | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    operating_cash_flow_ttm: value["operatingCashFlowTtm"],
    levered_free_cash_flow_ttm: value["leveredFreeCashFlowTtm"],
  };
}
