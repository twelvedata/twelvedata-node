/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Operating expense details
 * @export
 * @interface IncomeStatementBlockOperatingExpense
 */
export interface IncomeStatementBlockOperatingExpense {
  /**
   * Refers to research & development (R&D) expenses
   * @type {number}
   * @memberof IncomeStatementBlockOperatingExpense
   */
  researchAndDevelopment?: number;
  /**
   * Refers to selling, general and administrative (SG&A) expenses
   * @type {number}
   * @memberof IncomeStatementBlockOperatingExpense
   */
  sellingGeneralAndAdministrative?: number;
  /**
   * Refers to other operating expenses
   * @type {number}
   * @memberof IncomeStatementBlockOperatingExpense
   */
  otherOperatingExpenses?: number;
}

/**
 * Check if a given object implements the IncomeStatementBlockOperatingExpense interface.
 */
export function instanceOfIncomeStatementBlockOperatingExpense(
  value: object,
): value is IncomeStatementBlockOperatingExpense {
  return true;
}

export function IncomeStatementBlockOperatingExpenseFromJSON(
  json: any,
): IncomeStatementBlockOperatingExpense {
  return IncomeStatementBlockOperatingExpenseFromJSONTyped(json, false);
}

export function IncomeStatementBlockOperatingExpenseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementBlockOperatingExpense {
  if (json == null) {
    return json;
  }
  return {
    researchAndDevelopment:
      json["research_and_development"] == null
        ? undefined
        : json["research_and_development"],
    sellingGeneralAndAdministrative:
      json["selling_general_and_administrative"] == null
        ? undefined
        : json["selling_general_and_administrative"],
    otherOperatingExpenses:
      json["other_operating_expenses"] == null
        ? undefined
        : json["other_operating_expenses"],
  };
}

export function IncomeStatementBlockOperatingExpenseToJSON(
  json: any,
): IncomeStatementBlockOperatingExpense {
  return IncomeStatementBlockOperatingExpenseToJSONTyped(json, false);
}

export function IncomeStatementBlockOperatingExpenseToJSONTyped(
  value?: IncomeStatementBlockOperatingExpense | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    research_and_development: value["researchAndDevelopment"],
    selling_general_and_administrative:
      value["sellingGeneralAndAdministrative"],
    other_operating_expenses: value["otherOperatingExpenses"],
  };
}
