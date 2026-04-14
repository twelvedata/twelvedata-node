/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Shareholders' equity section of the balance sheet
 * @export
 * @interface GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity {
  /**
   * Represents net worth of investors shares, which is equal to the total_assets - total_liabilities
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity
   */
  commonStock?: number;
  /**
   * Refers to the profits earned minus dividends paid
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity
   */
  retainedEarnings?: number;
  /**
   * Represents other not affecting retained earnings gains and looses
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity
   */
  otherShareholdersEquity?: number;
  /**
   * Represents the net worth of a company, which is the amount that would be returned to shareholders if a company's total assets were liquidated, and all of its debts were repaid
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity
   */
  totalShareholdersEquity?: number;
  /**
   * Represents the additional paid-in capital, which is the amount shareholders have invested in a company above the par value of its stock
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity
   */
  additionalPaidInCapital?: number;
  /**
   * Represents the value of shares that have been repurchased by the company and are held in its treasury
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity
   */
  treasuryStock?: number;
  /**
   * Represents the portion of shareholders' equity that is attributable to minority shareholders in a subsidiary company
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity
   */
  minorityInterest?: number;
}

/**
 * Check if a given object implements the GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity interface.
 */
export function instanceOfGetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity(
  value: object,
): value is GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity {
  return true;
}

export function GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityFromJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity {
  return GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityFromJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity {
  if (json == null) {
    return json;
  }
  return {
    commonStock:
      json["common_stock"] == null ? undefined : json["common_stock"],
    retainedEarnings:
      json["retained_earnings"] == null ? undefined : json["retained_earnings"],
    otherShareholdersEquity:
      json["other_shareholders_equity"] == null
        ? undefined
        : json["other_shareholders_equity"],
    totalShareholdersEquity:
      json["total_shareholders_equity"] == null
        ? undefined
        : json["total_shareholders_equity"],
    additionalPaidInCapital:
      json["additional_paid_in_capital"] == null
        ? undefined
        : json["additional_paid_in_capital"],
    treasuryStock:
      json["treasury_stock"] == null ? undefined : json["treasury_stock"],
    minorityInterest:
      json["minority_interest"] == null ? undefined : json["minority_interest"],
  };
}

export function GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityToJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity {
  return GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityToJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityToJSONTyped(
  value?: GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    common_stock: value["commonStock"],
    retained_earnings: value["retainedEarnings"],
    other_shareholders_equity: value["otherShareholdersEquity"],
    total_shareholders_equity: value["totalShareholdersEquity"],
    additional_paid_in_capital: value["additionalPaidInCapital"],
    treasury_stock: value["treasuryStock"],
    minority_interest: value["minorityInterest"],
  };
}
