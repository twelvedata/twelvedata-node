/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Operating income information
 * @export
 * @interface IncomeStatementItemOperatingIncome
 */
export interface IncomeStatementItemOperatingIncome {
  /**
   * Operating income value
   * @type {number}
   * @memberof IncomeStatementItemOperatingIncome
   */
  operatingIncomeValue?: number;
  /**
   * Total operating income as reported
   * @type {number}
   * @memberof IncomeStatementItemOperatingIncome
   */
  totalOperatingIncomeAsReported?: number;
  /**
   * Operating expense
   * @type {number}
   * @memberof IncomeStatementItemOperatingIncome
   */
  operatingExpense?: number;
  /**
   * Other operating expenses
   * @type {number}
   * @memberof IncomeStatementItemOperatingIncome
   */
  otherOperatingExpenses?: number;
  /**
   * Total expenses
   * @type {number}
   * @memberof IncomeStatementItemOperatingIncome
   */
  totalExpenses?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemOperatingIncome interface.
 */
export function instanceOfIncomeStatementItemOperatingIncome(
  value: object,
): value is IncomeStatementItemOperatingIncome {
  return true;
}

export function IncomeStatementItemOperatingIncomeFromJSON(
  json: any,
): IncomeStatementItemOperatingIncome {
  return IncomeStatementItemOperatingIncomeFromJSONTyped(json, false);
}

export function IncomeStatementItemOperatingIncomeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemOperatingIncome {
  if (json == null) {
    return json;
  }
  return {
    operatingIncomeValue:
      json["operating_income_value"] == null
        ? undefined
        : json["operating_income_value"],
    totalOperatingIncomeAsReported:
      json["total_operating_income_as_reported"] == null
        ? undefined
        : json["total_operating_income_as_reported"],
    operatingExpense:
      json["operating_expense"] == null ? undefined : json["operating_expense"],
    otherOperatingExpenses:
      json["other_operating_expenses"] == null
        ? undefined
        : json["other_operating_expenses"],
    totalExpenses:
      json["total_expenses"] == null ? undefined : json["total_expenses"],
  };
}

export function IncomeStatementItemOperatingIncomeToJSON(
  json: any,
): IncomeStatementItemOperatingIncome {
  return IncomeStatementItemOperatingIncomeToJSONTyped(json, false);
}

export function IncomeStatementItemOperatingIncomeToJSONTyped(
  value?: IncomeStatementItemOperatingIncome | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    operating_income_value: value["operatingIncomeValue"],
    total_operating_income_as_reported: value["totalOperatingIncomeAsReported"],
    operating_expense: value["operatingExpense"],
    other_operating_expenses: value["otherOperatingExpenses"],
    total_expenses: value["totalExpenses"],
  };
}
