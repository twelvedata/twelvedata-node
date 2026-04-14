/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Expenses information
 * @export
 * @interface IncomeStatementItemExpenses
 */
export interface IncomeStatementItemExpenses {
  /**
   * Total expenses
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  totalExpenses?: number;
  /**
   * Selling general and administration expense
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  sellingGeneralAndAdministrationExpense?: number;
  /**
   * Selling and marketing expense
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  sellingAndMarketingExpense?: number;
  /**
   * General and administrative expense
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  generalAndAdministrativeExpense?: number;
  /**
   * Other general and administrative expense
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  otherGeneralAndAdministrativeExpense?: number;
  /**
   * Depreciation amortization depletion income statement
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  depreciationAmortizationDepletionIncomeStatement?: number;
  /**
   * Research and development expense
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  researchAndDevelopmentExpense?: number;
  /**
   * Insurance and claims expense
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  insuranceAndClaimsExpense?: number;
  /**
   * Rent and landing fees
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  rentAndLandingFees?: number;
  /**
   * Salaries and wages expense
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  salariesAndWagesExpense?: number;
  /**
   * Rent expense supplemental
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  rentExpenseSupplemental?: number;
  /**
   * Provision for doubtful accounts
   * @type {number}
   * @memberof IncomeStatementItemExpenses
   */
  provisionForDoubtfulAccounts?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemExpenses interface.
 */
export function instanceOfIncomeStatementItemExpenses(
  value: object,
): value is IncomeStatementItemExpenses {
  return true;
}

export function IncomeStatementItemExpensesFromJSON(
  json: any,
): IncomeStatementItemExpenses {
  return IncomeStatementItemExpensesFromJSONTyped(json, false);
}

export function IncomeStatementItemExpensesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemExpenses {
  if (json == null) {
    return json;
  }
  return {
    totalExpenses:
      json["total_expenses"] == null ? undefined : json["total_expenses"],
    sellingGeneralAndAdministrationExpense:
      json["selling_general_and_administration_expense"] == null
        ? undefined
        : json["selling_general_and_administration_expense"],
    sellingAndMarketingExpense:
      json["selling_and_marketing_expense"] == null
        ? undefined
        : json["selling_and_marketing_expense"],
    generalAndAdministrativeExpense:
      json["general_and_administrative_expense"] == null
        ? undefined
        : json["general_and_administrative_expense"],
    otherGeneralAndAdministrativeExpense:
      json["other_general_and_administrative_expense"] == null
        ? undefined
        : json["other_general_and_administrative_expense"],
    depreciationAmortizationDepletionIncomeStatement:
      json["depreciation_amortization_depletion_income_statement"] == null
        ? undefined
        : json["depreciation_amortization_depletion_income_statement"],
    researchAndDevelopmentExpense:
      json["research_and_development_expense"] == null
        ? undefined
        : json["research_and_development_expense"],
    insuranceAndClaimsExpense:
      json["insurance_and_claims_expense"] == null
        ? undefined
        : json["insurance_and_claims_expense"],
    rentAndLandingFees:
      json["rent_and_landing_fees"] == null
        ? undefined
        : json["rent_and_landing_fees"],
    salariesAndWagesExpense:
      json["salaries_and_wages_expense"] == null
        ? undefined
        : json["salaries_and_wages_expense"],
    rentExpenseSupplemental:
      json["rent_expense_supplemental"] == null
        ? undefined
        : json["rent_expense_supplemental"],
    provisionForDoubtfulAccounts:
      json["provision_for_doubtful_accounts"] == null
        ? undefined
        : json["provision_for_doubtful_accounts"],
  };
}

export function IncomeStatementItemExpensesToJSON(
  json: any,
): IncomeStatementItemExpenses {
  return IncomeStatementItemExpensesToJSONTyped(json, false);
}

export function IncomeStatementItemExpensesToJSONTyped(
  value?: IncomeStatementItemExpenses | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_expenses: value["totalExpenses"],
    selling_general_and_administration_expense:
      value["sellingGeneralAndAdministrationExpense"],
    selling_and_marketing_expense: value["sellingAndMarketingExpense"],
    general_and_administrative_expense:
      value["generalAndAdministrativeExpense"],
    other_general_and_administrative_expense:
      value["otherGeneralAndAdministrativeExpense"],
    depreciation_amortization_depletion_income_statement:
      value["depreciationAmortizationDepletionIncomeStatement"],
    research_and_development_expense: value["researchAndDevelopmentExpense"],
    insurance_and_claims_expense: value["insuranceAndClaimsExpense"],
    rent_and_landing_fees: value["rentAndLandingFees"],
    salaries_and_wages_expense: value["salariesAndWagesExpense"],
    rent_expense_supplemental: value["rentExpenseSupplemental"],
    provision_for_doubtful_accounts: value["provisionForDoubtfulAccounts"],
  };
}
