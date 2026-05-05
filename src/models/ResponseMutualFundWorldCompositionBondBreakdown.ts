/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration } from "./GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration";
import {
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationFromJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationToJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration";
import type { GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity } from "./GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity";
import {
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityFromJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityToJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity";
import type { GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner } from "./GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner";
import {
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerFromJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerToJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner";

/**
 * Breakdown of the fund’s bond holdings by maturity, duration, and credit quality
 * @export
 * @interface ResponseMutualFundWorldCompositionBondBreakdown
 */
export interface ResponseMutualFundWorldCompositionBondBreakdown {
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity}
   * @memberof ResponseMutualFundWorldCompositionBondBreakdown
   */
  averageMaturity?: GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity;
  /**
   * Breakdown of the fund’s bond holdings by credit rating and their respective portfolio weights
   * @type {Array<GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner>}
   * @memberof ResponseMutualFundWorldCompositionBondBreakdown
   */
  creditQuality?: Array<GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner>;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration}
   * @memberof ResponseMutualFundWorldCompositionBondBreakdown
   */
  averageDuration?: GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration;
}

/**
 * Check if a given object implements the ResponseMutualFundWorldCompositionBondBreakdown interface.
 */
export function instanceOfResponseMutualFundWorldCompositionBondBreakdown(
  value: object,
): value is ResponseMutualFundWorldCompositionBondBreakdown {
  return true;
}

export function ResponseMutualFundWorldCompositionBondBreakdownFromJSON(
  json: any,
): ResponseMutualFundWorldCompositionBondBreakdown {
  return ResponseMutualFundWorldCompositionBondBreakdownFromJSONTyped(
    json,
    false,
  );
}

export function ResponseMutualFundWorldCompositionBondBreakdownFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponseMutualFundWorldCompositionBondBreakdown {
  if (json == null) {
    return json;
  }
  return {
    averageMaturity:
      json["average_maturity"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityFromJSON(
            json["average_maturity"],
          ),
    creditQuality:
      json["credit_quality"] == null
        ? undefined
        : (json["credit_quality"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerFromJSON,
          ),
    averageDuration:
      json["average_duration"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationFromJSON(
            json["average_duration"],
          ),
  };
}

export function ResponseMutualFundWorldCompositionBondBreakdownToJSON(
  json: any,
): ResponseMutualFundWorldCompositionBondBreakdown {
  return ResponseMutualFundWorldCompositionBondBreakdownToJSONTyped(
    json,
    false,
  );
}

export function ResponseMutualFundWorldCompositionBondBreakdownToJSONTyped(
  value?: ResponseMutualFundWorldCompositionBondBreakdown | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    average_maturity:
      GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturityToJSON(
        value["averageMaturity"],
      ),
    credit_quality:
      value["creditQuality"] == null
        ? undefined
        : (value["creditQuality"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInnerToJSON,
          ),
    average_duration:
      GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDurationToJSON(
        value["averageDuration"],
      ),
  };
}
