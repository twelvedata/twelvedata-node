/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Taxes information
 * @export
 * @interface IncomeStatementItemTaxes
 */
export interface IncomeStatementItemTaxes {
  /**
   * Tax provision
   * @type {number}
   * @memberof IncomeStatementItemTaxes
   */
  taxProvision?: number;
  /**
   * Tax effect of unusual items
   * @type {number}
   * @memberof IncomeStatementItemTaxes
   */
  taxEffectOfUnusualItems?: number;
  /**
   * Tax rate for calculations
   * @type {number}
   * @memberof IncomeStatementItemTaxes
   */
  taxRateForCalculations?: number;
  /**
   * Other taxes
   * @type {number}
   * @memberof IncomeStatementItemTaxes
   */
  otherTaxes?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemTaxes interface.
 */
export function instanceOfIncomeStatementItemTaxes(
  value: object,
): value is IncomeStatementItemTaxes {
  return true;
}

export function IncomeStatementItemTaxesFromJSON(
  json: any,
): IncomeStatementItemTaxes {
  return IncomeStatementItemTaxesFromJSONTyped(json, false);
}

export function IncomeStatementItemTaxesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemTaxes {
  if (json == null) {
    return json;
  }
  return {
    taxProvision:
      json["tax_provision"] == null ? undefined : json["tax_provision"],
    taxEffectOfUnusualItems:
      json["tax_effect_of_unusual_items"] == null
        ? undefined
        : json["tax_effect_of_unusual_items"],
    taxRateForCalculations:
      json["tax_rate_for_calculations"] == null
        ? undefined
        : json["tax_rate_for_calculations"],
    otherTaxes: json["other_taxes"] == null ? undefined : json["other_taxes"],
  };
}

export function IncomeStatementItemTaxesToJSON(
  json: any,
): IncomeStatementItemTaxes {
  return IncomeStatementItemTaxesToJSONTyped(json, false);
}

export function IncomeStatementItemTaxesToJSONTyped(
  value?: IncomeStatementItemTaxes | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    tax_provision: value["taxProvision"],
    tax_effect_of_unusual_items: value["taxEffectOfUnusualItems"],
    tax_rate_for_calculations: value["taxRateForCalculations"],
    other_taxes: value["otherTaxes"],
  };
}
