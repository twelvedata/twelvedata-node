/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation } from "./AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation";
import {
  AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationFromJSON,
  AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationFromJSONTyped,
  AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationToJSON,
  AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationToJSONTyped,
} from "./AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation";

/**
 * Non-current liabilities information
 * @export
 * @interface AssetsInfoLiabilitiesNonCurrentLiabilities
 */
export interface AssetsInfoLiabilitiesNonCurrentLiabilities {
  /**
   * Total non current liabilities net minority interest
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  totalNonCurrentLiabilitiesNetMinorityInterest?: number;
  /**
   *
   * @type {AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  longTermDebtAndCapitalLeaseObligation?: AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation;
  /**
   * Long term provisions
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  longTermProvisions?: number;
  /**
   * Non current pension and other postretirement benefit plans
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  nonCurrentPensionAndOtherPostretirementBenefitPlans?: number;
  /**
   * Non current accrued expenses
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  nonCurrentAccruedExpenses?: number;
  /**
   * Due to related parties non current
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  dueToRelatedPartiesNonCurrent?: number;
  /**
   * Trade and other payables non current
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  tradeAndOtherPayablesNonCurrent?: number;
  /**
   * Non current deferred liabilities
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  nonCurrentDeferredLiabilities?: number;
  /**
   * Non current deferred revenue
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  nonCurrentDeferredRevenue?: number;
  /**
   * Non current deferred taxes liabilities
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  nonCurrentDeferredTaxesLiabilities?: number;
  /**
   * Other non current liabilities
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  otherNonCurrentLiabilities?: number;
  /**
   * Preferred securities outside stock equity
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  preferredSecuritiesOutsideStockEquity?: number;
  /**
   * Derivative product liabilities
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  derivativeProductLiabilities?: number;
  /**
   * Capital lease obligations
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  capitalLeaseObligations?: number;
  /**
   * Restricted common stock
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilities
   */
  restrictedCommonStock?: number;
}

/**
 * Check if a given object implements the AssetsInfoLiabilitiesNonCurrentLiabilities interface.
 */
export function instanceOfAssetsInfoLiabilitiesNonCurrentLiabilities(
  value: object,
): value is AssetsInfoLiabilitiesNonCurrentLiabilities {
  return true;
}

export function AssetsInfoLiabilitiesNonCurrentLiabilitiesFromJSON(
  json: any,
): AssetsInfoLiabilitiesNonCurrentLiabilities {
  return AssetsInfoLiabilitiesNonCurrentLiabilitiesFromJSONTyped(json, false);
}

export function AssetsInfoLiabilitiesNonCurrentLiabilitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfoLiabilitiesNonCurrentLiabilities {
  if (json == null) {
    return json;
  }
  return {
    totalNonCurrentLiabilitiesNetMinorityInterest:
      json["total_non_current_liabilities_net_minority_interest"] == null
        ? undefined
        : json["total_non_current_liabilities_net_minority_interest"],
    longTermDebtAndCapitalLeaseObligation:
      json["long_term_debt_and_capital_lease_obligation"] == null
        ? undefined
        : AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationFromJSON(
            json["long_term_debt_and_capital_lease_obligation"],
          ),
    longTermProvisions:
      json["long_term_provisions"] == null
        ? undefined
        : json["long_term_provisions"],
    nonCurrentPensionAndOtherPostretirementBenefitPlans:
      json["non_current_pension_and_other_postretirement_benefit_plans"] == null
        ? undefined
        : json["non_current_pension_and_other_postretirement_benefit_plans"],
    nonCurrentAccruedExpenses:
      json["non_current_accrued_expenses"] == null
        ? undefined
        : json["non_current_accrued_expenses"],
    dueToRelatedPartiesNonCurrent:
      json["due_to_related_parties_non_current"] == null
        ? undefined
        : json["due_to_related_parties_non_current"],
    tradeAndOtherPayablesNonCurrent:
      json["trade_and_other_payables_non_current"] == null
        ? undefined
        : json["trade_and_other_payables_non_current"],
    nonCurrentDeferredLiabilities:
      json["non_current_deferred_liabilities"] == null
        ? undefined
        : json["non_current_deferred_liabilities"],
    nonCurrentDeferredRevenue:
      json["non_current_deferred_revenue"] == null
        ? undefined
        : json["non_current_deferred_revenue"],
    nonCurrentDeferredTaxesLiabilities:
      json["non_current_deferred_taxes_liabilities"] == null
        ? undefined
        : json["non_current_deferred_taxes_liabilities"],
    otherNonCurrentLiabilities:
      json["other_non_current_liabilities"] == null
        ? undefined
        : json["other_non_current_liabilities"],
    preferredSecuritiesOutsideStockEquity:
      json["preferred_securities_outside_stock_equity"] == null
        ? undefined
        : json["preferred_securities_outside_stock_equity"],
    derivativeProductLiabilities:
      json["derivative_product_liabilities"] == null
        ? undefined
        : json["derivative_product_liabilities"],
    capitalLeaseObligations:
      json["capital_lease_obligations"] == null
        ? undefined
        : json["capital_lease_obligations"],
    restrictedCommonStock:
      json["restricted_common_stock"] == null
        ? undefined
        : json["restricted_common_stock"],
  };
}

export function AssetsInfoLiabilitiesNonCurrentLiabilitiesToJSON(
  json: any,
): AssetsInfoLiabilitiesNonCurrentLiabilities {
  return AssetsInfoLiabilitiesNonCurrentLiabilitiesToJSONTyped(json, false);
}

export function AssetsInfoLiabilitiesNonCurrentLiabilitiesToJSONTyped(
  value?: AssetsInfoLiabilitiesNonCurrentLiabilities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_non_current_liabilities_net_minority_interest:
      value["totalNonCurrentLiabilitiesNetMinorityInterest"],
    long_term_debt_and_capital_lease_obligation:
      AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationToJSON(
        value["longTermDebtAndCapitalLeaseObligation"],
      ),
    long_term_provisions: value["longTermProvisions"],
    non_current_pension_and_other_postretirement_benefit_plans:
      value["nonCurrentPensionAndOtherPostretirementBenefitPlans"],
    non_current_accrued_expenses: value["nonCurrentAccruedExpenses"],
    due_to_related_parties_non_current: value["dueToRelatedPartiesNonCurrent"],
    trade_and_other_payables_non_current:
      value["tradeAndOtherPayablesNonCurrent"],
    non_current_deferred_liabilities: value["nonCurrentDeferredLiabilities"],
    non_current_deferred_revenue: value["nonCurrentDeferredRevenue"],
    non_current_deferred_taxes_liabilities:
      value["nonCurrentDeferredTaxesLiabilities"],
    other_non_current_liabilities: value["otherNonCurrentLiabilities"],
    preferred_securities_outside_stock_equity:
      value["preferredSecuritiesOutsideStockEquity"],
    derivative_product_liabilities: value["derivativeProductLiabilities"],
    capital_lease_obligations: value["capitalLeaseObligations"],
    restricted_common_stock: value["restrictedCommonStock"],
  };
}
