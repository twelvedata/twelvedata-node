/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { EtfResponseItem } from "./etf-response-item";

export interface GetEtf200Response {
  /**
   * List of ETFs
   */
  data?: Array<EtfResponseItem>;
  /**
   * Response status
   */
  status?: string;
}
