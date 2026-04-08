/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { SymbolSearchResponseItemAccess } from "./symbol-search-response-item-access";

/**
 * SymbolSearchResponseItem represents details of a symbol search result
 */
export interface SymbolSearchResponseItem {
  /**
   * Ticker symbol of instrument
   */
  symbol?: string;
  /**
   * Name of exchange
   */
  instrument_name?: string;
  /**
   * Exchange where instrument is traded
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Time zone where exchange is located
   */
  exchange_timezone?: string;
  /**
   * Type of instrument
   */
  instrument_type?: string;
  /**
   * Country to which stock exchange belongs to
   */
  country?: string;
  /**
   * Currency in which the instrument is traded
   */
  currency?: string;
  access?: SymbolSearchResponseItemAccess;
}
