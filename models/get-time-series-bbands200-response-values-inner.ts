/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetTimeSeriesBBands200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * Upper band value
   */
  upper_band?: string;
  /**
   * Middle band value
   */
  middle_band?: string;
  /**
   * Lower band value
   */
  lower_band?: string;
}
