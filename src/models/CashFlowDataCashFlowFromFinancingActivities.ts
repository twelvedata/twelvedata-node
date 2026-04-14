/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Cash flow from financing activities
 * @export
 * @interface CashFlowDataCashFlowFromFinancingActivities
 */
export interface CashFlowDataCashFlowFromFinancingActivities {
  /**
   * Financing cash flow
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  financingCashFlow?: number;
  /**
   * Cash flow from continuing financing activities
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  cashFlowFromContinuingFinancingActivities?: number;
  /**
   * Cash from discontinued financing activities
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  cashFromDiscontinuedFinancingActivities?: number;
  /**
   * Net other financing charges
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  netOtherFinancingCharges?: number;
  /**
   * Interest paid cff
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  interestPaidCff?: number;
  /**
   * Proceeds from stock option exercised
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  proceedsFromStockOptionExercised?: number;
  /**
   * Cash dividends paid
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  cashDividendsPaid?: number;
  /**
   * Preferred stock dividend paid
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  preferredStockDividendPaid?: number;
  /**
   * Common stock dividend paid
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  commonStockDividendPaid?: number;
  /**
   * Net preferred stock issuance
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  netPreferredStockIssuance?: number;
  /**
   * Preferred stock payments
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  preferredStockPayments?: number;
  /**
   * Preferred stock issuance
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  preferredStockIssuance?: number;
  /**
   * Net common stock issuance
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  netCommonStockIssuance?: number;
  /**
   * Common stock payments
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  commonStockPayments?: number;
  /**
   * Common stock issuance
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  commonStockIssuance?: number;
  /**
   * Repurchase of capital stock
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  repurchaseOfCapitalStock?: number;
  /**
   * Net issuance payments of debt
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  netIssuancePaymentsOfDebt?: number;
  /**
   * Net short term debt issuance
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  netShortTermDebtIssuance?: number;
  /**
   * Short term debt payments
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  shortTermDebtPayments?: number;
  /**
   * Short term debt issuance
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  shortTermDebtIssuance?: number;
  /**
   * Net long term debt issuance
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  netLongTermDebtIssuance?: number;
  /**
   * Long term debt payments
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  longTermDebtPayments?: number;
  /**
   * Long term debt issuance
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  longTermDebtIssuance?: number;
  /**
   * Issuance of debt
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  issuanceOfDebt?: number;
  /**
   * Repayment of debt
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  repaymentOfDebt?: number;
  /**
   * Issuance of capital stock
   * @type {number}
   * @memberof CashFlowDataCashFlowFromFinancingActivities
   */
  issuanceOfCapitalStock?: number;
}

/**
 * Check if a given object implements the CashFlowDataCashFlowFromFinancingActivities interface.
 */
export function instanceOfCashFlowDataCashFlowFromFinancingActivities(
  value: object,
): value is CashFlowDataCashFlowFromFinancingActivities {
  return true;
}

export function CashFlowDataCashFlowFromFinancingActivitiesFromJSON(
  json: any,
): CashFlowDataCashFlowFromFinancingActivities {
  return CashFlowDataCashFlowFromFinancingActivitiesFromJSONTyped(json, false);
}

