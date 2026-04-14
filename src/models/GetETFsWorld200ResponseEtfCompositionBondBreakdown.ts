/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner } from "./GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner";
import {
  GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerFromJSON,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerFromJSONTyped,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerToJSON,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerToJSONTyped,
} from "./GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner";
import type { GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity } from "./GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity";
import {
  GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityFromJSON,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityFromJSONTyped,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityToJSON,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityToJSONTyped,
} from "./GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity";
import type { GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration } from "./GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration";
import {
  GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationFromJSON,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationFromJSONTyped,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationToJSON,
  GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationToJSONTyped,
} from "./GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration";

/**
 * Breakdown of the fund’s portfolio by bond holding characteristics
 * @export
 * @interface GetETFsWorld200ResponseEtfCompositionBondBreakdown
 */
export interface GetETFsWorld200ResponseEtfCompositionBondBreakdown {
  /**
   *
   * @type {GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity}
   * @memberof GetETFsWorld200ResponseEtfCompositionBondBreakdown
   */
  averageMaturity?: GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity;
  /**
   *
   * @type {GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration}
   * @memberof GetETFsWorld200ResponseEtfCompositionBondBreakdown
   */
  averageDuration?: GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration;
  /**
   * Breakdown of the fund’s bond holdings by credit rating and their respective portfolio weights
   * @type {Array<GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner>}
   * @memberof GetETFsWorld200ResponseEtfCompositionBondBreakdown
   */
  creditQuality?: Array<GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner>;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfCompositionBondBreakdown interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfCompositionBondBreakdown(
  value: object,
): value is GetETFsWorld200ResponseEtfCompositionBondBreakdown {
  return true;
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionBondBreakdown {
  return GetETFsWorld200ResponseEtfCompositionBondBreakdownFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfCompositionBondBreakdown {
  if (json == null) {
    return json;
  }
  return {
    averageMaturity:
      json["average_maturity"] == null
        ? undefined
        : GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityFromJSON(
            json["average_maturity"],
          ),
    averageDuration:
      json["average_duration"] == null
        ? undefined
        : GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationFromJSON(
            json["average_duration"],
          ),
    creditQuality:
      json["credit_quality"] == null
        ? undefined
        : (json["credit_quality"] as Array<any>).map(
            GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerFromJSON,
          ),
  };
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownToJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionBondBreakdown {
  return GetETFsWorld200ResponseEtfCompositionBondBreakdownToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionBondBreakdownToJSONTyped(
  value?: GetETFsWorld200ResponseEtfCompositionBondBreakdown | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    average_maturity:
      GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturityToJSON(
        value["averageMaturity"],
      ),
    average_duration:
      GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDurationToJSON(
        value["averageDuration"],
      ),
    credit_quality:
      value["creditQuality"] == null
        ? undefined
        : (value["creditQuality"] as Array<any>).map(
            GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInnerToJSON,
          ),
  };
}
