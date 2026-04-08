/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetRecommendations200ResponseMeta } from "./get-recommendations200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetRecommendations200ResponseTrends } from "./get-recommendations200-response-trends";

export interface GetRecommendations200Response {
  meta?: GetRecommendations200ResponseMeta;
  trends?: GetRecommendations200ResponseTrends;
  /**
   * Rating from 0 to 10 represents overall analysts\' recommendation. 0 to 2 - strong sell, 2 to 4 - sell, 4 to 6 - hold, 6 to 8 - buy, 8 to 10 - strong buy.
   */
  rating?: number;
  /**
   * Response status
   */
  status?: string;
}
