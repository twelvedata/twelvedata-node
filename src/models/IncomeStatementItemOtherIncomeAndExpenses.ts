/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Other income and expenses information
 * @export
 * @interface IncomeStatementItemOtherIncomeAndExpenses
 */
export interface IncomeStatementItemOtherIncomeAndExpenses {
  /**
   * Other income expense
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  otherIncomeExpense?: number;
  /**
   * Other non operating income expenses
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  otherNonOperatingIncomeExpenses?: number;
  /**
   * Special income charges
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  specialIncomeCharges?: number;
  /**
   * Gain on sale of PPE
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  gainOnSaleOfPpe?: number;
  /**
   * Gain on sale of business
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  gainOnSaleOfBusiness?: number;
  /**
   * Gain on sale of security
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  gainOnSaleOfSecurity?: number;
  /**
   * Other special charges
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  otherSpecialCharges?: number;
  /**
   * Write off
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  writeOff?: number;
  /**
   * Impairment of capital assets
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  impairmentOfCapitalAssets?: number;
  /**
   * Restructuring and merger acquisition
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  restructuringAndMergerAcquisition?: number;
  /**
   * Securities amortization
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  securitiesAmortization?: number;
  /**
   * Earnings from equity interest
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  earningsFromEquityInterest?: number;
  /**
   * Earnings from equity interest net of tax
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  earningsFromEquityInterestNetOfTax?: number;
  /**
   * Total other finance cost
   * @type {number}
   * @memberof IncomeStatementItemOtherIncomeAndExpenses
   */
  totalOtherFinanceCost?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemOtherIncomeAndExpenses interface.
 */
export function instanceOfIncomeStatementItemOtherIncomeAndExpenses(
  value: object,
): value is IncomeStatementItemOtherIncomeAndExpenses {
  return true;
}

export function IncomeStatementItemOtherIncomeAndExpensesFromJSON(
  json: any,
): IncomeStatementItemOtherIncomeAndExpenses {
  return IncomeStatementItemOtherIncomeAndExpensesFromJSONTyped(json, false);
}

export function IncomeStatementItemOtherIncomeAndExpensesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemOtherIncomeAndExpenses {
  if (json == null) {
    return json;
  }
  return {
    otherIncomeExpense:
      json["other_income_expense"] == null
        ? undefined
        : json["other_income_expense"],
    otherNonOperatingIncomeExpenses:
      json["other_non_operating_income_expenses"] == null
        ? undefined
        : json["other_non_operating_income_expenses"],
    specialIncomeCharges:
      json["special_income_charges"] == null
        ? undefined
        : json["special_income_charges"],
    gainOnSaleOfPpe:
      json["gain_on_sale_of_ppe"] == null
        ? undefined
        : json["gain_on_sale_of_ppe"],
    gainOnSaleOfBusiness:
      json["gain_on_sale_of_business"] == null
        ? undefined
        : json["gain_on_sale_of_business"],
    gainOnSaleOfSecurity:
      json["gain_on_sale_of_security"] == null
        ? undefined
        : json["gain_on_sale_of_security"],
    otherSpecialCharges:
      json["other_special_charges"] == null
        ? undefined
        : json["other_special_charges"],
    writeOff: json["write_off"] == null ? undefined : json["write_off"],
    impairmentOfCapitalAssets:
      json["impairment_of_capital_assets"] == null
        ? undefined
        : json["impairment_of_capital_assets"],
    restructuringAndMergerAcquisition:
      json["restructuring_and_merger_acquisition"] == null
        ? undefined
        : json["restructuring_and_merger_acquisition"],
    securitiesAmortization:
      json["securities_amortization"] == null
        ? undefined
        : json["securities_amortization"],
    earningsFromEquityInterest:
      json["earnings_from_equity_interest"] == null
        ? undefined
        : json["earnings_from_equity_interest"],
    earningsFromEquityInterestNetOfTax:
      json["earnings_from_equity_interest_net_of_tax"] == null
        ? undefined
        : json["earnings_from_equity_interest_net_of_tax"],
    totalOtherFinanceCost:
      json["total_other_finance_cost"] == null
        ? undefined
        : json["total_other_finance_cost"],
  };
}

export function IncomeStatementItemOtherIncomeAndExpensesToJSON(
  json: any,
): IncomeStatementItemOtherIncomeAndExpenses {
  return IncomeStatementItemOtherIncomeAndExpensesToJSONTyped(json, false);
}

export function IncomeStatementItemOtherIncomeAndExpensesToJSONTyped(
  value?: IncomeStatementItemOtherIncomeAndExpenses | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    other_income_expense: value["otherIncomeExpense"],
    other_non_operating_income_expenses:
      value["otherNonOperatingIncomeExpenses"],
    special_income_charges: value["specialIncomeCharges"],
    gain_on_sale_of_ppe: value["gainOnSaleOfPpe"],
    gain_on_sale_of_business: value["gainOnSaleOfBusiness"],
    gain_on_sale_of_security: value["gainOnSaleOfSecurity"],
    other_special_charges: value["otherSpecialCharges"],
    write_off: value["writeOff"],
    impairment_of_capital_assets: value["impairmentOfCapitalAssets"],
    restructuring_and_merger_acquisition:
      value["restructuringAndMergerAcquisition"],
    securities_amortization: value["securitiesAmortization"],
    earnings_from_equity_interest: value["earningsFromEquityInterest"],
    earnings_from_equity_interest_net_of_tax:
      value["earningsFromEquityInterestNetOfTax"],
    total_other_finance_cost: value["totalOtherFinanceCost"],
  };
}
