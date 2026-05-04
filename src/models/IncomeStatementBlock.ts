/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { IncomeStatementBlockOperatingExpense } from "./IncomeStatementBlockOperatingExpense";
import {
  IncomeStatementBlockOperatingExpenseFromJSON,
  IncomeStatementBlockOperatingExpenseFromJSONTyped,
  IncomeStatementBlockOperatingExpenseToJSON,
  IncomeStatementBlockOperatingExpenseToJSONTyped,
} from "./IncomeStatementBlockOperatingExpense";
import type { IncomeStatementBlockNonOperatingInterest } from "./IncomeStatementBlockNonOperatingInterest";
import {
  IncomeStatementBlockNonOperatingInterestFromJSON,
  IncomeStatementBlockNonOperatingInterestFromJSONTyped,
  IncomeStatementBlockNonOperatingInterestToJSON,
  IncomeStatementBlockNonOperatingInterestToJSONTyped,
} from "./IncomeStatementBlockNonOperatingInterest";

/**
 *
 * @export
 * @interface IncomeStatementBlock
 */
export interface IncomeStatementBlock {
  /**
   * Date of fiscal period ending
   * @type {string}
   * @memberof IncomeStatementBlock
   */
  fiscalDate: string;
  /**
   * Fiscal quarter. Visible when `&period=quarterly`
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  quarter?: number;
  /**
   * Fiscal year
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  year?: number;
  /**
   * Refers to total reported revenue
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  sales?: number;
  /**
   * Refers to cost of revenue
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  costOfGoods?: number;
  /**
   * Refers to net gross profit: `sales` - `cost_of_goods`
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  grossProfit?: number;
  /**
   *
   * @type {IncomeStatementBlockOperatingExpense}
   * @memberof IncomeStatementBlock
   */
  operatingExpense?: IncomeStatementBlockOperatingExpense;
  /**
   * Refers to net operating income: `gross_profit` - `research_and_development` - `selling_general_and_administrative`
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  operatingIncome?: number;
  /**
   *
   * @type {IncomeStatementBlockNonOperatingInterest}
   * @memberof IncomeStatementBlock
   */
  nonOperatingInterest?: IncomeStatementBlockNonOperatingInterest;
  /**
   * Refers to other incomes or expenses
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  otherIncomeExpense?: number;
  /**
   * Refers to earnings before tax: `operating_income` + `net_non_operating_interest` - `other_income_expense`
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  pretaxIncome?: number;
  /**
   * Refers to a tax provision
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  incomeTax?: number;
  /**
   * Refers to net income: `pretax_income` - `income_tax`
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  netIncome?: number;
  /**
   * Refers to earnings per share (EPS)
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  epsBasic?: number;
  /**
   * Refers to diluted earnings per share (EPS)
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  epsDiluted?: number;
  /**
   * Refers for the shares outstanding held by all its shareholders
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  basicSharesOutstanding?: number;
  /**
   * Refers to the total number of shares a company would have if all dilutive securities were exercised and converted into shares
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  dilutedSharesOutstanding?: number;
  /**
   * Refers to earnings before interest and taxes (EBIT) measure
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  ebit?: number;
  /**
   * Refers to EBITDA (earnings before interest, taxes, depreciation, and amortization) measure
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  ebitda?: number;
  /**
   * Refers to the after-tax earnings that a business has generated from its operational activities
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  netIncomeContinuousOperations?: number;
  /**
   * Refers to amount of minority interests paid out
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  minorityInterests?: number;
  /**
   * Refers to dividend that is allocated to and paid on a company's preferred shares
   * @type {number}
   * @memberof IncomeStatementBlock
   */
  preferredStockDividends?: number;
}

/**
 * Check if a given object implements the IncomeStatementBlock interface.
 */
export function instanceOfIncomeStatementBlock(
  value: object,
): value is IncomeStatementBlock {
  if (!("fiscalDate" in value) || value["fiscalDate"] === undefined)
    return false;
  return true;
}

