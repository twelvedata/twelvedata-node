/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CommoditiesResponseItem } from "./commodities-response-item";

export interface GetCommodities200Response {
  /**
   * List of commodities
   */
  data?: Array<CommoditiesResponseItem>;
  /**
   * Response status
   */
  status?: string;
}
