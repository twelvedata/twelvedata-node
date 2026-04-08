/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Stock statistics of the company
 */
export interface GetStatistics200ResponseStatisticsStockStatistics {
  /**
   * Refers for the shares outstanding currently held by all its shareholders
   */
  shares_outstanding?: number;
  /**
   * Refers to floating stock is the number of public shares a company has available for trading on the open market
   */
  float_shares?: number;
  /**
   * Refers to the average 10 days volume
   */
  avg_10_volume?: number;
  /**
   * Refers to the average 90 days volume
   */
  avg_90_volume?: number;
  /**
   * Refers to the number of shares that have been shorted
   */
  shares_short?: number;
  /**
   * Refers to short ratio measure
   */
  short_ratio?: number;
  /**
   * Refers to the number of shorted shares divided by the number of shares outstanding
   */
  short_percent_of_shares_outstanding?: number;
  /**
   * Refers to the percentage of shares held by the company insiders
   */
  percent_held_by_insiders?: number;
  /**
   * Refers to the percentage of shares held by the institutions
   */
  percent_held_by_institutions?: number;
}
