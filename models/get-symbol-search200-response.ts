/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { SymbolSearchResponseItem } from "./symbol-search-response-item";

export interface GetSymbolSearch200Response {
  /**
   * List of symbols matching the search criteria
   */
  data?: Array<SymbolSearchResponseItem>;
  /**
   * Status of the response
   */
  status?: string;
}
