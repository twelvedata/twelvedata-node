/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * CountryResponseItem represents details of a country
 * @export
 * @interface CountryResponseItem
 */
export interface CountryResponseItem {
  /**
   * Two-letter country code defined in ISO 3166
   * @type {string}
   * @memberof CountryResponseItem
   */
  iso2?: string;
  /**
   * Three-letter country code defined in ISO 3166
   * @type {string}
   * @memberof CountryResponseItem
   */
  iso3?: string;
  /**
   * Numeric country code defined in ISO 3166
   * @type {string}
   * @memberof CountryResponseItem
   */
  numeric?: string;
  /**
   * The full name of country
   * @type {string}
   * @memberof CountryResponseItem
   */
  name?: string;
  /**
   * Official name of country
   * @type {string}
   * @memberof CountryResponseItem
   */
  officialName?: string;
  /**
   * Capital of country
   * @type {string}
   * @memberof CountryResponseItem
   */
  capital?: string;
  /**
   * Currency of country
   * @type {string}
   * @memberof CountryResponseItem
   */
  currency?: string;
}

/**
 * Check if a given object implements the CountryResponseItem interface.
 */
export function instanceOfCountryResponseItem(
  value: object,
): value is CountryResponseItem {
  return true;
}

export function CountryResponseItemFromJSON(json: any): CountryResponseItem {
  return CountryResponseItemFromJSONTyped(json, false);
}

export function CountryResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CountryResponseItem {
  if (json == null) {
    return json;
  }
  return {
    iso2: json["iso2"] == null ? undefined : json["iso2"],
    iso3: json["iso3"] == null ? undefined : json["iso3"],
    numeric: json["numeric"] == null ? undefined : json["numeric"],
    name: json["name"] == null ? undefined : json["name"],
    officialName:
      json["official_name"] == null ? undefined : json["official_name"],
    capital: json["capital"] == null ? undefined : json["capital"],
    currency: json["currency"] == null ? undefined : json["currency"],
  };
}

export function CountryResponseItemToJSON(json: any): CountryResponseItem {
  return CountryResponseItemToJSONTyped(json, false);
}

export function CountryResponseItemToJSONTyped(
  value?: CountryResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    iso2: value["iso2"],
    iso3: value["iso3"],
    numeric: value["numeric"],
    name: value["name"],
    official_name: value["officialName"],
    capital: value["capital"],
    currency: value["currency"],
  };
}
