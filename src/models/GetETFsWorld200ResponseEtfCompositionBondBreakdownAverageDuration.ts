/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Average duration of bond holding of a fund
 * @export
 * @interface GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration
 */
export interface GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration {
  /**
   * Average duration of bond holding of a fund
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration
   */
  fund?: number;
  /**
   * Average duration of bond holding of funds in the same category
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration
   */
  category?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration(
  value: object,
): value is GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration {
  return true;
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration {
  return GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration {
  if (json == null) {
    return json;
  }
  return {
    fund: json["fund"] == null ? undefined : json["fund"],
    category: json["category"] == null ? undefined : json["category"],
  };
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationToJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration {
  return GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationToJSONTyped(
  value?: GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    fund: value["fund"],
    category: value["category"],
  };
}
