/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { ExchangesResponseItemAccess } from "./exchanges-response-item-access";

/**
 * ExchangesResponseItem represents details of an exchange
 */
export interface ExchangesResponseItem {
  /**
   * Title of exchange
   */
  title?: string;
  /**
   * Name of exchange
   */
  name?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  code?: string;
  /**
   * Country to which stock exchange belongs to
   */
  country?: string;
  /**
   * Time zone where exchange is located
   */
  timezone?: string;
  access?: ExchangesResponseItemAccess;
}
