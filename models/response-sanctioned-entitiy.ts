/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { ResponseSanctionItem } from "./response-sanction-item";

export interface ResponseSanctionedEntitiy {
  /**
   * The instrument symbol ticker
   */
  symbol?: string;
  /**
   * The instrument name
   */
  name?: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Country name
   */
  country?: string;
  sanction?: ResponseSanctionItem;
}
