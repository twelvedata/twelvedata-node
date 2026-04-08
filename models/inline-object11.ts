/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject11Meta } from "./inline-object11-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject11ValuesInner } from "./inline-object11-values-inner";

export interface InlineObject11 {
  meta?: InlineObject11Meta;
  /**
   * Array of time series data points
   */
  values?: Array<InlineObject11ValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
