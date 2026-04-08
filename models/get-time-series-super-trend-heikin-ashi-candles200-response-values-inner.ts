/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * SuperTrend value
   */
  supertrend?: string;
  /**
   * Heikin-Ashi high values
   */
  heikinhighs?: string;
  /**
   * Heikin-Ashi open values
   */
  heikinopens?: string;
  /**
   * Heikin-Ashi close values
   */
  heikincloses?: string;
  /**
   * Heikin-Ashi low values
   */
  heikinlows?: string;
}
