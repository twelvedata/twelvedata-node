/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Dividends and shares information
 * @export
 * @interface IncomeStatementItemDividendsAndShares
 */
export interface IncomeStatementItemDividendsAndShares {
  /**
   * Dividend per share
   * @type {number}
   * @memberof IncomeStatementItemDividendsAndShares
   */
  dividendPerShare?: number;
  /**
   * Diluted average shares
   * @type {number}
   * @memberof IncomeStatementItemDividendsAndShares
   */
  dilutedAverageShares?: number;
  /**
   * Basic average shares
   * @type {number}
   * @memberof IncomeStatementItemDividendsAndShares
   */
  basicAverageShares?: number;
  /**
   * Preferred stock dividends
   * @type {number}
   * @memberof IncomeStatementItemDividendsAndShares
   */
  preferredStockDividends?: number;
  /**
   * Other under preferred stock dividend
   * @type {number}
   * @memberof IncomeStatementItemDividendsAndShares
   */
  otherUnderPreferredStockDividend?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemDividendsAndShares interface.
 */
export function instanceOfIncomeStatementItemDividendsAndShares(
  value: object,
): value is IncomeStatementItemDividendsAndShares {
  return true;
}

export function IncomeStatementItemDividendsAndSharesFromJSON(
  json: any,
): IncomeStatementItemDividendsAndShares {
  return IncomeStatementItemDividendsAndSharesFromJSONTyped(json, false);
}

export function IncomeStatementItemDividendsAndSharesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemDividendsAndShares {
  if (json == null) {
    return json;
  }
  return {
    dividendPerShare:
      json["dividend_per_share"] == null
        ? undefined
        : json["dividend_per_share"],
    dilutedAverageShares:
      json["diluted_average_shares"] == null
        ? undefined
        : json["diluted_average_shares"],
    basicAverageShares:
      json["basic_average_shares"] == null
        ? undefined
        : json["basic_average_shares"],
    preferredStockDividends:
      json["preferred_stock_dividends"] == null
        ? undefined
        : json["preferred_stock_dividends"],
    otherUnderPreferredStockDividend:
      json["other_under_preferred_stock_dividend"] == null
        ? undefined
        : json["other_under_preferred_stock_dividend"],
  };
}

export function IncomeStatementItemDividendsAndSharesToJSON(
  json: any,
): IncomeStatementItemDividendsAndShares {
  return IncomeStatementItemDividendsAndSharesToJSONTyped(json, false);
}

export function IncomeStatementItemDividendsAndSharesToJSONTyped(
  value?: IncomeStatementItemDividendsAndShares | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    dividend_per_share: value["dividendPerShare"],
    diluted_average_shares: value["dilutedAverageShares"],
    basic_average_shares: value["basicAverageShares"],
    preferred_stock_dividends: value["preferredStockDividends"],
    other_under_preferred_stock_dividend:
      value["otherUnderPreferredStockDividend"],
  };
}
