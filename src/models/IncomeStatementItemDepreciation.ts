/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Depreciation information
 * @export
 * @interface IncomeStatementItemDepreciation
 */
export interface IncomeStatementItemDepreciation {
  /**
   * Reconciled depreciation
   * @type {number}
   * @memberof IncomeStatementItemDepreciation
   */
  reconciledDepreciation?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemDepreciation interface.
 */
export function instanceOfIncomeStatementItemDepreciation(
  value: object,
): value is IncomeStatementItemDepreciation {
  return true;
}

export function IncomeStatementItemDepreciationFromJSON(
  json: any,
): IncomeStatementItemDepreciation {
  return IncomeStatementItemDepreciationFromJSONTyped(json, false);
}

export function IncomeStatementItemDepreciationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemDepreciation {
  if (json == null) {
    return json;
  }
  return {
    reconciledDepreciation:
      json["reconciled_depreciation"] == null
        ? undefined
        : json["reconciled_depreciation"],
  };
}

export function IncomeStatementItemDepreciationToJSON(
  json: any,
): IncomeStatementItemDepreciation {
  return IncomeStatementItemDepreciationToJSONTyped(json, false);
}

export function IncomeStatementItemDepreciationToJSONTyped(
  value?: IncomeStatementItemDepreciation | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    reconciled_depreciation: value["reconciledDepreciation"],
  };
}
