/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetEarningsEstimate200ResponseMeta } from "./get-earnings-estimate200-response-meta";
// May contain unused imports in some cases
// @ts-ignore
import type { GetEpsRevisions200ResponseEpsRevisionInner } from "./get-eps-revisions200-response-eps-revision-inner";

export interface GetEpsRevisions200Response {
  meta?: GetEarningsEstimate200ResponseMeta;
  /**
   * EPS revision data
   */
  eps_revision?: Array<GetEpsRevisions200ResponseEpsRevisionInner>;
  /**
   * Status of the response
   */
  status?: string;
}
