/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses } from "./AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses";
import {
  AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesFromJSON,
  AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesFromJSONTyped,
  AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesToJSON,
  AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesToJSONTyped,
} from "./AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses";

/**
 * Current liabilities information
 * @export
 * @interface AssetsInfoLiabilitiesCurrentLiabilities
 */
export interface AssetsInfoLiabilitiesCurrentLiabilities {
  /**
   * Total current liabilities
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  totalCurrentLiabilities?: number;
  /**
   * Current debt and capital lease obligation
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  currentDebtAndCapitalLeaseObligation?: number;
  /**
   * Current debt
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  currentDebt?: number;
  /**
   * Current capital lease obligation
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  currentCapitalLeaseObligation?: number;
  /**
   * Other current borrowings
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  otherCurrentBorrowings?: number;
  /**
   * Line of credit
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  lineOfCredit?: number;
  /**
   * Commercial paper
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  commercialPaper?: number;
  /**
   * Current notes payable
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  currentNotesPayable?: number;
  /**
   * Current provisions
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  currentProvisions?: number;
  /**
   *
   * @type {AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  payablesAndAccruedExpenses?: AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses;
  /**
   * Pension and other post retirement benefit plans current
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  pensionAndOtherPostRetirementBenefitPlansCurrent?: number;
  /**
   * Employee benefits
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  employeeBenefits?: number;
  /**
   * Current deferred liabilities
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  currentDeferredLiabilities?: number;
  /**
   * Current deferred revenue
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  currentDeferredRevenue?: number;
  /**
   * Current deferred taxes liabilities
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  currentDeferredTaxesLiabilities?: number;
  /**
   * Other current liabilities
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  otherCurrentLiabilities?: number;
  /**
   * Liabilities held for sale non current
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilities
   */
  liabilitiesHeldForSaleNonCurrent?: number;
}

/**
 * Check if a given object implements the AssetsInfoLiabilitiesCurrentLiabilities interface.
 */
export function instanceOfAssetsInfoLiabilitiesCurrentLiabilities(
  value: object,
): value is AssetsInfoLiabilitiesCurrentLiabilities {
  return true;
}

export function AssetsInfoLiabilitiesCurrentLiabilitiesFromJSON(
  json: any,
): AssetsInfoLiabilitiesCurrentLiabilities {
  return AssetsInfoLiabilitiesCurrentLiabilitiesFromJSONTyped(json, false);
}

export function AssetsInfoLiabilitiesCurrentLiabilitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfoLiabilitiesCurrentLiabilities {
  if (json == null) {
    return json;
  }
  return {
    totalCurrentLiabilities:
      json["total_current_liabilities"] == null
        ? undefined
        : json["total_current_liabilities"],
    currentDebtAndCapitalLeaseObligation:
      json["current_debt_and_capital_lease_obligation"] == null
        ? undefined
        : json["current_debt_and_capital_lease_obligation"],
    currentDebt:
      json["current_debt"] == null ? undefined : json["current_debt"],
    currentCapitalLeaseObligation:
      json["current_capital_lease_obligation"] == null
        ? undefined
        : json["current_capital_lease_obligation"],
    otherCurrentBorrowings:
      json["other_current_borrowings"] == null
        ? undefined
        : json["other_current_borrowings"],
    lineOfCredit:
      json["line_of_credit"] == null ? undefined : json["line_of_credit"],
    commercialPaper:
      json["commercial_paper"] == null ? undefined : json["commercial_paper"],
    currentNotesPayable:
      json["current_notes_payable"] == null
        ? undefined
        : json["current_notes_payable"],
    currentProvisions:
      json["current_provisions"] == null
        ? undefined
        : json["current_provisions"],
    payablesAndAccruedExpenses:
      json["payables_and_accrued_expenses"] == null
        ? undefined
        : AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesFromJSON(
            json["payables_and_accrued_expenses"],
          ),
    pensionAndOtherPostRetirementBenefitPlansCurrent:
      json["pension_and_other_post_retirement_benefit_plans_current"] == null
        ? undefined
        : json["pension_and_other_post_retirement_benefit_plans_current"],
    employeeBenefits:
      json["employee_benefits"] == null ? undefined : json["employee_benefits"],
    currentDeferredLiabilities:
      json["current_deferred_liabilities"] == null
        ? undefined
        : json["current_deferred_liabilities"],
    currentDeferredRevenue:
      json["current_deferred_revenue"] == null
        ? undefined
        : json["current_deferred_revenue"],
    currentDeferredTaxesLiabilities:
      json["current_deferred_taxes_liabilities"] == null
        ? undefined
        : json["current_deferred_taxes_liabilities"],
    otherCurrentLiabilities:
      json["other_current_liabilities"] == null
        ? undefined
        : json["other_current_liabilities"],
    liabilitiesHeldForSaleNonCurrent:
      json["liabilities_held_for_sale_non_current"] == null
        ? undefined
        : json["liabilities_held_for_sale_non_current"],
  };
}

export function AssetsInfoLiabilitiesCurrentLiabilitiesToJSON(
  json: any,
): AssetsInfoLiabilitiesCurrentLiabilities {
  return AssetsInfoLiabilitiesCurrentLiabilitiesToJSONTyped(json, false);
}

export function AssetsInfoLiabilitiesCurrentLiabilitiesToJSONTyped(
  value?: AssetsInfoLiabilitiesCurrentLiabilities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_current_liabilities: value["totalCurrentLiabilities"],
    current_debt_and_capital_lease_obligation:
      value["currentDebtAndCapitalLeaseObligation"],
    current_debt: value["currentDebt"],
    current_capital_lease_obligation: value["currentCapitalLeaseObligation"],
    other_current_borrowings: value["otherCurrentBorrowings"],
    line_of_credit: value["lineOfCredit"],
    commercial_paper: value["commercialPaper"],
    current_notes_payable: value["currentNotesPayable"],
    current_provisions: value["currentProvisions"],
    payables_and_accrued_expenses:
      AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesToJSON(
        value["payablesAndAccruedExpenses"],
      ),
    pension_and_other_post_retirement_benefit_plans_current:
      value["pensionAndOtherPostRetirementBenefitPlansCurrent"],
    employee_benefits: value["employeeBenefits"],
    current_deferred_liabilities: value["currentDeferredLiabilities"],
    current_deferred_revenue: value["currentDeferredRevenue"],
    current_deferred_taxes_liabilities:
      value["currentDeferredTaxesLiabilities"],
    other_current_liabilities: value["otherCurrentLiabilities"],
    liabilities_held_for_sale_non_current:
      value["liabilitiesHeldForSaleNonCurrent"],
  };
}
