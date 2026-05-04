/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Tax information data containing the tax indicator for the requested instrument
 * @export
 * @interface GetTaxInfo200ResponseData
 */
export interface GetTaxInfo200ResponseData {
  /**
   * The instrument tax indicator, can be `null`, `us_1446f`, `spanish_ftt`, `uk_stamp_duty`, `hk_stamp_duty`, `french_ftt` or `italian_ftt`
   * @type {string}
   * @memberof GetTaxInfo200ResponseData
   */
  taxIndicator: string;
}

/**
 * Check if a given object implements the GetTaxInfo200ResponseData interface.
 */
export function instanceOfGetTaxInfo200ResponseData(
  value: object,
): value is GetTaxInfo200ResponseData {
  if (!("taxIndicator" in value) || value["taxIndicator"] === undefined)
    return false;
  return true;
}

export function GetTaxInfo200ResponseDataFromJSON(
  json: any,
): GetTaxInfo200ResponseData {
  return GetTaxInfo200ResponseDataFromJSONTyped(json, false);
}

export function GetTaxInfo200ResponseDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTaxInfo200ResponseData {
  if (json == null) {
    return json;
  }
  return {
    taxIndicator: json["tax_indicator"],
  };
}

export function GetTaxInfo200ResponseDataToJSON(
  json: any,
): GetTaxInfo200ResponseData {
  return GetTaxInfo200ResponseDataToJSONTyped(json, false);
}

export function GetTaxInfo200ResponseDataToJSONTyped(
  value?: GetTaxInfo200ResponseData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    tax_indicator: value["taxIndicator"],
  };
}
