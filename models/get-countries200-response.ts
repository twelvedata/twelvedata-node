/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { CountryResponseItem } from "./country-response-item";

export interface GetCountries200Response {
  /**
   * List of countries with their ISO codes, names, capital, and currency
   */
  data: Array<CountryResponseItem>;
}
