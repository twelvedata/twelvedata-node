/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ResponseMutualFundWorldPerformance } from "./ResponseMutualFundWorldPerformance";
import {
  ResponseMutualFundWorldPerformanceFromJSON,
  ResponseMutualFundWorldPerformanceFromJSONTyped,
  ResponseMutualFundWorldPerformanceToJSON,
  ResponseMutualFundWorldPerformanceToJSONTyped,
} from "./ResponseMutualFundWorldPerformance";

/**
 * Mutual fund information
 * @export
 * @interface GetMutualFundsWorldPerformance200ResponseMutualFund
 */
export interface GetMutualFundsWorldPerformance200ResponseMutualFund {
  /**
   *
   * @type {ResponseMutualFundWorldPerformance}
   * @memberof GetMutualFundsWorldPerformance200ResponseMutualFund
   */
  performance?: ResponseMutualFundWorldPerformance;
}

/**
 * Check if a given object implements the GetMutualFundsWorldPerformance200ResponseMutualFund interface.
 */
export function instanceOfGetMutualFundsWorldPerformance200ResponseMutualFund(
  value: object,
): value is GetMutualFundsWorldPerformance200ResponseMutualFund {
  return true;
}

export function GetMutualFundsWorldPerformance200ResponseMutualFundFromJSON(
  json: any,
): GetMutualFundsWorldPerformance200ResponseMutualFund {
  return GetMutualFundsWorldPerformance200ResponseMutualFundFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldPerformance200ResponseMutualFundFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldPerformance200ResponseMutualFund {
  if (json == null) {
    return json;
  }
  return {
    performance:
      json["performance"] == null
        ? undefined
        : ResponseMutualFundWorldPerformanceFromJSON(json["performance"]),
  };
}

export function GetMutualFundsWorldPerformance200ResponseMutualFundToJSON(
  json: any,
): GetMutualFundsWorldPerformance200ResponseMutualFund {
  return GetMutualFundsWorldPerformance200ResponseMutualFundToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldPerformance200ResponseMutualFundToJSONTyped(
  value?: GetMutualFundsWorldPerformance200ResponseMutualFund | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    performance: ResponseMutualFundWorldPerformanceToJSON(value["performance"]),
  };
}
