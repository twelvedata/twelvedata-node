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
 * @interface GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
 */
export interface GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner {
  /**
   * Period of a measure
   * @type {string}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  period?: string;
  /**
   * Alpha score of a fund
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  alpha?: number;
  /**
   * Average alpha score of a fund's category
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  alphaCategory?: number;
  /**
   * Beta score of a fund
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  beta?: number;
  /**
   * Average beta score of a fund's category
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  betaCategory?: number;
  /**
   * Mean annual return of a fund
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  meanAnnualReturn?: number;
  /**
   * Average mean annual return of a fund's category
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  meanAnnualReturnCategory?: number;
  /**
   * R-squared metric of a fund
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  rSquared?: number;
  /**
   * Average r-squared metric of a fund's category
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  rSquaredCategory?: number;
  /**
   * Standard deviation of a fund
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  std?: number;
  /**
   * Average standard deviation of a fund's category
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  stdCategory?: number;
  /**
   * Sharpe ratio of a fund
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  sharpeRatio?: number;
  /**
   * Average sharpe ratio of a fund's category
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  sharpeRatioCategory?: number;
  /**
   * Treynor ratio of a fund
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  treynorRatio?: number;
  /**
   * Average treynor ratio of a fund's category
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner
   */
  treynorRatioCategory?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner(
  value: object,
): value is GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner {
  return true;
}

export function GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner {
  return GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner {
  if (json == null) {
    return json;
  }
  return {
    period: json["period"] == null ? undefined : json["period"],
    alpha: json["alpha"] == null ? undefined : json["alpha"],
    alphaCategory:
      json["alpha_category"] == null ? undefined : json["alpha_category"],
    beta: json["beta"] == null ? undefined : json["beta"],
    betaCategory:
      json["beta_category"] == null ? undefined : json["beta_category"],
    meanAnnualReturn:
      json["mean_annual_return"] == null
        ? undefined
        : json["mean_annual_return"],
    meanAnnualReturnCategory:
      json["mean_annual_return_category"] == null
        ? undefined
        : json["mean_annual_return_category"],
    rSquared: json["r_squared"] == null ? undefined : json["r_squared"],
    rSquaredCategory:
      json["r_squared_category"] == null
        ? undefined
        : json["r_squared_category"],
    std: json["std"] == null ? undefined : json["std"],
    stdCategory:
      json["std_category"] == null ? undefined : json["std_category"],
    sharpeRatio:
      json["sharpe_ratio"] == null ? undefined : json["sharpe_ratio"],
    sharpeRatioCategory:
      json["sharpe_ratio_category"] == null
        ? undefined
        : json["sharpe_ratio_category"],
    treynorRatio:
      json["treynor_ratio"] == null ? undefined : json["treynor_ratio"],
    treynorRatioCategory:
      json["treynor_ratio_category"] == null
        ? undefined
        : json["treynor_ratio_category"],
  };
}

export function GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerToJSON(
  json: any,
): GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner {
  return GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInnerToJSONTyped(
  value?: GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    period: value["period"],
    alpha: value["alpha"],
    alpha_category: value["alphaCategory"],
    beta: value["beta"],
    beta_category: value["betaCategory"],
    mean_annual_return: value["meanAnnualReturn"],
    mean_annual_return_category: value["meanAnnualReturnCategory"],
    r_squared: value["rSquared"],
    r_squared_category: value["rSquaredCategory"],
    std: value["std"],
    std_category: value["stdCategory"],
    sharpe_ratio: value["sharpeRatio"],
    sharpe_ratio_category: value["sharpeRatioCategory"],
    treynor_ratio: value["treynorRatio"],
    treynor_ratio_category: value["treynorRatioCategory"],
  };
}
