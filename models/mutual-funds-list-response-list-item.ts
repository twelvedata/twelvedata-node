/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface MutualFundsListResponseListItem {
  /**
   * Fund symbol ticker
   */
  symbol?: string;
  /**
   * Fund name
   */
  name?: string;
  /**
   * Country of fund incorporation
   */
  country?: string;
  /**
   * Investment company that manages the fund
   */
  fund_family?: string;
  /**
   * Type of fund
   */
  fund_type?: string;
  /**
   * Performance rating from `0` to `5`
   */
  performance_rating?: number;
  /**
   * Risk rating from `0` to `5`
   */
  risk_rating?: number;
  /**
   * Currency code in which the fund is denominated
   */
  currency?: string;
  /**
   * Exchange name where the fund is listed
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
}
