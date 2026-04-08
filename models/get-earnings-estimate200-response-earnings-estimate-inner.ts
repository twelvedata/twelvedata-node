/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetEarningsEstimate200ResponseEarningsEstimateInner {
  /**
   * Date of the earnings estimate
   */
  date?: string;
  /**
   * Period of estimation, can be `current_quarter`, `next_quarter`, `current_year`, or `next_year`
   */
  period?: string;
  /**
   * Number of analysts that made the estimation
   */
  number_of_analysts?: number;
  /**
   * Average estimation across analysts
   */
  avg_estimate?: number;
  /**
   * Lowest estimation given by an analyst
   */
  low_estimate?: number;
  /**
   * Highest estimation given by an analyst
   */
  high_estimate?: number;
  /**
   * Average estimation of this period\'s earnings given a year ago
   */
  year_ago_eps?: number;
}
