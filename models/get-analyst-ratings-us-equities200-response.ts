/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetAnalystRatingsLight200ResponseMeta } from "./get-analyst-ratings-light200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetAnalystRatingsUsEquities200ResponseRatingsInner } from "./get-analyst-ratings-us-equities200-response-ratings-inner";

export interface GetAnalystRatingsUsEquities200Response {
  meta?: GetAnalystRatingsLight200ResponseMeta;
  /**
   * List of analyst ratings
   */
  ratings?: Array<GetAnalystRatingsUsEquities200ResponseRatingsInner>;
  /**
   * Response status
   */
  status?: string;
}
