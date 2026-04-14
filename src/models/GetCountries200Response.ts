/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { CountryResponseItem } from "./CountryResponseItem";
import {
  CountryResponseItemFromJSON,
  CountryResponseItemFromJSONTyped,
  CountryResponseItemToJSON,
  CountryResponseItemToJSONTyped,
} from "./CountryResponseItem";

/**
 *
 * @export
 * @interface GetCountries200Response
 */
export interface GetCountries200Response {
  /**
   * List of countries with their ISO codes, names, capital, and currency
   * @type {Array<CountryResponseItem>}
   * @memberof GetCountries200Response
   */
  data: Array<CountryResponseItem>;
}

/**
 * Check if a given object implements the GetCountries200Response interface.
 */
export function instanceOfGetCountries200Response(
  value: object,
): value is GetCountries200Response {
  if (!("data" in value) || value["data"] === undefined) return false;
  return true;
}

export function GetCountries200ResponseFromJSON(
  json: any,
): GetCountries200Response {
  return GetCountries200ResponseFromJSONTyped(json, false);
}

export function GetCountries200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetCountries200Response {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(CountryResponseItemFromJSON),
  };
}

export function GetCountries200ResponseToJSON(
  json: any,
): GetCountries200Response {
  return GetCountries200ResponseToJSONTyped(json, false);
}

export function GetCountries200ResponseToJSONTyped(
  value?: GetCountries200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data: (value["data"] as Array<any>).map(CountryResponseItemToJSON),
  };
}
