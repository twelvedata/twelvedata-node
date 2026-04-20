/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { IncomeStatementItemDividendsAndShares } from "./IncomeStatementItemDividendsAndShares";
import {
  IncomeStatementItemDividendsAndSharesFromJSON,
  IncomeStatementItemDividendsAndSharesFromJSONTyped,
  IncomeStatementItemDividendsAndSharesToJSON,
  IncomeStatementItemDividendsAndSharesToJSONTyped,
} from "./IncomeStatementItemDividendsAndShares";
import type { IncomeStatementItemDepreciationAndAmortization } from "./IncomeStatementItemDepreciationAndAmortization";
import {
  IncomeStatementItemDepreciationAndAmortizationFromJSON,
  IncomeStatementItemDepreciationAndAmortizationFromJSONTyped,
  IncomeStatementItemDepreciationAndAmortizationToJSON,
  IncomeStatementItemDepreciationAndAmortizationToJSONTyped,
} from "./IncomeStatementItemDepreciationAndAmortization";
import type { IncomeStatementItemExpenses } from "./IncomeStatementItemExpenses";
import {
  IncomeStatementItemExpensesFromJSON,
  IncomeStatementItemExpensesFromJSONTyped,
  IncomeStatementItemExpensesToJSON,
  IncomeStatementItemExpensesToJSONTyped,
} from "./IncomeStatementItemExpenses";
import type { IncomeStatementItemGrossProfit } from "./IncomeStatementItemGrossProfit";
import {
  IncomeStatementItemGrossProfitFromJSON,
  IncomeStatementItemGrossProfitFromJSONTyped,
  IncomeStatementItemGrossProfitToJSON,
  IncomeStatementItemGrossProfitToJSONTyped,
} from "./IncomeStatementItemGrossProfit";
import type { IncomeStatementItemDepreciation } from "./IncomeStatementItemDepreciation";
import {
  IncomeStatementItemDepreciationFromJSON,
  IncomeStatementItemDepreciationFromJSONTyped,
  IncomeStatementItemDepreciationToJSON,
  IncomeStatementItemDepreciationToJSONTyped,
} from "./IncomeStatementItemDepreciation";
import type { IncomeStatementItemOperatingIncome } from "./IncomeStatementItemOperatingIncome";
import {
  IncomeStatementItemOperatingIncomeFromJSON,
  IncomeStatementItemOperatingIncomeFromJSONTyped,
  IncomeStatementItemOperatingIncomeToJSON,
  IncomeStatementItemOperatingIncomeToJSONTyped,
} from "./IncomeStatementItemOperatingIncome";
import type { IncomeStatementItemEbitda } from "./IncomeStatementItemEbitda";
import {
  IncomeStatementItemEbitdaFromJSON,
  IncomeStatementItemEbitdaFromJSONTyped,
  IncomeStatementItemEbitdaToJSON,
  IncomeStatementItemEbitdaToJSONTyped,
} from "./IncomeStatementItemEbitda";
import type { IncomeStatementItemEarningsPerShare } from "./IncomeStatementItemEarningsPerShare";
import {
  IncomeStatementItemEarningsPerShareFromJSON,
  IncomeStatementItemEarningsPerShareFromJSONTyped,
  IncomeStatementItemEarningsPerShareToJSON,
  IncomeStatementItemEarningsPerShareToJSONTyped,
} from "./IncomeStatementItemEarningsPerShare";
import type { IncomeStatementItemNetIncome } from "./IncomeStatementItemNetIncome";
import {
  IncomeStatementItemNetIncomeFromJSON,
  IncomeStatementItemNetIncomeFromJSONTyped,
  IncomeStatementItemNetIncomeToJSON,
  IncomeStatementItemNetIncomeToJSONTyped,
} from "./IncomeStatementItemNetIncome";
import type { IncomeStatementItemRevenue } from "./IncomeStatementItemRevenue";
import {
  IncomeStatementItemRevenueFromJSON,
  IncomeStatementItemRevenueFromJSONTyped,
  IncomeStatementItemRevenueToJSON,
  IncomeStatementItemRevenueToJSONTyped,
} from "./IncomeStatementItemRevenue";
import type { IncomeStatementItemSpecialIncomeCharges } from "./IncomeStatementItemSpecialIncomeCharges";
import {
  IncomeStatementItemSpecialIncomeChargesFromJSON,
  IncomeStatementItemSpecialIncomeChargesFromJSONTyped,
  IncomeStatementItemSpecialIncomeChargesToJSON,
  IncomeStatementItemSpecialIncomeChargesToJSONTyped,
} from "./IncomeStatementItemSpecialIncomeCharges";
import type { IncomeStatementItemOtherIncomeAndExpenses } from "./IncomeStatementItemOtherIncomeAndExpenses";
import {
  IncomeStatementItemOtherIncomeAndExpensesFromJSON,
  IncomeStatementItemOtherIncomeAndExpensesFromJSONTyped,
  IncomeStatementItemOtherIncomeAndExpensesToJSON,
  IncomeStatementItemOtherIncomeAndExpensesToJSONTyped,
} from "./IncomeStatementItemOtherIncomeAndExpenses";
import type { IncomeStatementItemUnusualItems } from "./IncomeStatementItemUnusualItems";
import {
  IncomeStatementItemUnusualItemsFromJSON,
  IncomeStatementItemUnusualItemsFromJSONTyped,
  IncomeStatementItemUnusualItemsToJSON,
  IncomeStatementItemUnusualItemsToJSONTyped,
} from "./IncomeStatementItemUnusualItems";
import type { IncomeStatementItemPretaxIncome } from "./IncomeStatementItemPretaxIncome";
import {
  IncomeStatementItemPretaxIncomeFromJSON,
  IncomeStatementItemPretaxIncomeFromJSONTyped,
  IncomeStatementItemPretaxIncomeToJSON,
  IncomeStatementItemPretaxIncomeToJSONTyped,
} from "./IncomeStatementItemPretaxIncome";
import type { IncomeStatementItemTaxes } from "./IncomeStatementItemTaxes";
import {
  IncomeStatementItemTaxesFromJSON,
  IncomeStatementItemTaxesFromJSONTyped,
  IncomeStatementItemTaxesToJSON,
  IncomeStatementItemTaxesToJSONTyped,
} from "./IncomeStatementItemTaxes";
import type { IncomeStatementItemInterestIncomeAndExpense } from "./IncomeStatementItemInterestIncomeAndExpense";
import {
  IncomeStatementItemInterestIncomeAndExpenseFromJSON,
  IncomeStatementItemInterestIncomeAndExpenseFromJSONTyped,
  IncomeStatementItemInterestIncomeAndExpenseToJSON,
  IncomeStatementItemInterestIncomeAndExpenseToJSONTyped,
} from "./IncomeStatementItemInterestIncomeAndExpense";

