/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject16Meta } from "./inline-object16-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject16ValuesInner } from "./inline-object16-values-inner";

export interface InlineObject16 {
  meta?: InlineObject16Meta;
  /**
   * Array of time series data points
   */
  values?: Array<InlineObject16ValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
