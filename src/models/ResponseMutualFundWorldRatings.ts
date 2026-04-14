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
 * @interface ResponseMutualFundWorldRatings
 */
export interface ResponseMutualFundWorldRatings {
  /**
   * Performance rating from 0 to 5
   * @type {number}
   * @memberof ResponseMutualFundWorldRatings
   */
  performanceRating?: number;
  /**
   * Risk rating from 0 to 5
   * @type {number}
   * @memberof ResponseMutualFundWorldRatings
   */
  riskRating?: number;
  /**
   * Return rating from 0 to 5
   * @type {number}
   * @memberof ResponseMutualFundWorldRatings
   */
  returnRating?: number;
}

/**
 * Check if a given object implements the ResponseMutualFundWorldRatings interface.
 */
export function instanceOfResponseMutualFundWorldRatings(
  value: object,
): value is ResponseMutualFundWorldRatings {
  return true;
}

export function ResponseMutualFundWorldRatingsFromJSON(
  json: any,
): ResponseMutualFundWorldRatings {
  return ResponseMutualFundWorldRatingsFromJSONTyped(json, false);
}

export function ResponseMutualFundWorldRatingsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ResponseMutualFundWorldRatings {
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

export function ResponseMutualFundWorldRatingsToJSON(
  json: any,
): ResponseMutualFundWorldRatings {
  return ResponseMutualFundWorldRatingsToJSONTyped(json, false);
}

export function ResponseMutualFundWorldRatingsToJSONTyped(
  value?: ResponseMutualFundWorldRatings | null,
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
