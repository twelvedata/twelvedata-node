/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Costs associated with investing in the mutual fund, including gross and net expense ratios
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses
 */
export interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses {
  /**
   * Cost of investing in a mutual fund
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses
   */
  expenseRatioGross?: number;
  /**
   * Percentage of mutual fund assets steered toward a fund's operating expenses and fund management fees
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses
   */
  expenseRatioNet?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses {
  return GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses {
  if (json == null) {
    return json;
  }
  return {
    expenseRatioGross:
      json["expense_ratio_gross"] == null
        ? undefined
        : json["expense_ratio_gross"],
    expenseRatioNet:
      json["expense_ratio_net"] == null ? undefined : json["expense_ratio_net"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses {
  return GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpensesToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    expense_ratio_gross: value["expenseRatioGross"],
    expense_ratio_net: value["expenseRatioNet"],
  };
}
