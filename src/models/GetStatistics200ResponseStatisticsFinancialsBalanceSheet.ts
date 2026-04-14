/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Balance sheet information
 * @export
 * @interface GetStatistics200ResponseStatisticsFinancialsBalanceSheet
 */
export interface GetStatistics200ResponseStatisticsFinancialsBalanceSheet {
  /**
   * Refers to total cash measure for the most recent quarter
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsBalanceSheet
   */
  totalCashMrq?: number;
  /**
   * Refers to total cash per share measure for the most recent quarter
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsBalanceSheet
   */
  totalCashPerShareMrq?: number;
  /**
   * Refers to total debt measure for the most recent quarter
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsBalanceSheet
   */
  totalDebtMrq?: number;
  /**
   * Refers to total debt to equity measure for the most recent quarter
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsBalanceSheet
   */
  totalDebtToEquityMrq?: number;
  /**
   * Refers to current ratio (total assets / total liabilities) ratio for the most recent quarter
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsBalanceSheet
   */
  currentRatioMrq?: number;
  /**
   * Refers to book value per share (BVPS) ratio for the most recent quarter
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsFinancialsBalanceSheet
   */
  bookValuePerShareMrq?: number;
}

/**
 * Check if a given object implements the GetStatistics200ResponseStatisticsFinancialsBalanceSheet interface.
 */
export function instanceOfGetStatistics200ResponseStatisticsFinancialsBalanceSheet(
  value: object,
): value is GetStatistics200ResponseStatisticsFinancialsBalanceSheet {
  return true;
}

export function GetStatistics200ResponseStatisticsFinancialsBalanceSheetFromJSON(
  json: any,
): GetStatistics200ResponseStatisticsFinancialsBalanceSheet {
  return GetStatistics200ResponseStatisticsFinancialsBalanceSheetFromJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsFinancialsBalanceSheetFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200ResponseStatisticsFinancialsBalanceSheet {
  if (json == null) {
    return json;
  }
  return {
    totalCashMrq:
      json["total_cash_mrq"] == null ? undefined : json["total_cash_mrq"],
    totalCashPerShareMrq:
      json["total_cash_per_share_mrq"] == null
        ? undefined
        : json["total_cash_per_share_mrq"],
    totalDebtMrq:
      json["total_debt_mrq"] == null ? undefined : json["total_debt_mrq"],
    totalDebtToEquityMrq:
      json["total_debt_to_equity_mrq"] == null
        ? undefined
        : json["total_debt_to_equity_mrq"],
    currentRatioMrq:
      json["current_ratio_mrq"] == null ? undefined : json["current_ratio_mrq"],
    bookValuePerShareMrq:
      json["book_value_per_share_mrq"] == null
        ? undefined
        : json["book_value_per_share_mrq"],
  };
}

export function GetStatistics200ResponseStatisticsFinancialsBalanceSheetToJSON(
  json: any,
): GetStatistics200ResponseStatisticsFinancialsBalanceSheet {
  return GetStatistics200ResponseStatisticsFinancialsBalanceSheetToJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsFinancialsBalanceSheetToJSONTyped(
  value?: GetStatistics200ResponseStatisticsFinancialsBalanceSheet | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_cash_mrq: value["totalCashMrq"],
    total_cash_per_share_mrq: value["totalCashPerShareMrq"],
    total_debt_mrq: value["totalDebtMrq"],
    total_debt_to_equity_mrq: value["totalDebtToEquityMrq"],
    current_ratio_mrq: value["currentRatioMrq"],
    book_value_per_share_mrq: value["bookValuePerShareMrq"],
  };
}
