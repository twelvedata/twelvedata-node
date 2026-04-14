/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Ratings of a mutual fund
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundRatings
 */
export interface GetMutualFundsWorld200ResponseMutualFundRatings {
  /**
   * Performance rating from 0 to 5
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRatings
   */
  performanceRating?: number;
  /**
   * Risk rating from 0 to 5
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRatings
   */
  riskRating?: number;
  /**
   * Return rating from 0 to 5
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundRatings
   */
  returnRating?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundRatings interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundRatings(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundRatings {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundRatingsFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundRatings {
  return GetMutualFundsWorld200ResponseMutualFundRatingsFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundRatingsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundRatings {
  if (json == null) {
    return json;
  }
  return {
    performanceRating:
      json["performance_rating"] == null
        ? undefined
        : json["performance_rating"],
    riskRating: json["risk_rating"] == null ? undefined : json["risk_rating"],
    returnRating:
      json["return_rating"] == null ? undefined : json["return_rating"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundRatingsToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundRatings {
  return GetMutualFundsWorld200ResponseMutualFundRatingsToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundRatingsToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundRatings | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    performance_rating: value["performanceRating"],
    risk_rating: value["riskRating"],
    return_rating: value["returnRating"],
  };
}
