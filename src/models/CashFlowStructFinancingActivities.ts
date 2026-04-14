/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Financing activities section
 * @export
 * @interface CashFlowStructFinancingActivities
 */
export interface CashFlowStructFinancingActivities {
  /**
   * Refers to the issuance of any financial obligations that extend beyond a 12 months period
   * @type {number}
   * @memberof CashFlowStructFinancingActivities
   */
  longTermDebtIssuance?: number;
  /**
   * Refers to the payments of any financial obligations that extend beyond a 12 months period
   * @type {number}
   * @memberof CashFlowStructFinancingActivities
   */
  longTermDebtPayments?: number;
  /**
   * Refers to the issuance of any financial obligations that are expected to be paid off within a year
   * @type {number}
   * @memberof CashFlowStructFinancingActivities
   */
  shortTermDebtIssuance?: number;
  /**
   * Represents a transaction whereby a company issues its own shares to the marketplace
   * @type {number}
   * @memberof CashFlowStructFinancingActivities
   */
  commonStockIssuance?: number;
  /**
   * Represents a transaction whereby a company buys back its own shares from the marketplace
   * @type {number}
   * @memberof CashFlowStructFinancingActivities
   */
  commonStockRepurchase?: number;
  /**
   * Returns value of payment doled out by a company to its stockholders in the form of periodic distributions of cash
   * @type {number}
   * @memberof CashFlowStructFinancingActivities
   */
  commonDividends?: number;
  /**
   * Represents other financing charges
   * @type {number}
   * @memberof CashFlowStructFinancingActivities
   */
  otherFinancingCharges?: number;
  /**
   * Returns cash flow from financing activities (CFF), which shows the net flows of cash that are used to fund the company
   * @type {number}
   * @memberof CashFlowStructFinancingActivities
   */
  financingCashFlow?: number;
}

/**
 * Check if a given object implements the CashFlowStructFinancingActivities interface.
 */
export function instanceOfCashFlowStructFinancingActivities(
  value: object,
): value is CashFlowStructFinancingActivities {
  return true;
}

export function CashFlowStructFinancingActivitiesFromJSON(
  json: any,
): CashFlowStructFinancingActivities {
  return CashFlowStructFinancingActivitiesFromJSONTyped(json, false);
}

export function CashFlowStructFinancingActivitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowStructFinancingActivities {
  if (json == null) {
    return json;
  }
  return {
    longTermDebtIssuance:
      json["long_term_debt_issuance"] == null
        ? undefined
        : json["long_term_debt_issuance"],
    longTermDebtPayments:
      json["long_term_debt_payments"] == null
        ? undefined
        : json["long_term_debt_payments"],
    shortTermDebtIssuance:
      json["short_term_debt_issuance"] == null
        ? undefined
        : json["short_term_debt_issuance"],
    commonStockIssuance:
      json["common_stock_issuance"] == null
        ? undefined
        : json["common_stock_issuance"],
    commonStockRepurchase:
      json["common_stock_repurchase"] == null
        ? undefined
        : json["common_stock_repurchase"],
    commonDividends:
      json["common_dividends"] == null ? undefined : json["common_dividends"],
    otherFinancingCharges:
      json["other_financing_charges"] == null
        ? undefined
        : json["other_financing_charges"],
    financingCashFlow:
      json["financing_cash_flow"] == null
        ? undefined
        : json["financing_cash_flow"],
  };
}

export function CashFlowStructFinancingActivitiesToJSON(
  json: any,
): CashFlowStructFinancingActivities {
  return CashFlowStructFinancingActivitiesToJSONTyped(json, false);
}

export function CashFlowStructFinancingActivitiesToJSONTyped(
  value?: CashFlowStructFinancingActivities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    long_term_debt_issuance: value["longTermDebtIssuance"],
    long_term_debt_payments: value["longTermDebtPayments"],
    short_term_debt_issuance: value["shortTermDebtIssuance"],
    common_stock_issuance: value["commonStockIssuance"],
    common_stock_repurchase: value["commonStockRepurchase"],
    common_dividends: value["commonDividends"],
    other_financing_charges: value["otherFinancingCharges"],
    financing_cash_flow: value["financingCashFlow"],
  };
}
