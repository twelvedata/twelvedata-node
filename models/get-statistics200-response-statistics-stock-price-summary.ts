/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Stock price summary of the company
 */
export interface GetStatistics200ResponseStatisticsStockPriceSummary {
  /**
   * Refers to the lowest price at which stock traded during a year
   */
  fifty_two_week_low?: number;
  /**
   * Refers to the highest price at which stock traded during a year
   */
  fifty_two_week_high?: number;
  /**
   * Refers to the change between lowest and highest prices during a year
   */
  fifty_two_week_change?: number;
  /**
   * Refers to beta measure relative to the primary benchmark (index) of the country
   */
  beta?: number;
  /**
   * Refers to the 50-day simple moving average
   */
  day_50_ma?: number;
  /**
   * Refers to the 200-day simple moving average
   */
  day_200_ma?: number;
}
