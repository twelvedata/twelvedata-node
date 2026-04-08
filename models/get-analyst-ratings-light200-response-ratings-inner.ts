/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface GetAnalystRatingsLight200ResponseRatingsInner {
  /**
   * Date when the rating was released
   */
  date?: string;
  /**
   * Firm that issued the ranking
   */
  firm?: string;
  /**
   * Defines the action of the firm to ranking, could be `Maintains`, `Upgrade`, `Downgrade`, `Initiates` or `Reiterates`
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
}
