/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject14Meta } from "./inline-object14-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { InlineObject14ValuesInner } from "./inline-object14-values-inner";

export interface InlineObject14 {
  meta?: InlineObject14Meta;
  /**
   * Array of time series data points
   */
  values?: Array<InlineObject14ValuesInner>;
  /**
   * Response status
   */
  status?: string;
}
