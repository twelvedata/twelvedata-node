/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Valuation metrics of the company
 */
export interface GetStatistics200ResponseStatisticsValuationsMetrics {
  /**
   * Refers to the market value of the company\'s outstanding shares
   */
  market_capitalization?: number;
  /**
   * Refers to enterprise value (EV) of the company, often used as a more comprehensive alternative to market capitalization
   */
  enterprise_value?: number;
  /**
   * Refers to the trailing price-to-earnings (P/E). It is calculated by taking the current stock price and dividing it by the trailing earnings per share (EPS) for the past 12 months
   */
  trailing_pe?: number;
  /**
   * Refers to the forward price-to-earnings ratio. It is calculated by dividing the current share price by the estimated future earnings per share
   */
  forward_pe?: number;
  /**
   * The price/earnings to growth (PEG) ratio is a price-to-earnings ratio divided by the growth rate of the earnings
   */
  peg_ratio?: number;
  /**
   * The price-to-sales (P/S) ratio is a valuation ratio that compares the market capitalization to its revenues over the last 12 months
   */
  price_to_sales_ttm?: number;
  /**
   * The price-to-book (P/B) ratio is equal to the current share price divided by the book value of all shares (BVPS) over the last quarter
   */
  price_to_book_mrq?: number;
  /**
   * The enterprise value-to-revenue multiple (EV/R) is a measure that compares enterprise value to revenue
   */
  enterprise_to_revenue?: number;
  /**
   * The enterprise value-to-ebitda multiple (EV/EBITDA) is a measure that compares enterprise value to EBITDA
   */
  enterprise_to_ebitda?: number;
}
