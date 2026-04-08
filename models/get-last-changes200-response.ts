/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetLastChanges200ResponsePagination } from "./get-last-changes200-response-pagination";
// May contain unused imports in some cases
// @ts-ignore
import type { LastChangeResponseItem } from "./last-change-response-item";

export interface GetLastChanges200Response {
  pagination?: GetLastChanges200ResponsePagination;
  /**
   * Data contains the list of last changes
   */
  data?: Array<LastChangeResponseItem>;
}