export function CashFlowDataCashFlowFromFinancingActivitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowDataCashFlowFromFinancingActivities {
  if (json == null) {
    return json;
  }
  return {
    financingCashFlow:
      json["financing_cash_flow"] == null
        ? undefined
        : json["financing_cash_flow"],
    cashFlowFromContinuingFinancingActivities:
      json["cash_flow_from_continuing_financing_activities"] == null
        ? undefined
        : json["cash_flow_from_continuing_financing_activities"],
    cashFromDiscontinuedFinancingActivities:
      json["cash_from_discontinued_financing_activities"] == null
        ? undefined
        : json["cash_from_discontinued_financing_activities"],
    netOtherFinancingCharges:
      json["net_other_financing_charges"] == null
        ? undefined
        : json["net_other_financing_charges"],
    interestPaidCff:
      json["interest_paid_cff"] == null ? undefined : json["interest_paid_cff"],
    proceedsFromStockOptionExercised:
      json["proceeds_from_stock_option_exercised"] == null
        ? undefined
        : json["proceeds_from_stock_option_exercised"],
    cashDividendsPaid:
      json["cash_dividends_paid"] == null
        ? undefined
        : json["cash_dividends_paid"],
    preferredStockDividendPaid:
      json["preferred_stock_dividend_paid"] == null
        ? undefined
        : json["preferred_stock_dividend_paid"],
    commonStockDividendPaid:
      json["common_stock_dividend_paid"] == null
        ? undefined
        : json["common_stock_dividend_paid"],
    netPreferredStockIssuance:
      json["net_preferred_stock_issuance"] == null
        ? undefined
        : json["net_preferred_stock_issuance"],
    preferredStockPayments:
      json["preferred_stock_payments"] == null
        ? undefined
        : json["preferred_stock_payments"],
    preferredStockIssuance:
      json["preferred_stock_issuance"] == null
        ? undefined
        : json["preferred_stock_issuance"],
    netCommonStockIssuance:
      json["net_common_stock_issuance"] == null
        ? undefined
        : json["net_common_stock_issuance"],
    commonStockPayments:
      json["common_stock_payments"] == null
        ? undefined
        : json["common_stock_payments"],
    commonStockIssuance:
      json["common_stock_issuance"] == null
        ? undefined
        : json["common_stock_issuance"],
    repurchaseOfCapitalStock:
      json["repurchase_of_capital_stock"] == null
        ? undefined
        : json["repurchase_of_capital_stock"],
    netIssuancePaymentsOfDebt:
      json["net_issuance_payments_of_debt"] == null
        ? undefined
        : json["net_issuance_payments_of_debt"],
    netShortTermDebtIssuance:
      json["net_short_term_debt_issuance"] == null
        ? undefined
        : json["net_short_term_debt_issuance"],
    shortTermDebtPayments:
      json["short_term_debt_payments"] == null
        ? undefined
        : json["short_term_debt_payments"],
    shortTermDebtIssuance:
      json["short_term_debt_issuance"] == null
        ? undefined
        : json["short_term_debt_issuance"],
    netLongTermDebtIssuance:
      json["net_long_term_debt_issuance"] == null
        ? undefined
        : json["net_long_term_debt_issuance"],
    longTermDebtPayments:
      json["long_term_debt_payments"] == null
        ? undefined
        : json["long_term_debt_payments"],
    longTermDebtIssuance:
      json["long_term_debt_issuance"] == null
        ? undefined
        : json["long_term_debt_issuance"],
    issuanceOfDebt:
      json["issuance_of_debt"] == null ? undefined : json["issuance_of_debt"],
    repaymentOfDebt:
      json["repayment_of_debt"] == null ? undefined : json["repayment_of_debt"],
    issuanceOfCapitalStock:
      json["issuance_of_capital_stock"] == null
        ? undefined
        : json["issuance_of_capital_stock"],
  };
}

export function CashFlowDataCashFlowFromFinancingActivitiesToJSON(
  json: any,
): CashFlowDataCashFlowFromFinancingActivities {
  return CashFlowDataCashFlowFromFinancingActivitiesToJSONTyped(json, false);
}

export function CashFlowDataCashFlowFromFinancingActivitiesToJSONTyped(
  value?: CashFlowDataCashFlowFromFinancingActivities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    financing_cash_flow: value["financingCashFlow"],
    cash_flow_from_continuing_financing_activities:
      value["cashFlowFromContinuingFinancingActivities"],
    cash_from_discontinued_financing_activities:
      value["cashFromDiscontinuedFinancingActivities"],
    net_other_financing_charges: value["netOtherFinancingCharges"],
    interest_paid_cff: value["interestPaidCff"],
    proceeds_from_stock_option_exercised:
      value["proceedsFromStockOptionExercised"],
    cash_dividends_paid: value["cashDividendsPaid"],
    preferred_stock_dividend_paid: value["preferredStockDividendPaid"],
    common_stock_dividend_paid: value["commonStockDividendPaid"],
    net_preferred_stock_issuance: value["netPreferredStockIssuance"],
    preferred_stock_payments: value["preferredStockPayments"],
    preferred_stock_issuance: value["preferredStockIssuance"],
    net_common_stock_issuance: value["netCommonStockIssuance"],
    common_stock_payments: value["commonStockPayments"],
    common_stock_issuance: value["commonStockIssuance"],
    repurchase_of_capital_stock: value["repurchaseOfCapitalStock"],
    net_issuance_payments_of_debt: value["netIssuancePaymentsOfDebt"],
    net_short_term_debt_issuance: value["netShortTermDebtIssuance"],
    short_term_debt_payments: value["shortTermDebtPayments"],
    short_term_debt_issuance: value["shortTermDebtIssuance"],
    net_long_term_debt_issuance: value["netLongTermDebtIssuance"],
    long_term_debt_payments: value["longTermDebtPayments"],
    long_term_debt_issuance: value["longTermDebtIssuance"],
    issuance_of_debt: value["issuanceOfDebt"],
    repayment_of_debt: value["repaymentOfDebt"],
    issuance_of_capital_stock: value["issuanceOfCapitalStock"],
  };
}