/**
 * IncomeStatementItem represents a single income statement record
 * @export
 * @interface IncomeStatementItem
 */
export interface IncomeStatementItem {
  /**
   * Date of fiscal period ending
   * @type {string}
   * @memberof IncomeStatementItem
   */
  fiscalDate?: string;
  /**
   * Fiscal year
   * @type {number}
   * @memberof IncomeStatementItem
   */
  year?: number;
  /**
   *
   * @type {IncomeStatementItemRevenue}
   * @memberof IncomeStatementItem
   */
  revenue?: IncomeStatementItemRevenue;
  /**
   *
   * @type {IncomeStatementItemGrossProfit}
   * @memberof IncomeStatementItem
   */
  grossProfit?: IncomeStatementItemGrossProfit;
  /**
   *
   * @type {IncomeStatementItemOperatingIncome}
   * @memberof IncomeStatementItem
   */
  operatingIncome?: IncomeStatementItemOperatingIncome;
  /**
   *
   * @type {IncomeStatementItemNetIncome}
   * @memberof IncomeStatementItem
   */
  netIncome?: IncomeStatementItemNetIncome;
  /**
   *
   * @type {IncomeStatementItemEarningsPerShare}
   * @memberof IncomeStatementItem
   */
  earningsPerShare?: IncomeStatementItemEarningsPerShare;
  /**
   *
   * @type {IncomeStatementItemExpenses}
   * @memberof IncomeStatementItem
   */
  expenses?: IncomeStatementItemExpenses;
  /**
   *
   * @type {IncomeStatementItemInterestIncomeAndExpense}
   * @memberof IncomeStatementItem
   */
  interestIncomeAndExpense?: IncomeStatementItemInterestIncomeAndExpense;
  /**
   *
   * @type {IncomeStatementItemOtherIncomeAndExpenses}
   * @memberof IncomeStatementItem
   */
  otherIncomeAndExpenses?: IncomeStatementItemOtherIncomeAndExpenses;
  /**
   *
   * @type {IncomeStatementItemTaxes}
   * @memberof IncomeStatementItem
   */
  taxes?: IncomeStatementItemTaxes;
  /**
   *
   * @type {IncomeStatementItemDepreciationAndAmortization}
   * @memberof IncomeStatementItem
   */
  depreciationAndAmortization?: IncomeStatementItemDepreciationAndAmortization;
  /**
   *
   * @type {IncomeStatementItemEbitda}
   * @memberof IncomeStatementItem
   */
  ebitda?: IncomeStatementItemEbitda;
  /**
   *
   * @type {IncomeStatementItemDividendsAndShares}
   * @memberof IncomeStatementItem
   */
  dividendsAndShares?: IncomeStatementItemDividendsAndShares;
  /**
   *
   * @type {IncomeStatementItemUnusualItems}
   * @memberof IncomeStatementItem
   */
  unusualItems?: IncomeStatementItemUnusualItems;
  /**
   *
   * @type {IncomeStatementItemDepreciation}
   * @memberof IncomeStatementItem
   */
  depreciation?: IncomeStatementItemDepreciation;
  /**
   *
   * @type {IncomeStatementItemPretaxIncome}
   * @memberof IncomeStatementItem
   */
  pretaxIncome?: IncomeStatementItemPretaxIncome;
  /**
   *
   * @type {IncomeStatementItemSpecialIncomeCharges}
   * @memberof IncomeStatementItem
   */
  specialIncomeCharges?: IncomeStatementItemSpecialIncomeCharges;
}

