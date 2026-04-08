/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetStatistics200ResponseStatisticsFinancialsBalanceSheet } from "./get-statistics200-response-statistics-financials-balance-sheet";
// May contain unused imports in some cases
// @ts-ignore
import type { GetStatistics200ResponseStatisticsFinancialsCashFlow } from "./get-statistics200-response-statistics-financials-cash-flow";
// May contain unused imports in some cases
// @ts-ignore
import type { GetStatistics200ResponseStatisticsFinancialsIncomeStatement } from "./get-statistics200-response-statistics-financials-income-statement";

/**
 * Financial information of the company
 */
export interface GetStatistics200ResponseStatisticsFinancials {
  /**
   * Refers to the completion of the last 12-month accounting period
   */
  fiscal_year_ends?: string;
  /**
   * The most recent quarter (MRQ) refers to the fiscal quarter that most recently ended
   */
  most_recent_quarter?: string;
  /**
   * The portion of a company\'s revenue left over after direct costs are subtracted
   */
  gross_margin?: number;
  /**
   * Refers to gross profit margin. Calculated by dividing net income by sales revenue
   */
  profit_margin?: number;
  /**
   * Operating margin is calculated by dividing operating income by net sales
   */
  operating_margin?: number;
  /**
   * Return on assets (ROA) is calculated by dividing net income by total assets
   */
  return_on_assets_ttm?: number;
  /**
   * Return on equity (ROE) is calculated by dividing net income by average shareholders\' equity
   */
  return_on_equity_ttm?: number;
  income_statement?: GetStatistics200ResponseStatisticsFinancialsIncomeStatement;
  balance_sheet?: GetStatistics200ResponseStatisticsFinancialsBalanceSheet;
  cash_flow?: GetStatistics200ResponseStatisticsFinancialsCashFlow;
}
