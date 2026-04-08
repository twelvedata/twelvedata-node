/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject17Meta } from "./inline-object17-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject17ValuesInner } from "./inline-object17-values-inner";

export interface InlineObject17 {
  meta?: InlineObject17Meta;
  /**
   * Array of time series data points
   */
  values?: Array<InlineObject17ValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
