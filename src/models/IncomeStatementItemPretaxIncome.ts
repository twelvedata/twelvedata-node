/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Pretax income information
 * @export
 * @interface IncomeStatementItemPretaxIncome
 */
export interface IncomeStatementItemPretaxIncome {
  /**
   * Pretax income value
   * @type {number}
   * @memberof IncomeStatementItemPretaxIncome
   */
  pretaxIncomeValue?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemPretaxIncome interface.
 */
export function instanceOfIncomeStatementItemPretaxIncome(
  value: object,
): value is IncomeStatementItemPretaxIncome {
  return true;
}

export function IncomeStatementItemPretaxIncomeFromJSON(
  json: any,
): IncomeStatementItemPretaxIncome {
  return IncomeStatementItemPretaxIncomeFromJSONTyped(json, false);
}

export function IncomeStatementItemPretaxIncomeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemPretaxIncome {
  if (json == null) {
    return json;
  }
  return {
    pretaxIncomeValue:
      json["pretax_income_value"] == null
        ? undefined
        : json["pretax_income_value"],
  };
}

export function IncomeStatementItemPretaxIncomeToJSON(
  json: any,
): IncomeStatementItemPretaxIncome {
  return IncomeStatementItemPretaxIncomeToJSONTyped(json, false);
}

export function IncomeStatementItemPretaxIncomeToJSONTyped(
  value?: IncomeStatementItemPretaxIncome | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    pretax_income_value: value["pretaxIncomeValue"],
  };
}
