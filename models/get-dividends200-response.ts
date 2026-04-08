/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetDividends200ResponseDividendsInner } from "./get-dividends200-response-dividends-inner";
// May contain unused imports in some cases
// @ts-ignore
import type { GetDividends200ResponseMeta } from "./get-dividends200-response-meta";

export interface GetDividends200Response {
  meta?: GetDividends200ResponseMeta;
  /**
   * List of dividends
   */
  dividends?: Array<GetDividends200ResponseDividendsInner>;
}
