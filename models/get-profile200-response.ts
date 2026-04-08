/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetProfile200Response {
  /**
   * Ticker of the company
   */
  symbol?: string;
  /**
   * Name of the company
   */
  name?: string;
  /**
   * Exchange name where the company is listed
   */
  exchange?: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Sector at which the company operates
   */
  sector?: string;
  /**
   * Industry at which company operates
   */
  industry?: string;
  /**
   * Number of employees in the company
   */
  employees?: number;
  /**
   * Website of the company
   */
  website?: string;
  /**
   * Description of the company activities
   */
  description?: string;
  /**
   * Issue type of the stock
   */
  type?: string;
  /**
   * Name of the CEO of the company
   */
  CEO?: string;
  /**
   * Street address of the company if presented
   */
  address?: string;
  /**
   * Secondary address of the company if presented
   */
  address2?: string;
  /**
   * City of the company if presented
   */
  city?: string;
  /**
   * ZIP code of the company if presented
   */
  zip?: string;
  /**
   * State of the company if presented
   */
  state?: string;
  /**
   * Country of the company if presented
   */
  country?: string;
  /**
   * Phone number of the company if presented
   */
  phone?: string;
}
