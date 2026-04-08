/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface ETFsListResponseItem {
  /**
   * Instrument symbol (ticker)
   */
  symbol?: string;
  /**
   * Full name of the fund
   */
  name?: string;
  /**
   * Country of fund incorporation
   */
  country?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Investment company that manages the fund
   */
  fund_family?: string;
  /**
   * Type of fund
   */
  fund_type?: string;
}
