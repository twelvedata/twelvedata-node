/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetRecommendations200ResponseTrends2MonthsAgo } from "./get-recommendations200-response-trends2-months-ago";
// May contain unused imports in some cases
// @ts-ignore
import type { GetRecommendations200ResponseTrends3MonthsAgo } from "./get-recommendations200-response-trends3-months-ago";
// May contain unused imports in some cases
// @ts-ignore
import type { GetRecommendations200ResponseTrendsCurrentMonth } from "./get-recommendations200-response-trends-current-month";
// May contain unused imports in some cases
// @ts-ignore
import type { GetRecommendations200ResponseTrendsPreviousMonth } from "./get-recommendations200-response-trends-previous-month";

/**
 * Analyst recommendations trends
 */
export interface GetRecommendations200ResponseTrends {
  current_month?: GetRecommendations200ResponseTrendsCurrentMonth;
  previous_month?: GetRecommendations200ResponseTrendsPreviousMonth;
  "2_months_ago"?: GetRecommendations200ResponseTrends2MonthsAgo;
  "3_months_ago"?: GetRecommendations200ResponseTrends3MonthsAgo;
}
