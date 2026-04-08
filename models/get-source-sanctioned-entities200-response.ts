/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { ResponseSanctionedEntitiy } from "./response-sanctioned-entitiy";

export interface GetSourceSanctionedEntities200Response {
  /**
   * List of sanctioned entities
   */
  sanctions?: Array<ResponseSanctionedEntitiy>;
  /**
   * Total number of sanctioned entities
   */
  count?: number;
  /**
   * Response status
   */
  status?: string;
}
