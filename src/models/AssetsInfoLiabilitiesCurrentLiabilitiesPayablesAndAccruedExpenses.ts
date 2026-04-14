/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Payables and accrued expenses information
 * @export
 * @interface AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
 */
export interface AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses {
  /**
   * Total payables and accrued expenses
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
   */
  totalPayablesAndAccruedExpenses?: number;
  /**
   * Accounts payable
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
   */
  accountsPayable?: number;
  /**
   * Current accrued expenses
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
   */
  currentAccruedExpenses?: number;
  /**
   * Interest payable
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
   */
  interestPayable?: number;
  /**
   * Payables
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
   */
  payables?: number;
  /**
   * Other payable
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
   */
  otherPayable?: number;
  /**
   * Due to related parties current
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
   */
  dueToRelatedPartiesCurrent?: number;
  /**
   * Dividends payable
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
   */
  dividendsPayable?: number;
  /**
   * Total tax payable
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
   */
  totalTaxPayable?: number;
  /**
   * Income tax payable
   * @type {number}
   * @memberof AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses
   */
  incomeTaxPayable?: number;
}

/**
 * Check if a given object implements the AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses interface.
 */
export function instanceOfAssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses(
  value: object,
): value is AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses {
  return true;
}

export function AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesFromJSON(
  json: any,
): AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses {
  return AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesFromJSONTyped(
    json,
    false,
  );
}

export function AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses {
  if (json == null) {
    return json;
  }
  return {
    totalPayablesAndAccruedExpenses:
      json["total_payables_and_accrued_expenses"] == null
        ? undefined
        : json["total_payables_and_accrued_expenses"],
    accountsPayable:
      json["accounts_payable"] == null ? undefined : json["accounts_payable"],
    currentAccruedExpenses:
      json["current_accrued_expenses"] == null
        ? undefined
        : json["current_accrued_expenses"],
    interestPayable:
      json["interest_payable"] == null ? undefined : json["interest_payable"],
    payables: json["payables"] == null ? undefined : json["payables"],
    otherPayable:
      json["other_payable"] == null ? undefined : json["other_payable"],
    dueToRelatedPartiesCurrent:
      json["due_to_related_parties_current"] == null
        ? undefined
        : json["due_to_related_parties_current"],
    dividendsPayable:
      json["dividends_payable"] == null ? undefined : json["dividends_payable"],
    totalTaxPayable:
      json["total_tax_payable"] == null ? undefined : json["total_tax_payable"],
    incomeTaxPayable:
      json["income_tax_payable"] == null
        ? undefined
        : json["income_tax_payable"],
  };
}

export function AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesToJSON(
  json: any,
): AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses {
  return AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesToJSONTyped(
    json,
    false,
  );
}

export function AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpensesToJSONTyped(
  value?: AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_payables_and_accrued_expenses:
      value["totalPayablesAndAccruedExpenses"],
    accounts_payable: value["accountsPayable"],
    current_accrued_expenses: value["currentAccruedExpenses"],
    interest_payable: value["interestPayable"],
    payables: value["payables"],
    other_payable: value["otherPayable"],
    due_to_related_parties_current: value["dueToRelatedPartiesCurrent"],
    dividends_payable: value["dividendsPayable"],
    total_tax_payable: value["totalTaxPayable"],
    income_tax_payable: value["incomeTaxPayable"],
  };
}
