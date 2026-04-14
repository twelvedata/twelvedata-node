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
 * @interface GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner
 */
export interface GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner {
  /**
   * Rating of bond holding of a fund from AAA to below B
   * @type {string}
   * @memberof GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner
   */
  grade?: string;
  /**
   * Weight of bond holding in fund portfolio
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner
   */
  weight?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner(
  value: object,
): value is GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner {
  return true;
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner {
  return GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner {
  if (json == null) {
    return json;
  }
  return {
    grade: json["grade"] == null ? undefined : json["grade"],
    weight: json["weight"] == null ? undefined : json["weight"],
  };
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerToJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner {
  return GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerToJSONTyped(
  value?: GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    grade: value["grade"],
    weight: value["weight"],
  };
}