export function IncomeStatementBlockFromJSON(json: any): IncomeStatementBlock {
  return IncomeStatementBlockFromJSONTyped(json, false);
}

export function IncomeStatementBlockFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementBlock {
  if (json == null) {
    return json;
  }
  return {
    fiscalDate: json["fiscal_date"],
    quarter: json["quarter"] == null ? undefined : json["quarter"],
    year: json["year"] == null ? undefined : json["year"],
    sales: json["sales"] == null ? undefined : json["sales"],
    costOfGoods:
      json["cost_of_goods"] == null ? undefined : json["cost_of_goods"],
    grossProfit:
      json["gross_profit"] == null ? undefined : json["gross_profit"],
    operatingExpense:
      json["operating_expense"] == null
        ? undefined
        : IncomeStatementBlockOperatingExpenseFromJSON(
            json["operating_expense"],
          ),
    operatingIncome:
      json["operating_income"] == null ? undefined : json["operating_income"],
    nonOperatingInterest:
      json["non_operating_interest"] == null
        ? undefined
        : IncomeStatementBlockNonOperatingInterestFromJSON(
            json["non_operating_interest"],
          ),
    otherIncomeExpense:
      json["other_income_expense"] == null
        ? undefined
        : json["other_income_expense"],
    pretaxIncome:
      json["pretax_income"] == null ? undefined : json["pretax_income"],
    incomeTax: json["income_tax"] == null ? undefined : json["income_tax"],
    netIncome: json["net_income"] == null ? undefined : json["net_income"],
    epsBasic: json["eps_basic"] == null ? undefined : json["eps_basic"],
    epsDiluted: json["eps_diluted"] == null ? undefined : json["eps_diluted"],
    basicSharesOutstanding:
      json["basic_shares_outstanding"] == null
        ? undefined
        : json["basic_shares_outstanding"],
    dilutedSharesOutstanding:
      json["diluted_shares_outstanding"] == null
        ? undefined
        : json["diluted_shares_outstanding"],
    ebit: json["ebit"] == null ? undefined : json["ebit"],
    ebitda: json["ebitda"] == null ? undefined : json["ebitda"],
    netIncomeContinuousOperations:
      json["net_income_continuous_operations"] == null
        ? undefined
        : json["net_income_continuous_operations"],
    minorityInterests:
      json["minority_interests"] == null
        ? undefined
        : json["minority_interests"],
    preferredStockDividends:
      json["preferred_stock_dividends"] == null
        ? undefined
        : json["preferred_stock_dividends"],
  };
}

export function IncomeStatementBlockToJSON(json: any): IncomeStatementBlock {
  return IncomeStatementBlockToJSONTyped(json, false);
}

export function IncomeStatementBlockToJSONTyped(
  value?: IncomeStatementBlock | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    fiscal_date: value["fiscalDate"],
    quarter: value["quarter"],
    year: value["year"],
    sales: value["sales"],
    cost_of_goods: value["costOfGoods"],
    gross_profit: value["grossProfit"],
    operating_expense: IncomeStatementBlockOperatingExpenseToJSON(
      value["operatingExpense"],
    ),
    operating_income: value["operatingIncome"],
    non_operating_interest: IncomeStatementBlockNonOperatingInterestToJSON(
      value["nonOperatingInterest"],
    ),
    other_income_expense: value["otherIncomeExpense"],
    pretax_income: value["pretaxIncome"],
    income_tax: value["incomeTax"],
    net_income: value["netIncome"],
    eps_basic: value["epsBasic"],
    eps_diluted: value["epsDiluted"],
    basic_shares_outstanding: value["basicSharesOutstanding"],
    diluted_shares_outstanding: value["dilutedSharesOutstanding"],
    ebit: value["ebit"],
    ebitda: value["ebitda"],
    net_income_continuous_operations: value["netIncomeContinuousOperations"],
    minority_interests: value["minorityInterests"],
    preferred_stock_dividends: value["preferredStockDividends"],
  };
}
