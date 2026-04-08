/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemDepreciation } from "./income-statement-item-depreciation";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemDepreciationAndAmortization } from "./income-statement-item-depreciation-and-amortization";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemDividendsAndShares } from "./income-statement-item-dividends-and-shares";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemEarningsPerShare } from "./income-statement-item-earnings-per-share";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemEbitda } from "./income-statement-item-ebitda";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemExpenses } from "./income-statement-item-expenses";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemGrossProfit } from "./income-statement-item-gross-profit";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemInterestIncomeAndExpense } from "./income-statement-item-interest-income-and-expense";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemNetIncome } from "./income-statement-item-net-income";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemOperatingIncome } from "./income-statement-item-operating-income";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemOtherIncomeAndExpenses } from "./income-statement-item-other-income-and-expenses";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemPretaxIncome } from "./income-statement-item-pretax-income";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemRevenue } from "./income-statement-item-revenue";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemSpecialIncomeCharges } from "./income-statement-item-special-income-charges";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemTaxes } from "./income-statement-item-taxes";
// May contain unused imports in some cases
// @ts-ignore
import type { IncomeStatementItemUnusualItems } from "./income-statement-item-unusual-items";

/**
 * IncomeStatementItem represents a single income statement record
 */
export interface IncomeStatementItem {
  /**
   * Date of the income statement release
   */
  fiscal_date?: string;
  /**
   * Fiscal year
   */
  year?: number;
  revenue?: IncomeStatementItemRevenue;
  gross_profit?: IncomeStatementItemGrossProfit;
  operating_income?: IncomeStatementItemOperatingIncome;
  net_income?: IncomeStatementItemNetIncome;
  earnings_per_share?: IncomeStatementItemEarningsPerShare;
  expenses?: IncomeStatementItemExpenses;
  interest_income_and_expense?: IncomeStatementItemInterestIncomeAndExpense;
  other_income_and_expenses?: IncomeStatementItemOtherIncomeAndExpenses;
  taxes?: IncomeStatementItemTaxes;
  depreciation_and_amortization?: IncomeStatementItemDepreciationAndAmortization;
  ebitda?: IncomeStatementItemEbitda;
  dividends_and_shares?: IncomeStatementItemDividendsAndShares;
  unusual_items?: IncomeStatementItemUnusualItems;
  depreciation?: IncomeStatementItemDepreciation;
  pretax_income?: IncomeStatementItemPretaxIncome;
  special_income_charges?: IncomeStatementItemSpecialIncomeCharges;
}