/**
 * Check if a given object implements the IncomeStatementItem interface.
 */
export function instanceOfIncomeStatementItem(
  value: object,
): value is IncomeStatementItem {
  return true;
}

export function IncomeStatementItemFromJSON(json: any): IncomeStatementItem {
  return IncomeStatementItemFromJSONTyped(json, false);
}

export function IncomeStatementItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItem {
  if (json == null) {
    return json;
  }
  return {
    fiscalDate: json["fiscal_date"] == null ? undefined : json["fiscal_date"],
    year: json["year"] == null ? undefined : json["year"],
    revenue:
      json["revenue"] == null
        ? undefined
        : IncomeStatementItemRevenueFromJSON(json["revenue"]),
    grossProfit:
      json["gross_profit"] == null
        ? undefined
        : IncomeStatementItemGrossProfitFromJSON(json["gross_profit"]),
    operatingIncome:
      json["operating_income"] == null
        ? undefined
        : IncomeStatementItemOperatingIncomeFromJSON(json["operating_income"]),
    netIncome:
      json["net_income"] == null
        ? undefined
        : IncomeStatementItemNetIncomeFromJSON(json["net_income"]),
    earningsPerShare:
      json["earnings_per_share"] == null
        ? undefined
        : IncomeStatementItemEarningsPerShareFromJSON(
            json["earnings_per_share"],
          ),
    expenses:
      json["expenses"] == null
        ? undefined
        : IncomeStatementItemExpensesFromJSON(json["expenses"]),
    interestIncomeAndExpense:
      json["interest_income_and_expense"] == null
        ? undefined
        : IncomeStatementItemInterestIncomeAndExpenseFromJSON(
            json["interest_income_and_expense"],
          ),
    otherIncomeAndExpenses:
      json["other_income_and_expenses"] == null
        ? undefined
        : IncomeStatementItemOtherIncomeAndExpensesFromJSON(
            json["other_income_and_expenses"],
          ),
    taxes:
      json["taxes"] == null
        ? undefined
        : IncomeStatementItemTaxesFromJSON(json["taxes"]),
    depreciationAndAmortization:
      json["depreciation_and_amortization"] == null
        ? undefined
        : IncomeStatementItemDepreciationAndAmortizationFromJSON(
            json["depreciation_and_amortization"],
          ),
    ebitda:
      json["ebitda"] == null
        ? undefined
        : IncomeStatementItemEbitdaFromJSON(json["ebitda"]),
    dividendsAndShares:
      json["dividends_and_shares"] == null
        ? undefined
        : IncomeStatementItemDividendsAndSharesFromJSON(
            json["dividends_and_shares"],
          ),
    unusualItems:
      json["unusual_items"] == null
        ? undefined
        : IncomeStatementItemUnusualItemsFromJSON(json["unusual_items"]),
    depreciation:
      json["depreciation"] == null
        ? undefined
        : IncomeStatementItemDepreciationFromJSON(json["depreciation"]),
    pretaxIncome:
      json["pretax_income"] == null
        ? undefined
        : IncomeStatementItemPretaxIncomeFromJSON(json["pretax_income"]),
    specialIncomeCharges:
      json["special_income_charges"] == null
        ? undefined
        : IncomeStatementItemSpecialIncomeChargesFromJSON(
            json["special_income_charges"],
          ),
  };
}

