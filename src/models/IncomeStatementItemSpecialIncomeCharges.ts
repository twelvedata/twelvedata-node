/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Special income charges information
 * @export
 * @interface IncomeStatementItemSpecialIncomeCharges
 */
export interface IncomeStatementItemSpecialIncomeCharges {
  /**
   * Special income charges value
   * @type {number}
   * @memberof IncomeStatementItemSpecialIncomeCharges
   */
  specialIncomeChargesValue?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemSpecialIncomeCharges interface.
 */
export function instanceOfIncomeStatementItemSpecialIncomeCharges(
  value: object,
): value is IncomeStatementItemSpecialIncomeCharges {
  return true;
}

export function IncomeStatementItemSpecialIncomeChargesFromJSON(
  json: any,
): IncomeStatementItemSpecialIncomeCharges {
  return IncomeStatementItemSpecialIncomeChargesFromJSONTyped(json, false);
}

export function IncomeStatementItemSpecialIncomeChargesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemSpecialIncomeCharges {
  if (json == null) {
    return json;
  }
  return {
    specialIncomeChargesValue:
      json["special_income_charges_value"] == null
        ? undefined
        : json["special_income_charges_value"],
  };
}

export function IncomeStatementItemSpecialIncomeChargesToJSON(
  json: any,
): IncomeStatementItemSpecialIncomeCharges {
  return IncomeStatementItemSpecialIncomeChargesToJSONTyped(json, false);
}

export function IncomeStatementItemSpecialIncomeChargesToJSONTyped(
  value?: IncomeStatementItemSpecialIncomeCharges | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    special_income_charges_value: value["specialIncomeChargesValue"],
  };
}
