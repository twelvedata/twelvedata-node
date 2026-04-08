/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetApiUsage200Response {
  /**
   * Current timestamp in UTC timezone
   */
  timestamp?: string;
  /**
   * Number of requests made in last minute
   */
  current_usage?: number;
  /**
   * Your personal API limit (requests/minute) depending on the plan
   */
  plan_limit?: number;
  /**
   * Plan category name
   */
  plan_category?: string;
}
