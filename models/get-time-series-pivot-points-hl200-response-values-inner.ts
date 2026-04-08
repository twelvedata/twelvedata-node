/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetTimeSeriesPivotPointsHL200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   */
  datetime?: string;
  /**
   * `1` if it is a high pivot point, otherwise `0`
   */
  pivot_point_h?: number;
  /**
   * `1` if it is a low pivot point, otherwise `0`
   */
  pivot_point_l?: number;
}
