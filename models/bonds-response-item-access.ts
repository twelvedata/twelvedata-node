/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Info on which plan symbol is available (displayed then `show_plan` is `true`)
 */
export interface BondsResponseItemAccess {
  /**
   * Level of access to the symbol
   */
  global?: string;
  /**
   * The individual plan name for the symbol
   */
  plan?: string;
  /**
   * The business plan name for the symbol
   */
  plan_business?: string;
}
