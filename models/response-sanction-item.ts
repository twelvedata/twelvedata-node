/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { ResponseSanctionItemList } from "./response-sanction-item-list";

export interface ResponseSanctionItem {
  /**
   * The sanction source
   */
  source?: string;
  /**
   * The sanction program
   */
  program?: string;
  /**
   * Notes for the sanction
   */
  notes?: string;
  /**
   * Sanction lists
   */
  lists?: Array<ResponseSanctionItemList>;
}
