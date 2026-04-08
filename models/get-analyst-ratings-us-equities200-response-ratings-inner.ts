/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetAnalystRatingsUsEquities200ResponseRatingsInner {
  /**
   * Date when the rating was released
   */
  date?: string;
  /**
   * Firm that issued the ranking
   */
  firm?: string;
  /**
   * Name of an analyst
   */
  analyst_name?: string;
  /**
   * Defines the action of the firm to ranking, could be `Maintains`, `Upgrade`, `Downgrade`, `Initiates`, `Reiterates`, `Assumes`, or `Reinstates`
   */
  rating_change?: string;
  /**
   * Current firm\'s ranking of the instrument
   */
  rating_current?: string;
  /**
   * Prior firm\'s ranking of the instrument
   */
  rating_prior?: string;
  /**
   * Time when the rating was released or updated
   */
  time?: string;
  /**
   * Action that firm took towards target price
   */
  action_price_target?: string;
  /**
   * Current firm\'s price target for the instrument
   */
  price_target_current?: number;
  /**
   * Prior firm\'s price target for the instrument
   */
  price_target_prior?: number;
}
