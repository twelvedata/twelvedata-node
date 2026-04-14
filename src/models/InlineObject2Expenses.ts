/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface InlineObject2Expenses
 */
export interface InlineObject2Expenses {
  /**
   *
   * @type {number}
   * @memberof InlineObject2Expenses
   */
  expenseRatioGross?: number;
  /**
   *
   * @type {number}
   * @memberof InlineObject2Expenses
   */
  expenseRatioNet?: number;
}

/**
 * Check if a given object implements the InlineObject2Expenses interface.
 */
export function instanceOfInlineObject2Expenses(
  value: object,
): value is InlineObject2Expenses {
  return true;
}

export function InlineObject2ExpensesFromJSON(
  json: any,
): InlineObject2Expenses {
  return InlineObject2ExpensesFromJSONTyped(json, false);
}

export function InlineObject2ExpensesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject2Expenses {
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

export function InlineObject2ExpensesToJSON(json: any): InlineObject2Expenses {
  return InlineObject2ExpensesToJSONTyped(json, false);
}

export function InlineObject2ExpensesToJSONTyped(
  value?: InlineObject2Expenses | null,
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
