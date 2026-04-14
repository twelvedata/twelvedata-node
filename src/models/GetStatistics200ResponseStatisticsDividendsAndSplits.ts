/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Dividends and splits information of the company
 * @export
 * @interface GetStatistics200ResponseStatisticsDividendsAndSplits
 */
export interface GetStatistics200ResponseStatisticsDividendsAndSplits {
  /**
   * Refers to the forward dividend yield estimation in the currency of instrument
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  forwardAnnualDividendRate?: number;
  /**
   * Refers to the forward dividend yield percentage relative to stock price
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  forwardAnnualDividendYield?: number;
  /**
   * Refers to the trailing dividend yield rate in the currency of instrument over the last 12 months
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  trailingAnnualDividendRate?: number;
  /**
   * Refers to the trailing dividend yield percentage relative to stock price
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  trailingAnnualDividendYield?: number;
  /**
   * Refers to the average 5 years dividend yield
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  _5yearAverageDividendYield?: number;
  /**
   * Refers to payout ratio, showing the proportion of earnings a company pays its shareholders in the form of dividends
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  payoutRatio?: number;
  /**
   * Refers to how often a stock or fund pays dividends
   * @type {string}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  dividendFrequency?: string;
  /**
   * Refers to the last dividend payout date
   * @type {string}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  dividendDate?: string;
  /**
   * Refers to the last ex-dividend payout date
   * @type {string}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  exDividendDate?: string;
  /**
   * Specification of the last split event
   * @type {string}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  lastSplitFactor?: string;
  /**
   * Refers for the last split date
   * @type {string}
   * @memberof GetStatistics200ResponseStatisticsDividendsAndSplits
   */
  lastSplitDate?: string;
}

/**
 * Check if a given object implements the GetStatistics200ResponseStatisticsDividendsAndSplits interface.
 */
export function instanceOfGetStatistics200ResponseStatisticsDividendsAndSplits(
  value: object,
): value is GetStatistics200ResponseStatisticsDividendsAndSplits {
  return true;
}

export function GetStatistics200ResponseStatisticsDividendsAndSplitsFromJSON(
  json: any,
): GetStatistics200ResponseStatisticsDividendsAndSplits {
  return GetStatistics200ResponseStatisticsDividendsAndSplitsFromJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsDividendsAndSplitsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200ResponseStatisticsDividendsAndSplits {
  if (json == null) {
    return json;
  }
  return {
    forwardAnnualDividendRate:
      json["forward_annual_dividend_rate"] == null
        ? undefined
        : json["forward_annual_dividend_rate"],
    forwardAnnualDividendYield:
      json["forward_annual_dividend_yield"] == null
        ? undefined
        : json["forward_annual_dividend_yield"],
    trailingAnnualDividendRate:
      json["trailing_annual_dividend_rate"] == null
        ? undefined
        : json["trailing_annual_dividend_rate"],
    trailingAnnualDividendYield:
      json["trailing_annual_dividend_yield"] == null
        ? undefined
        : json["trailing_annual_dividend_yield"],
    _5yearAverageDividendYield:
      json["5_year_average_dividend_yield"] == null
        ? undefined
        : json["5_year_average_dividend_yield"],
    payoutRatio:
      json["payout_ratio"] == null ? undefined : json["payout_ratio"],
    dividendFrequency:
      json["dividend_frequency"] == null
        ? undefined
        : json["dividend_frequency"],
    dividendDate:
      json["dividend_date"] == null ? undefined : json["dividend_date"],
    exDividendDate:
      json["ex_dividend_date"] == null ? undefined : json["ex_dividend_date"],
    lastSplitFactor:
      json["last_split_factor"] == null ? undefined : json["last_split_factor"],
    lastSplitDate:
      json["last_split_date"] == null ? undefined : json["last_split_date"],
  };
}

export function GetStatistics200ResponseStatisticsDividendsAndSplitsToJSON(
  json: any,
): GetStatistics200ResponseStatisticsDividendsAndSplits {
  return GetStatistics200ResponseStatisticsDividendsAndSplitsToJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsDividendsAndSplitsToJSONTyped(
  value?: GetStatistics200ResponseStatisticsDividendsAndSplits | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    forward_annual_dividend_rate: value["forwardAnnualDividendRate"],
    forward_annual_dividend_yield: value["forwardAnnualDividendYield"],
    trailing_annual_dividend_rate: value["trailingAnnualDividendRate"],
    trailing_annual_dividend_yield: value["trailingAnnualDividendYield"],
    "5_year_average_dividend_yield": value["_5yearAverageDividendYield"],
    payout_ratio: value["payoutRatio"],
    dividend_frequency: value["dividendFrequency"],
    dividend_date: value["dividendDate"],
    ex_dividend_date: value["exDividendDate"],
    last_split_factor: value["lastSplitFactor"],
    last_split_date: value["lastSplitDate"],
  };
}
