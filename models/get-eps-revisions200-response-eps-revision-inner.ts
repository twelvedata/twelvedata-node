/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetEpsRevisions200ResponseEpsRevisionInner {
  /**
   * Date of the EPS estimate
   */
  date?: string;
  /**
   * Period of estimation, can be `current_quarter`, `next_quarter`, `current_year`, or `next_year`
   */
  period?: string;
  /**
   * Number of up revisions over the last 7 days
   */
  up_last_week?: number;
  /**
   * Number of up revisions over the last 30 days
   */
  up_last_month?: number;
  /**
   * Number of down revisions over the last 7 days
   */
  down_last_week?: number;
  /**
   * Number of down revisions over the last 30 days
   */
  down_last_month?: number;
}
