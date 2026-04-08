/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { GetEarningsCalendar200ResponseEarningsValueInner } from "./get-earnings-calendar200-response-earnings-value-inner";

export interface GetEarningsCalendar200Response {
  /**
   * Map of dates to earnings data
   */
  earnings?: {
    [key: string]: Array<GetEarningsCalendar200ResponseEarningsValueInner>;
  };
  /**
   * Response status
   */
  status?: string;
}
