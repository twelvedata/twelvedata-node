/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Non-operating interest details
 * @export
 * @interface IncomeStatementBlockNonOperatingInterest
 */
export interface IncomeStatementBlockNonOperatingInterest {
  /**
   * Refers to non-operating interest income
   * @type {number}
   * @memberof IncomeStatementBlockNonOperatingInterest
   */
  income?: number;
  /**
   * Refers to non-operating interest expense
   * @type {number}
   * @memberof IncomeStatementBlockNonOperatingInterest
   */
  expense?: number;
}

/**
 * Check if a given object implements the IncomeStatementBlockNonOperatingInterest interface.
 */
export function instanceOfIncomeStatementBlockNonOperatingInterest(
  value: object,
): value is IncomeStatementBlockNonOperatingInterest {
  return true;
}

export function IncomeStatementBlockNonOperatingInterestFromJSON(
  json: any,
): IncomeStatementBlockNonOperatingInterest {
  return IncomeStatementBlockNonOperatingInterestFromJSONTyped(json, false);
}

export function IncomeStatementBlockNonOperatingInterestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementBlockNonOperatingInterest {
  if (json == null) {
    return json;
  }
  return {
    income: json["income"] == null ? undefined : json["income"],
    expense: json["expense"] == null ? undefined : json["expense"],
  };
}

export function IncomeStatementBlockNonOperatingInterestToJSON(
  json: any,
): IncomeStatementBlockNonOperatingInterest {
  return IncomeStatementBlockNonOperatingInterestToJSONTyped(json, false);
}

export function IncomeStatementBlockNonOperatingInterestToJSONTyped(
  value?: IncomeStatementBlockNonOperatingInterest | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    income: value["income"],
    expense: value["expense"],
  };
}
