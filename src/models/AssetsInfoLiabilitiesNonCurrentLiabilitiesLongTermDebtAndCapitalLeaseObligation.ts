/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Long term debt and capital lease obligation information
 * @export
 * @interface AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation
 */
export interface AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation {
  /**
   * Total long term debt and capital lease obligation
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation
   */
  totalLongTermDebtAndCapitalLeaseObligation?: number;
  /**
   * Long term debt
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation
   */
  longTermDebt?: number;
  /**
   * Long term capital lease obligation
   * @type {number}
   * @memberof AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation
   */
  longTermCapitalLeaseObligation?: number;
}

/**
 * Check if a given object implements the AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation interface.
 */
export function instanceOfAssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation(
  value: object,
): value is AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation {
  return true;
}

export function AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationFromJSON(
  json: any,
): AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation {
  return AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationFromJSONTyped(
    json,
    false,
  );
}

export function AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation {
  if (json == null) {
    return json;
  }
  return {
    totalLongTermDebtAndCapitalLeaseObligation:
      json["total_long_term_debt_and_capital_lease_obligation"] == null
        ? undefined
        : json["total_long_term_debt_and_capital_lease_obligation"],
    longTermDebt:
      json["long_term_debt"] == null ? undefined : json["long_term_debt"],
    longTermCapitalLeaseObligation:
      json["long_term_capital_lease_obligation"] == null
        ? undefined
        : json["long_term_capital_lease_obligation"],
  };
}

export function AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationToJSON(
  json: any,
): AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation {
  return AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationToJSONTyped(
    json,
    false,
  );
}

export function AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligationToJSONTyped(
  value?: AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_long_term_debt_and_capital_lease_obligation:
      value["totalLongTermDebtAndCapitalLeaseObligation"],
    long_term_debt: value["longTermDebt"],
    long_term_capital_lease_obligation: value["longTermCapitalLeaseObligation"],
  };
}
