/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetETFsWorld200ResponseEtfRiskValuationMetrics } from "./GetETFsWorld200ResponseEtfRiskValuationMetrics";
import {
  GetETFsWorld200ResponseEtfRiskValuationMetricsFromJSON,
  GetETFsWorld200ResponseEtfRiskValuationMetricsFromJSONTyped,
  GetETFsWorld200ResponseEtfRiskValuationMetricsToJSON,
  GetETFsWorld200ResponseEtfRiskValuationMetricsToJSONTyped,
} from "./GetETFsWorld200ResponseEtfRiskValuationMetrics";
import type { GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner } from "./GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner";
import {
  GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerFromJSON,
  GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerFromJSONTyped,
  GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerToJSON,
  GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerToJSONTyped,
} from "./GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner";

/**
 * Risk metrics of a etf
 * @export
 * @interface GetETFsWorldRisk200ResponseEtfRisk
 */
export interface GetETFsWorldRisk200ResponseEtfRisk {
  /**
   * Risk and volatility statistics of the fund and its category over different periods
   * @type {Array<GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner>}
   * @memberof GetETFsWorldRisk200ResponseEtfRisk
   */
  volatilityMeasures?: Array<GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner>;
  /**
   *
   * @type {GetETFsWorld200ResponseEtfRiskValuationMetrics}
   * @memberof GetETFsWorldRisk200ResponseEtfRisk
   */
  valuationMetrics?: GetETFsWorld200ResponseEtfRiskValuationMetrics;
}

/**
 * Check if a given object implements the GetETFsWorldRisk200ResponseEtfRisk interface.
 */
export function instanceOfGetETFsWorldRisk200ResponseEtfRisk(
  value: object,
): value is GetETFsWorldRisk200ResponseEtfRisk {
  return true;
}

export function GetETFsWorldRisk200ResponseEtfRiskFromJSON(
  json: any,
): GetETFsWorldRisk200ResponseEtfRisk {
  return GetETFsWorldRisk200ResponseEtfRiskFromJSONTyped(json, false);
}

export function GetETFsWorldRisk200ResponseEtfRiskFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorldRisk200ResponseEtfRisk {
  if (json == null) {
    return json;
  }
  return {
    volatilityMeasures:
      json["volatility_measures"] == null
        ? undefined
        : (json["volatility_measures"] as Array<any>).map(
            GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerFromJSON,
          ),
    valuationMetrics:
      json["valuation_metrics"] == null
        ? undefined
        : GetETFsWorld200ResponseEtfRiskValuationMetricsFromJSON(
            json["valuation_metrics"],
          ),
  };
}

export function GetETFsWorldRisk200ResponseEtfRiskToJSON(
  json: any,
): GetETFsWorldRisk200ResponseEtfRisk {
  return GetETFsWorldRisk200ResponseEtfRiskToJSONTyped(json, false);
}

export function GetETFsWorldRisk200ResponseEtfRiskToJSONTyped(
  value?: GetETFsWorldRisk200ResponseEtfRisk | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    volatility_measures:
      value["volatilityMeasures"] == null
        ? undefined
        : (value["volatilityMeasures"] as Array<any>).map(
            GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerToJSON,
          ),
    valuation_metrics: GetETFsWorld200ResponseEtfRiskValuationMetricsToJSON(
      value["valuationMetrics"],
    ),
  };
}
