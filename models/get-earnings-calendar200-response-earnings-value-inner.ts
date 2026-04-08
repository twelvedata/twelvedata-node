/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetEarningsCalendar200ResponseEarningsValueInner {
  /**
   * Instrument symbol (ticker)
   */
  symbol?: string;
  /**
   * Full name of instrument
   */
  name?: string;
  /**
   * Currency in which instrument is traded by ISO 4217 standard
   */
  currency?: string;
  /**
   * Exchange where instrument is traded
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Country where exchange is located
   */
  country?: string;
  /**
   * Can be either of the following values: `Pre Market`, `After Hours`, `Time Not Supplied`
   */
  time?: string;
  /**
   * Analyst estimate of the future company earning
   */
  eps_estimate?: number;
  /**
   * Actual value of reported earning
   */
  eps_actual?: number;
  /**
   * Delta between `eps_actual` and `eps_estimate`
   */
  difference?: number;
  /**
   * Surprise in percentage of the `eps_actual` related to `eps_estimate`
   */
  surprise_prc?: number;
}
