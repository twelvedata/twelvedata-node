/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ResponseMutualFundWorldRatings } from "./ResponseMutualFundWorldRatings";
import {
  ResponseMutualFundWorldRatingsFromJSON,
  ResponseMutualFundWorldRatingsFromJSONTyped,
  ResponseMutualFundWorldRatingsToJSON,
  ResponseMutualFundWorldRatingsToJSONTyped,
} from "./ResponseMutualFundWorldRatings";

/**
 * Mutual fund information
 * @export
 * @interface GetMutualFundsWorldRatings200ResponseMutualFund
 */
export interface GetMutualFundsWorldRatings200ResponseMutualFund {
  /**
   *
   * @type {ResponseMutualFundWorldRatings}
   * @memberof GetMutualFundsWorldRatings200ResponseMutualFund
   */
  ratings?: ResponseMutualFundWorldRatings;
}

/**
 * Check if a given object implements the GetMutualFundsWorldRatings200ResponseMutualFund interface.
 */
export function instanceOfGetMutualFundsWorldRatings200ResponseMutualFund(
  value: object,
): value is GetMutualFundsWorldRatings200ResponseMutualFund {
  return true;
}

export function GetMutualFundsWorldRatings200ResponseMutualFundFromJSON(
  json: any,
): GetMutualFundsWorldRatings200ResponseMutualFund {
  return GetMutualFundsWorldRatings200ResponseMutualFundFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldRatings200ResponseMutualFundFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldRatings200ResponseMutualFund {
  if (json == null) {
    return json;
  }
  return {
    ratings:
      json["ratings"] == null
        ? undefined
        : ResponseMutualFundWorldRatingsFromJSON(json["ratings"]),
  };
}

export function GetMutualFundsWorldRatings200ResponseMutualFundToJSON(
  json: any,
): GetMutualFundsWorldRatings200ResponseMutualFund {
  return GetMutualFundsWorldRatings200ResponseMutualFundToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldRatings200ResponseMutualFundToJSONTyped(
  value?: GetMutualFundsWorldRatings200ResponseMutualFund | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    ratings: ResponseMutualFundWorldRatingsToJSON(value["ratings"]),
  };
}
