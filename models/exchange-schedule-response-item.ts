/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { ExchangeScheduleSession } from "./exchange-schedule-session";

/**
 * ExchangeScheduleResponseItem represents details of an exchange schedule
 */
export interface ExchangeScheduleResponseItem {
  /**
   * Official name of exchange
   */
  title?: string;
  /**
   * Name of exchange
   */
  name?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  code?: string;
  /**
   * Country to which stock exchange belongs to
   */
  country?: string;
  /**
   * Time zone where exchange is located
   */
  time_zone?: string;
  /**
   * Exchange trading hours
   */
  sessions?: Array<ExchangeScheduleSession>;
}
