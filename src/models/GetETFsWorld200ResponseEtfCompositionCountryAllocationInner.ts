/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetETFsWorld200ResponseEtfCompositionCountryAllocationInner
 */
export interface GetETFsWorld200ResponseEtfCompositionCountryAllocationInner {
  /**
   * Country name
   * @type {string}
   * @memberof GetETFsWorld200ResponseEtfCompositionCountryAllocationInner
   */
  country?: string;
  /**
   * Percentages of a fund's net assets distributed to securities of the country
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionCountryAllocationInner
   */
  allocation?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfCompositionCountryAllocationInner interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfCompositionCountryAllocationInner(
  value: object,
): value is GetETFsWorld200ResponseEtfCompositionCountryAllocationInner {
  return true;
}

export function GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionCountryAllocationInner {
  return GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfCompositionCountryAllocationInner {
  if (json == null) {
    return json;
  }
  return {
    country: json["country"] == null ? undefined : json["country"],
    allocation: json["allocation"] == null ? undefined : json["allocation"],
  };
}

export function GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerToJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionCountryAllocationInner {
  return GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionCountryAllocationInnerToJSONTyped(
  value?: GetETFsWorld200ResponseEtfCompositionCountryAllocationInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    country: value["country"],
    allocation: value["allocation"],
  };
}
