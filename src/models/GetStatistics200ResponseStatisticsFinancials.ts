/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetStatistics200ResponseStatisticsFinancialsIncomeStatement } from "./GetStatistics200ResponseStatisticsFinancialsIncomeStatement";
import {
  GetStatistics200ResponseStatisticsFinancialsIncomeStatementFromJSON,
  GetStatistics200ResponseStatisticsFinancialsIncomeStatementFromJSONTyped,
  GetStatistics200ResponseStatisticsFinancialsIncomeStatementToJSON,
  GetStatistics200ResponseStatisticsFinancialsIncomeStatementToJSONTyped,
} from "./GetStatistics200ResponseStatisticsFinancialsIncomeStatement";
import type { GetStatistics200ResponseStatisticsFinancialsBalanceSheet } from "./GetStatistics200ResponseStatisticsFinancialsBalanceSheet";
import {
  GetStatistics200ResponseStatisticsFinancialsBalanceSheetFromJSON,
  GetStatistics200ResponseStatisticsFinancialsBalanceSheetFromJSONTyped,
  GetStatistics200ResponseStatisticsFinancialsBalanceSheetToJSON,
  GetStatistics200ResponseStatisticsFinancialsBalanceSheetToJSONTyped,
} from "./GetStatistics200ResponseStatisticsFinancialsBalanceSheet";
import type { GetStatistics200ResponseStatisticsFinancialsCashFlow } from "./GetStatistics200ResponseStatisticsFinancialsCashFlow";
import {
  GetStatistics200ResponseStatisticsFinancialsCashFlowFromJSON,
  GetStatistics200ResponseStatisticsFinancialsCashFlowFromJSONTyped,
  GetStatistics200ResponseStatisticsFinancialsCashFlowToJSON,
  GetStatistics200ResponseStatisticsFinancialsCashFlowToJSONTyped,
} from "./GetStatistics200ResponseStatisticsFinancialsCashFlow";

/**
 * Financial information of the company
 * @export
 * @interface GetStatistics200ResponseStatisticsFinancials
 */
export interface GetStatistics200ResponseStatisticsFinancials {
  /**
   * Refers to the completion of the last 12-month accounting period
   * @type {string}
   * @memberof GetStatistics200ResponseStatisticsFinancials
   */
  fiscalYearEnds?: string;
  /**
   * The most recent quarter (MRQ) refers to the fiscal quarter that most recently ended
   * @type {string}
   * @memberof GetStatistics200ResponseStatisticsFinancials
   */
  mostRecentQuarter?: string;
  /**
   * The portion of a company's revenue left over after direct costs are subtracted
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancials
   */
  grossMargin?: number;
  /**
   * Refers to gross profit margin. Calculated by dividing net income by sales revenue
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancials
   */
  profitMargin?: number;
  /**
   * Operating margin is calculated by dividing operating income by net sales
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancials
   */
  operatingMargin?: number;
  /**
   * Return on assets (ROA) is calculated by dividing net income by total assets
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancials
   */
  returnOnAssetsTtm?: number;
  /**
   * Return on equity (ROE) is calculated by dividing net income by average shareholders' equity
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancials
   */
  returnOnEquityTtm?: number;
  /**
   *
   * @type {GetStatistics200ResponseStatisticsFinancialsIncomeStatement}
   * @memberof GetStatistics200ResponseStatisticsFinancials
   */
  incomeStatement?: GetStatistics200ResponseStatisticsFinancialsIncomeStatement;
  /**
   *
   * @type {GetStatistics200ResponseStatisticsFinancialsBalanceSheet}
   * @memberof GetStatistics200ResponseStatisticsFinancials
   */
  balanceSheet?: GetStatistics200ResponseStatisticsFinancialsBalanceSheet;
  /**
   *
   * @type {GetStatistics200ResponseStatisticsFinancialsCashFlow}
   * @memberof GetStatistics200ResponseStatisticsFinancials
   */
  cashFlow?: GetStatistics200ResponseStatisticsFinancialsCashFlow;
}

/**
 * Check if a given object implements the GetStatistics200ResponseStatisticsFinancials interface.
 */
export function instanceOfGetStatistics200ResponseStatisticsFinancials(
  value: object,
): value is GetStatistics200ResponseStatisticsFinancials {
  return true;
}

export function GetStatistics200ResponseStatisticsFinancialsFromJSON(
  json: any,
): GetStatistics200ResponseStatisticsFinancials {
  return GetStatistics200ResponseStatisticsFinancialsFromJSONTyped(json, false);
}

export function GetStatistics200ResponseStatisticsFinancialsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200ResponseStatisticsFinancials {
  if (json == null) {
    return json;
  }
  return {
    fiscalYearEnds:
      json["fiscal_year_ends"] == null ? undefined : json["fiscal_year_ends"],
    mostRecentQuarter:
      json["most_recent_quarter"] == null
        ? undefined
        : json["most_recent_quarter"],
    grossMargin:
      json["gross_margin"] == null ? undefined : json["gross_margin"],
    profitMargin:
      json["profit_margin"] == null ? undefined : json["profit_margin"],
    operatingMargin:
      json["operating_margin"] == null ? undefined : json["operating_margin"],
    returnOnAssetsTtm:
      json["return_on_assets_ttm"] == null
        ? undefined
        : json["return_on_assets_ttm"],
    returnOnEquityTtm:
      json["return_on_equity_ttm"] == null
        ? undefined
        : json["return_on_equity_ttm"],
    incomeStatement:
      json["income_statement"] == null
        ? undefined
        : GetStatistics200ResponseStatisticsFinancialsIncomeStatementFromJSON(
            json["income_statement"],
          ),
    balanceSheet:
      json["balance_sheet"] == null
        ? undefined
        : GetStatistics200ResponseStatisticsFinancialsBalanceSheetFromJSON(
            json["balance_sheet"],
          ),
    cashFlow:
      json["cash_flow"] == null
        ? undefined
        : GetStatistics200ResponseStatisticsFinancialsCashFlowFromJSON(
            json["cash_flow"],
          ),
  };
}

export function GetStatistics200ResponseStatisticsFinancialsToJSON(
  json: any,
): GetStatistics200ResponseStatisticsFinancials {
  return GetStatistics200ResponseStatisticsFinancialsToJSONTyped(json, false);
}

export function GetStatistics200ResponseStatisticsFinancialsToJSONTyped(
  value?: GetStatistics200ResponseStatisticsFinancials | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    fiscal_year_ends: value["fiscalYearEnds"],
    most_recent_quarter: value["mostRecentQuarter"],
    gross_margin: value["grossMargin"],
    profit_margin: value["profitMargin"],
    operating_margin: value["operatingMargin"],
    return_on_assets_ttm: value["returnOnAssetsTtm"],
    return_on_equity_ttm: value["returnOnEquityTtm"],
    income_statement:
      GetStatistics200ResponseStatisticsFinancialsIncomeStatementToJSON(
        value["incomeStatement"],
      ),
    balance_sheet:
      GetStatistics200ResponseStatisticsFinancialsBalanceSheetToJSON(
        value["balanceSheet"],
      ),
    cash_flow: GetStatistics200ResponseStatisticsFinancialsCashFlowToJSON(
      value["cashFlow"],
    ),
  };
}
