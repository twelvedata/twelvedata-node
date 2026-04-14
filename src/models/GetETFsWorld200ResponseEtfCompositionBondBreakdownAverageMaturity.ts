/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Average credit rating of bond holding of a fund
 * @export
 * @interface GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity
 */
export interface GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity {
  /**
   * Average maturity of bond holding of a fund
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity
   */
  fund?: number;
  /**
   * Average maturity of bond holding of funds in the same category
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity
   */
  category?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity(
  value: object,
): value is GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity {
  return true;
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity {
  return GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity {
  if (json == null) {
    return json;
  }
  return {
    fund: json["fund"] == null ? undefined : json["fund"],
    category: json["category"] == null ? undefined : json["category"],
  };
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityToJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity {
  return GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityToJSONTyped(
  value?: GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity | null,
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
