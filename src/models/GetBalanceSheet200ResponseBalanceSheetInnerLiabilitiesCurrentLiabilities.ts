/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Current liabilities section
 * @export
 * @interface GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities {
  /**
   * Refers to an account within the general ledger that represents an obligation to pay off a short-term debt to creditors or suppliers
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities
   */
  accountsPayable?: number;
  /**
   * Represents payments that a company is obligated to pay in the future for which goods and services have already been delivered
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities
   */
  accruedExpenses?: number;
  /**
   * Represents current debt and capital lease obligations
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities
   */
  shortTermDebt?: number;
  /**
   * Represents advance payments a company receives for products or services that are to be delivered or performed in the future
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities
   */
  deferredRevenue?: number;
  /**
   * Represents taxes due to the government within one year
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities
   */
  taxPayable?: number;
  /**
   * Represents to pensions to be paid out
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities
   */
  pensions?: number;
  /**
   * Represents other current liabilities
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities
   */
  otherCurrentLiabilities?: number;
  /**
   * Represents total current liabilities
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities
   */
  totalCurrentLiabilities?: number;
}

/**
 * Check if a given object implements the GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities interface.
 */
export function instanceOfGetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities(
  value: object,
): value is GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities {
  return true;
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesFromJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities {
  return GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesFromJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities {
  if (json == null) {
    return json;
  }
  return {
    accountsPayable:
      json["accounts_payable"] == null ? undefined : json["accounts_payable"],
    accruedExpenses:
      json["accrued_expenses"] == null ? undefined : json["accrued_expenses"],
    shortTermDebt:
      json["short_term_debt"] == null ? undefined : json["short_term_debt"],
    deferredRevenue:
      json["deferred_revenue"] == null ? undefined : json["deferred_revenue"],
    taxPayable: json["tax_payable"] == null ? undefined : json["tax_payable"],
    pensions: json["pensions"] == null ? undefined : json["pensions"],
    otherCurrentLiabilities:
      json["other_current_liabilities"] == null
        ? undefined
        : json["other_current_liabilities"],
    totalCurrentLiabilities:
      json["total_current_liabilities"] == null
        ? undefined
        : json["total_current_liabilities"],
  };
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesToJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities {
  return GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesToJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesToJSONTyped(
  value?: GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    accounts_payable: value["accountsPayable"],
    accrued_expenses: value["accruedExpenses"],
    short_term_debt: value["shortTermDebt"],
    deferred_revenue: value["deferredRevenue"],
    tax_payable: value["taxPayable"],
    pensions: value["pensions"],
    other_current_liabilities: value["otherCurrentLiabilities"],
    total_current_liabilities: value["totalCurrentLiabilities"],
  };
}
