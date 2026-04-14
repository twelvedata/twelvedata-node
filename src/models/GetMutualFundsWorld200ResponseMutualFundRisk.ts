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
 * Risk metrics of a mutual fund
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundRisk
 */
export interface GetMutualFundsWorld200ResponseMutualFundRisk {
  /**
   * Volatility statistics of the fund
   * @type {Array<GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner>}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRisk
   */
  volatilityMeasures?: Array<GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner>;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRisk
   */
  valuationMetrics?: GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundRisk interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundRisk(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundRisk {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundRiskFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundRisk {
  return GetMutualFundsWorld200ResponseMutualFundRiskFromJSONTyped(json, false);
}

export function GetMutualFundsWorld200ResponseMutualFundRiskFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundRisk {
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

export function GetMutualFundsWorld200ResponseMutualFundRiskToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundRisk {
  return GetMutualFundsWorld200ResponseMutualFundRiskToJSONTyped(json, false);
}

export function GetMutualFundsWorld200ResponseMutualFundRiskToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundRisk | null,
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
