/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetTimeSeriesHtPhasor200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * In_phase value
   */
  in_phase?: string;
  /**
   * Quadrature value
   */
  quadrature?: string;
}
