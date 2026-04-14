/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Depreciation and amortization information
 * @export
 * @interface IncomeStatementItemDepreciationAndAmortization
 */
export interface IncomeStatementItemDepreciationAndAmortization {
  /**
   * Depreciation amortization depletion
   * @type {number}
   * @memberof IncomeStatementItemDepreciationAndAmortization
   */
  depreciationAmortizationDepletion?: number;
  /**
   * Amortization of intangibles
   * @type {number}
   * @memberof IncomeStatementItemDepreciationAndAmortization
   */
  amortizationOfIntangibles?: number;
  /**
   * Depreciation
   * @type {number}
   * @memberof IncomeStatementItemDepreciationAndAmortization
   */
  depreciation?: number;
  /**
   * Amortization
   * @type {number}
   * @memberof IncomeStatementItemDepreciationAndAmortization
   */
  amortization?: number;
  /**
   * Depletion
   * @type {number}
   * @memberof IncomeStatementItemDepreciationAndAmortization
   */
  depletion?: number;
  /**
   * Depreciation and amortization in income statement
   * @type {number}
   * @memberof IncomeStatementItemDepreciationAndAmortization
   */
  depreciationAndAmortizationInIncomeStatement?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemDepreciationAndAmortization interface.
 */
export function instanceOfIncomeStatementItemDepreciationAndAmortization(
  value: object,
): value is IncomeStatementItemDepreciationAndAmortization {
  return true;
}

export function IncomeStatementItemDepreciationAndAmortizationFromJSON(
  json: any,
): IncomeStatementItemDepreciationAndAmortization {
  return IncomeStatementItemDepreciationAndAmortizationFromJSONTyped(
    json,
    false,
  );
}

export function IncomeStatementItemDepreciationAndAmortizationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemDepreciationAndAmortization {
  if (json == null) {
    return json;
  }
  return {
    depreciationAmortizationDepletion:
      json["depreciation_amortization_depletion"] == null
        ? undefined
        : json["depreciation_amortization_depletion"],
    amortizationOfIntangibles:
      json["amortization_of_intangibles"] == null
        ? undefined
        : json["amortization_of_intangibles"],
    depreciation:
      json["depreciation"] == null ? undefined : json["depreciation"],
    amortization:
      json["amortization"] == null ? undefined : json["amortization"],
    depletion: json["depletion"] == null ? undefined : json["depletion"],
    depreciationAndAmortizationInIncomeStatement:
      json["depreciation_and_amortization_in_income_statement"] == null
        ? undefined
        : json["depreciation_and_amortization_in_income_statement"],
  };
}

export function IncomeStatementItemDepreciationAndAmortizationToJSON(
  json: any,
): IncomeStatementItemDepreciationAndAmortization {
  return IncomeStatementItemDepreciationAndAmortizationToJSONTyped(json, false);
}

export function IncomeStatementItemDepreciationAndAmortizationToJSONTyped(
  value?: IncomeStatementItemDepreciationAndAmortization | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    depreciation_amortization_depletion:
      value["depreciationAmortizationDepletion"],
    amortization_of_intangibles: value["amortizationOfIntangibles"],
    depreciation: value["depreciation"],
    amortization: value["amortization"],
    depletion: value["depletion"],
    depreciation_and_amortization_in_income_statement:
      value["depreciationAndAmortizationInIncomeStatement"],
  };
}
