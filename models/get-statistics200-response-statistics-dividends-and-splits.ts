/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Dividends and splits information of the company
 */
export interface GetStatistics200ResponseStatisticsDividendsAndSplits {
  /**
   * Refers to the forward dividend yield estimation in the currency of instrument
   */
  forward_annual_dividend_rate?: number;
  /**
   * Refers to the forward dividend yield percentage relative to stock price
   */
  forward_annual_dividend_yield?: number;
  /**
   * Refers to the trailing dividend yield rate in the currency of instrument over the last 12 months
   */
  trailing_annual_dividend_rate?: number;
  /**
   * Refers to the trailing dividend yield percentage relative to stock price
   */
  trailing_annual_dividend_yield?: number;
  /**
   * Refers to the average 5 years dividend yield
   */
  "5_year_average_dividend_yield"?: number;
  /**
   * Refers to payout ratio, showing the proportion of earnings a company pays its shareholders in the form of dividends
   */
  payout_ratio?: number;
  /**
   * Refers to how often a stock or fund pays dividends
   */
  dividend_frequency?: string;
  /**
   * Refers to the last dividend payout date
   */
  dividend_date?: string;
  /**
   * Refers to the last ex-dividend payout date
   */
  ex_dividend_date?: string;
  /**
   * Specification of the last split event
   */
  last_split_factor?: string;
  /**
   * Refers for the last split date
   */
  last_split_date?: string;
}
