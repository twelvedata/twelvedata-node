/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { EtfResponseItemAccess } from "./etf-response-item-access";

/**
 * EtfResponseItem represents details of an ETF
 */
export interface EtfResponseItem {
  /**
   * Instrument symbol (ticker)
   */
  symbol?: string;
  /**
   * Full name of the ETF
   */
  name?: string;
  /**
   * Currency of the ETF according to the ISO 4217 standard
   */
  currency?: string;
  /**
   * Exchange where the ETF is traded
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Country where the ETF is located
   */
  country?: string;
  /**
   * Financial instrument global identifier (FIGI)
   */
  figi_code?: string;
  /**
   * Classification of Financial Instruments (CFI)
   */
  cfi_code?: string;
  /**
   * International securities identification number (ISIN)
   */
  isin?: string;
  /**
   * A unique nine-character alphanumeric code used to identify financial securities, ensuring accurate data retrieval for the specified asset
   */
  cusip?: string;
  access?: EtfResponseItemAccess;
}
