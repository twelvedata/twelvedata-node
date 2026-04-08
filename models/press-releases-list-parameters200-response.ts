/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { PressRelease } from "./press-release";

export interface PressReleasesListParameters200Response {
  /**
   * List of press releases
   */
  press_releases?: Array<PressRelease>;
  /**
   * Response status
   */
  status?: string;
}
