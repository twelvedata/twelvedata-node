/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { BondsResponseItemAccess } from "./bonds-response-item-access";

/**
 * BondResponseItem represents details of a bond
 */
export interface BondResponseItem {
  /**
   * Bond symbol
   */
  symbol?: string;
  /**
   * Full name of the bond
   */
  name?: string;
  /**
   * Country where the bond is located
   */
  country?: string;
  /**
   * Currency of the bond according to the ISO 4217 standard
   */
  currency?: string;
  /**
   * Exchange where the bond is traded
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Type of the bond
   */
  type?: string;
  access?: BondsResponseItemAccess;
}
