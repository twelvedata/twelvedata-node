/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Non-current liabilities section
 * @export
 * @interface GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities {
  /**
   * Represents money set aside for employee benefits such as gratuity
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities
   */
  longTermProvisions?: number;
  /**
   * Represents amount of outstanding debt that has a maturity of 12 months or longer
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities
   */
  longTermDebt?: number;
  /**
   * Represents funds set aside as assets to pay for anticipated future losses
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities
   */
  provisionForRisksAndCharges?: number;
  /**
   * Represents revenue producing activity for which revenue has not yet been recognized, and is not expected to be recognized in the next 12 months
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities
   */
  deferredLiabilities?: number;
  /**
   * Represents the value of derivative financial instruments that a company has issued
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities
   */
  derivativeProductLiabilities?: number;
  /**
   * Represents other non-current liabilities
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities
   */
  otherNonCurrentLiabilities?: number;
  /**
   * Represents total non-current liabilities
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities
   */
  totalNonCurrentLiabilities?: number;
}

/**
 * Check if a given object implements the GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities interface.
 */
export function instanceOfGetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities(
  value: object,
): value is GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities {
  return true;
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesFromJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities {
  return GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesFromJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities {
  if (json == null) {
    return json;
  }
  return {
    longTermProvisions:
      json["long_term_provisions"] == null
        ? undefined
        : json["long_term_provisions"],
    longTermDebt:
      json["long_term_debt"] == null ? undefined : json["long_term_debt"],
    provisionForRisksAndCharges:
      json["provision_for_risks_and_charges"] == null
        ? undefined
        : json["provision_for_risks_and_charges"],
    deferredLiabilities:
      json["deferred_liabilities"] == null
        ? undefined
        : json["deferred_liabilities"],
    derivativeProductLiabilities:
      json["derivative_product_liabilities"] == null
        ? undefined
        : json["derivative_product_liabilities"],
    otherNonCurrentLiabilities:
      json["other_non_current_liabilities"] == null
        ? undefined
        : json["other_non_current_liabilities"],
    totalNonCurrentLiabilities:
      json["total_non_current_liabilities"] == null
        ? undefined
        : json["total_non_current_liabilities"],
  };
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesToJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities {
  return GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesToJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesToJSONTyped(
  value?: GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    long_term_provisions: value["longTermProvisions"],
    long_term_debt: value["longTermDebt"],
    provision_for_risks_and_charges: value["provisionForRisksAndCharges"],
    deferred_liabilities: value["deferredLiabilities"],
    derivative_product_liabilities: value["derivativeProductLiabilities"],
    other_non_current_liabilities: value["otherNonCurrentLiabilities"],
    total_non_current_liabilities: value["totalNonCurrentLiabilities"],
  };
}