export function IncomeStatementItemToJSON(json: any): IncomeStatementItem {
  return IncomeStatementItemToJSONTyped(json, false);
}

export function IncomeStatementItemToJSONTyped(
  value?: IncomeStatementItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    fiscal_date: value["fiscalDate"],
    year: value["year"],
    revenue: IncomeStatementItemRevenueToJSON(value["revenue"]),
    gross_profit: IncomeStatementItemGrossProfitToJSON(value["grossProfit"]),
    operating_income: IncomeStatementItemOperatingIncomeToJSON(
      value["operatingIncome"],
    ),
    net_income: IncomeStatementItemNetIncomeToJSON(value["netIncome"]),
    earnings_per_share: IncomeStatementItemEarningsPerShareToJSON(
      value["earningsPerShare"],
    ),
    expenses: IncomeStatementItemExpensesToJSON(value["expenses"]),
    interest_income_and_expense:
      IncomeStatementItemInterestIncomeAndExpenseToJSON(
        value["interestIncomeAndExpense"],
      ),
    other_income_and_expenses: IncomeStatementItemOtherIncomeAndExpensesToJSON(
      value["otherIncomeAndExpenses"],
    ),
    taxes: IncomeStatementItemTaxesToJSON(value["taxes"]),
    depreciation_and_amortization:
      IncomeStatementItemDepreciationAndAmortizationToJSON(
        value["depreciationAndAmortization"],
      ),
    ebitda: IncomeStatementItemEbitdaToJSON(value["ebitda"]),
    dividends_and_shares: IncomeStatementItemDividendsAndSharesToJSON(
      value["dividendsAndShares"],
    ),
    unusual_items: IncomeStatementItemUnusualItemsToJSON(value["unusualItems"]),
    depreciation: IncomeStatementItemDepreciationToJSON(value["depreciation"]),
    pretax_income: IncomeStatementItemPretaxIncomeToJSON(value["pretaxIncome"]),
    special_income_charges: IncomeStatementItemSpecialIncomeChargesToJSON(
      value["specialIncomeCharges"],
    ),
  };
}
