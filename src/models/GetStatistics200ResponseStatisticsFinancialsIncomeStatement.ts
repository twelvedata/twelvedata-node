/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Income statement information
 * @export
 * @interface GetStatistics200ResponseStatisticsFinancialsIncomeStatement
 */
export interface GetStatistics200ResponseStatisticsFinancialsIncomeStatement {
  /**
   * Refers to total revenue over the last 12 months
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsIncomeStatement
   */
  revenueTtm?: number;
  /**
   * Refers to revenue per share over the last 12 months
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsIncomeStatement
   */
  revenuePerShareTtm?: number;
  /**
   * Refers to quarterly revenue growth year over year
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsIncomeStatement
   */
  quarterlyRevenueGrowth?: number;
  /**
   * Refers to gross profit over the last 12 months
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsIncomeStatement
   */
  grossProfitTtm?: number;
  /**
   * Refers to EBITDA (earnings before interest, taxes, depreciation, and amortization) measure; EBITDA is not calculated for banks
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsIncomeStatement
   */
  ebitda?: number;
  /**
   * Refers to net income applicable to common shares over the last 12 months
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsIncomeStatement
   */
  netIncomeToCommonTtm?: number;
  /**
   * Refers to diluted EPS measure over the last 12 months
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsIncomeStatement
   */
  dilutedEpsTtm?: number;
  /**
   * Refers to quarterly earnings growth year over year
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsIncomeStatement
   */
  quarterlyEarningsGrowthYoy?: number;
}

/**
 * Check if a given object implements the GetStatistics200ResponseStatisticsFinancialsIncomeStatement interface.
 */
export function instanceOfGetStatistics200ResponseStatisticsFinancialsIncomeStatement(
  value: object,
): value is GetStatistics200ResponseStatisticsFinancialsIncomeStatement {
  return true;
}

export function GetStatistics200ResponseStatisticsFinancialsIncomeStatementFromJSON(
  json: any,
): GetStatistics200ResponseStatisticsFinancialsIncomeStatement {
  return GetStatistics200ResponseStatisticsFinancialsIncomeStatementFromJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsFinancialsIncomeStatementFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200ResponseStatisticsFinancialsIncomeStatement {
  if (json == null) {
    return json;
  }
  return {
    revenueTtm: json["revenue_ttm"] == null ? undefined : json["revenue_ttm"],
    revenuePerShareTtm:
      json["revenue_per_share_ttm"] == null
        ? undefined
        : json["revenue_per_share_ttm"],
    quarterlyRevenueGrowth:
      json["quarterly_revenue_growth"] == null
        ? undefined
        : json["quarterly_revenue_growth"],
    grossProfitTtm:
      json["gross_profit_ttm"] == null ? undefined : json["gross_profit_ttm"],
    ebitda: json["ebitda"] == null ? undefined : json["ebitda"],
    netIncomeToCommonTtm:
      json["net_income_to_common_ttm"] == null
        ? undefined
        : json["net_income_to_common_ttm"],
    dilutedEpsTtm:
      json["diluted_eps_ttm"] == null ? undefined : json["diluted_eps_ttm"],
    quarterlyEarningsGrowthYoy:
      json["quarterly_earnings_growth_yoy"] == null
        ? undefined
        : json["quarterly_earnings_growth_yoy"],
  };
}

export function GetStatistics200ResponseStatisticsFinancialsIncomeStatementToJSON(
  json: any,
): GetStatistics200ResponseStatisticsFinancialsIncomeStatement {
  return GetStatistics200ResponseStatisticsFinancialsIncomeStatementToJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsFinancialsIncomeStatementToJSONTyped(
  value?: GetStatistics200ResponseStatisticsFinancialsIncomeStatement | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    revenue_ttm: value["revenueTtm"],
    revenue_per_share_ttm: value["revenuePerShareTtm"],
    quarterly_revenue_growth: value["quarterlyRevenueGrowth"],
    gross_profit_ttm: value["grossProfitTtm"],
    ebitda: value["ebitda"],
    net_income_to_common_ttm: value["netIncomeToCommonTtm"],
    diluted_eps_ttm: value["dilutedEpsTtm"],
    quarterly_earnings_growth_yoy: value["quarterlyEarningsGrowthYoy"],
  };
}
