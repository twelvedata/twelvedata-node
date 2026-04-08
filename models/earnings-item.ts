/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface EarningsItem {
  /**
   * Date of earning release
   */
  date?: string;
  /**
   * Time of earning release, can be either of the following values: `Pre Market`, `After Hours`, `Time Not Supplied`
   */
  time?: string;
  /**
   * Analyst estimate of the future company earning
   */
  eps_estimate?: number;
  /**
   * Actual value of reported earning
   */
  eps_actual?: number;
  /**
   * Delta between `eps_actual` and `eps_estimate`
   */
  difference?: number;
  /**
   * Surprise in the percentage of the `eps_actual` related to `eps_estimate`
   */
  surprise_prc?: number;
}
