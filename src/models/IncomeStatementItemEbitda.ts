/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * EBITDA information
 * @export
 * @interface IncomeStatementItemEbitda
 */
export interface IncomeStatementItemEbitda {
  /**
   * EBITDA value
   * @type {number}
   * @memberof IncomeStatementItemEbitda
   */
  ebitdaValue?: number;
  /**
   * Normalized EBITDA value
   * @type {number}
   * @memberof IncomeStatementItemEbitda
   */
  normalizedEbitdaValue?: number;
  /**
   * EBIT value
   * @type {number}
   * @memberof IncomeStatementItemEbitda
   */
  ebitValue?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemEbitda interface.
 */
export function instanceOfIncomeStatementItemEbitda(
  value: object,
): value is IncomeStatementItemEbitda {
  return true;
}

export function IncomeStatementItemEbitdaFromJSON(
  json: any,
): IncomeStatementItemEbitda {
  return IncomeStatementItemEbitdaFromJSONTyped(json, false);
}

export function IncomeStatementItemEbitdaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemEbitda {
  if (json == null) {
    return json;
  }
  return {
    ebitdaValue:
      json["ebitda_value"] == null ? undefined : json["ebitda_value"],
    normalizedEbitdaValue:
      json["normalized_ebitda_value"] == null
        ? undefined
        : json["normalized_ebitda_value"],
    ebitValue: json["ebit_value"] == null ? undefined : json["ebit_value"],
  };
}

export function IncomeStatementItemEbitdaToJSON(
  json: any,
): IncomeStatementItemEbitda {
  return IncomeStatementItemEbitdaToJSONTyped(json, false);
}

export function IncomeStatementItemEbitdaToJSONTyped(
  value?: IncomeStatementItemEbitda | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    ebitda_value: value["ebitdaValue"],
    normalized_ebitda_value: value["normalizedEbitdaValue"],
    ebit_value: value["ebitValue"],
  };
}
