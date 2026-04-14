/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics } from "./GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics";
import {
  GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsFromJSON,
  GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsToJSON,
  GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics";
import type { GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner } from "./GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner";
import {
  GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerFromJSON,
  GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerToJSON,
  GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner";

/**
 * Risk and volatility statistics of the fund and its category over different periods
 * @export
 * @interface ResponseMutualFundWorldRisk
 */
export interface ResponseMutualFundWorldRisk {
  /**
   * Volatility statistics of the fund
   * @type {Array<GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner>}
   * @memberof ResponseMutualFundWorldRisk
   */
  volatilityMeasures?: Array<GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner>;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics}
   * @memberof ResponseMutualFundWorldRisk
   */
  valuationMetrics?: GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics;
}

/**
 * Check if a given object implements the ResponseMutualFundWorldRisk interface.
 */
export function instanceOfResponseMutualFundWorldRisk(
  value: object,
): value is ResponseMutualFundWorldRisk {
  return true;
}

export function ResponseMutualFundWorldRiskFromJSON(
  json: any,
): ResponseMutualFundWorldRisk {
  return ResponseMutualFundWorldRiskFromJSONTyped(json, false);
}

export function ResponseMutualFundWorldRiskFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponseMutualFundWorldRisk {
  if (json == null) {
    return json;
  }
  return {
    volatilityMeasures:
      json["volatility_measures"] == null
        ? undefined
        : (json["volatility_measures"] as Array<any>).map(
            GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerFromJSON,
          ),
    valuationMetrics:
      json["valuation_metrics"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsFromJSON(
            json["valuation_metrics"],
          ),
  };
}

export function ResponseMutualFundWorldRiskToJSON(
  json: any,
): ResponseMutualFundWorldRisk {
  return ResponseMutualFundWorldRiskToJSONTyped(json, false);
}

export function ResponseMutualFundWorldRiskToJSONTyped(
  value?: ResponseMutualFundWorldRisk | null,
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
            GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerToJSON,
          ),
    valuation_metrics:
      GetMutualFundsWorld200ResponseMutualFundRiskValuationMetricsToJSON(
        value["valuationMetrics"],
      ),
  };
}
