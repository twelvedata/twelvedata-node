/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetEpsTrend200ResponseEpsTrendInner {
  /**
   * Date of the estimation
   */
  date?: string;
  /**
   * Period of estimation, can be `current_quarter`, `next_quarter`, `current_year`, or `next_year`
   */
  period?: string;
  /**
   * Actual EPS estimation for the period
   */
  current_estimate?: number;
  /**
   * EPS estimation value 7 days ago
   */
  "7_days_ago"?: number;
  /**
   * EPS estimation value 30 days ago
   */
  "30_days_ago"?: number;
  /**
   * EPS estimation value 60 days ago
   */
  "60_days_ago"?: number;
  /**
   * EPS estimation value 90 days ago
   */
  "90_days_ago"?: number;
}
