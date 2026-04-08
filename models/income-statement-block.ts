/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementBlockNonOperatingInterest } from "./income-statement-block-non-operating-interest";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementBlockOperatingExpense } from "./income-statement-block-operating-expense";

export interface IncomeStatementBlock {
  /**
   * Date of the income statement release
   */
  fiscal_date?: string;
  /**
   * Fiscal quarter. Visible when `&period=quarterly`
   */
  quarter?: number;
  /**
   * Fiscal year
   */
  year?: number;
  /**
   * Refers to total reported revenue
   */
  sales?: number;
  /**
   * Refers to cost of revenue
   */
  cost_of_goods?: number;
  /**
   * Refers to net gross profit: `sales` - `cost_of_goods`
   */
  gross_profit?: number;
  operating_expense?: IncomeStatementBlockOperatingExpense;
  /**
   * Refers to net operating income: `gross_profit` - `research_and_development` - `selling_general_and_administrative`
   */
  operating_income?: number;
  non_operating_interest?: IncomeStatementBlockNonOperatingInterest;
  /**
   * Refers to other incomes or expenses
   */
  other_income_expense?: number;
  /**
   * Refers to earnings before tax: `operating_income` + `net_non_operating_interest` - `other_income_expense`
   */
  pretax_income?: number;
  /**
   * Refers to a tax provision
   */
  income_tax?: number;
  /**
   * Refers to net income: `pretax_income` - `income_tax`
   */
  net_income?: number;
  /**
   * Refers to earnings per share (EPS)
   */
  eps_basic?: number;
  /**
   * Refers to diluted earnings per share (EPS)
   */
  eps_diluted?: number;
  /**
   * Refers for the shares outstanding held by all its shareholders
   */
  basic_shares_outstanding?: number;
  /**
   * Refers to the total number of shares a company would have if all dilutive securities were exercised and converted into shares
   */
  diluted_shares_outstanding?: number;
  /**
   * Refers to earnings before interest and taxes (EBIT) measure
   */
  ebit?: number;
  /**
   * Refers to EBITDA (earnings before interest, taxes, depreciation, and amortization) measure
   */
  ebitda?: number;
  /**
   * Refers to the after-tax earnings that a business has generated from its operational activities
   */
  net_income_continuous_operations?: number;
  /**
   * Refers to amount of minority interests paid out
   */
  minority_interests?: number;
  /**
   * Refers to dividend that is allocated to and paid on a company\'s preferred shares
   */
  preferred_stock_dividends?: number;
}
