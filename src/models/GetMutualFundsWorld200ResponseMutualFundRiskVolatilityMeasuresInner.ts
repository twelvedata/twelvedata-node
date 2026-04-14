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
 * @interface GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
 */
export interface GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner {
  /**
   * Period of a measure
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  period?: string;
  /**
   * Alpha score of a fund
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  alpha?: number;
  /**
   * Average alpha score of a fund's category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  alphaCategory?: number;
  /**
   * Beta score of a fund
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  beta?: number;
  /**
   * Average beta score of a fund's category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  betaCategory?: number;
  /**
   * Mean annual return of a fund
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  meanAnnualReturn?: number;
  /**
   * Average mean annual return of a fund's category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  meanAnnualReturnCategory?: number;
  /**
   * R-squared metric of a fund
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  rSquared?: number;
  /**
   * Average r-squared metric of a fund's category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  rSquaredCategory?: number;
  /**
   * Standard deviation of a fund
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  std?: number;
  /**
   * Average standard deviation of a fund's category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  stdCategory?: number;
  /**
   * Sharpe ratio of a fund
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  sharpeRatio?: number;
  /**
   * Average sharpe ratio of a fund's category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  sharpeRatioCategory?: number;
  /**
   * Treynor ratio of a fund
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  treynorRatio?: number;
  /**
   * Average treynor ratio of a fund's category
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner
   */
  treynorRatioCategory?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner {
  return GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner {
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

export function GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner {
  return GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInnerToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner | null,
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
