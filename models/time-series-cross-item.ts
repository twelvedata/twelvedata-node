/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * TimeSeriesCrossItem represents a single data point in the time series
 */
export interface TimeSeriesCrossItem {
  /**
   * Datetime at local exchange time referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * Price at the opening of the current bar
   */
  open?: string;
  /**
   * Highest price which occurred during the current bar
   */
  high?: string;
  /**
   * Lowest price which occurred during the current bar
   */
  low?: string;
  /**
   * Close price at the end of the bar
   */
  close?: string;
}
