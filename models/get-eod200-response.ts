/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetEod200Response {
  /**
   * Symbol passed
   */
  symbol?: string;
  /**
   * Exchange where instrument is traded
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  mic_code?: string;
  /**
   * Currency in which instrument is denominated
   */
  currency?: string;
  /**
   * Datetime in defined timezone referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * The most recent end of day close price
   */
  close?: string;
}
