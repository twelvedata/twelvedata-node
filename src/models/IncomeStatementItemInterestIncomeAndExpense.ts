/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Interest income and expense information
 * @export
 * @interface IncomeStatementItemInterestIncomeAndExpense
 */
export interface IncomeStatementItemInterestIncomeAndExpense {
  /**
   * Interest income
   * @type {number}
   * @memberof IncomeStatementItemInterestIncomeAndExpense
   */
  interestIncome?: number;
  /**
   * Interest expense
   * @type {number}
   * @memberof IncomeStatementItemInterestIncomeAndExpense
   */
  interestExpense?: number;
  /**
   * Net interest income
   * @type {number}
   * @memberof IncomeStatementItemInterestIncomeAndExpense
   */
  netInterestIncome?: number;
  /**
   * Net non operating interest income expense
   * @type {number}
   * @memberof IncomeStatementItemInterestIncomeAndExpense
   */
  netNonOperatingInterestIncomeExpense?: number;
  /**
   * Interest expense non operating
   * @type {number}
   * @memberof IncomeStatementItemInterestIncomeAndExpense
   */
  interestExpenseNonOperating?: number;
  /**
   * Interest income non operating
   * @type {number}
   * @memberof IncomeStatementItemInterestIncomeAndExpense
   */
  interestIncomeNonOperating?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemInterestIncomeAndExpense interface.
 */
export function instanceOfIncomeStatementItemInterestIncomeAndExpense(
  value: object,
): value is IncomeStatementItemInterestIncomeAndExpense {
  return true;
}

export function IncomeStatementItemInterestIncomeAndExpenseFromJSON(
  json: any,
): IncomeStatementItemInterestIncomeAndExpense {
  return IncomeStatementItemInterestIncomeAndExpenseFromJSONTyped(json, false);
}

export function IncomeStatementItemInterestIncomeAndExpenseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemInterestIncomeAndExpense {
  if (json == null) {
    return json;
  }
  return {
    interestIncome:
      json["interest_income"] == null ? undefined : json["interest_income"],
    interestExpense:
      json["interest_expense"] == null ? undefined : json["interest_expense"],
    netInterestIncome:
      json["net_interest_income"] == null
        ? undefined
        : json["net_interest_income"],
    netNonOperatingInterestIncomeExpense:
      json["net_non_operating_interest_income_expense"] == null
        ? undefined
        : json["net_non_operating_interest_income_expense"],
    interestExpenseNonOperating:
      json["interest_expense_non_operating"] == null
        ? undefined
        : json["interest_expense_non_operating"],
    interestIncomeNonOperating:
      json["interest_income_non_operating"] == null
        ? undefined
        : json["interest_income_non_operating"],
  };
}

export function IncomeStatementItemInterestIncomeAndExpenseToJSON(
  json: any,
): IncomeStatementItemInterestIncomeAndExpense {
  return IncomeStatementItemInterestIncomeAndExpenseToJSONTyped(json, false);
}

export function IncomeStatementItemInterestIncomeAndExpenseToJSONTyped(
  value?: IncomeStatementItemInterestIncomeAndExpense | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    interest_income: value["interestIncome"],
    interest_expense: value["interestExpense"],
    net_interest_income: value["netInterestIncome"],
    net_non_operating_interest_income_expense:
      value["netNonOperatingInterestIncomeExpense"],
    interest_expense_non_operating: value["interestExpenseNonOperating"],
    interest_income_non_operating: value["interestIncomeNonOperating"],
  };
}
