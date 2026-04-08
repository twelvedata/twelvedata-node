/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export interface PressRelease {
  /**
   * Press release unique identifier
   */
  id?: string;
  /**
   * Press release date in ISO 8601 format
   */
  datetime?: string;
  /**
   * Press release title
   */
  title?: string;
  /**
   * Press release body in html format
   */
  body?: string;
  /**
   * Custom style applied to the release
   */
  style?: string;
  /**
   * Press release language codes
   */
  language?: Array<string>;
}
