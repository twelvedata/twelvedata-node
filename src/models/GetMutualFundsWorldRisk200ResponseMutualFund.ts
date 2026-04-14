/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ResponseMutualFundWorldRisk } from "./ResponseMutualFundWorldRisk";
import {
  ResponseMutualFundWorldRiskFromJSON,
  ResponseMutualFundWorldRiskFromJSONTyped,
  ResponseMutualFundWorldRiskToJSON,
  ResponseMutualFundWorldRiskToJSONTyped,
} from "./ResponseMutualFundWorldRisk";

/**
 * Mutual fund information
 * @export
 * @interface GetMutualFundsWorldRisk200ResponseMutualFund
 */
export interface GetMutualFundsWorldRisk200ResponseMutualFund {
  /**
   *
   * @type {ResponseMutualFundWorldRisk}
   * @memberof GetMutualFundsWorldRisk200ResponseMutualFund
   */
  risk?: ResponseMutualFundWorldRisk;
}

/**
 * Check if a given object implements the GetMutualFundsWorldRisk200ResponseMutualFund interface.
 */
export function instanceOfGetMutualFundsWorldRisk200ResponseMutualFund(
  value: object,
): value is GetMutualFundsWorldRisk200ResponseMutualFund {
  return true;
}

export function GetMutualFundsWorldRisk200ResponseMutualFundFromJSON(
  json: any,
): GetMutualFundsWorldRisk200ResponseMutualFund {
  return GetMutualFundsWorldRisk200ResponseMutualFundFromJSONTyped(json, false);
}

export function GetMutualFundsWorldRisk200ResponseMutualFundFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldRisk200ResponseMutualFund {
  if (json == null) {
    return json;
  }
  return {
    risk:
      json["risk"] == null
        ? undefined
        : ResponseMutualFundWorldRiskFromJSON(json["risk"]),
  };
}

export function GetMutualFundsWorldRisk200ResponseMutualFundToJSON(
  json: any,
): GetMutualFundsWorldRisk200ResponseMutualFund {
  return GetMutualFundsWorldRisk200ResponseMutualFundToJSONTyped(json, false);
}

export function GetMutualFundsWorldRisk200ResponseMutualFundToJSONTyped(
  value?: GetMutualFundsWorldRisk200ResponseMutualFund | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    risk: ResponseMutualFundWorldRiskToJSON(value["risk"]),
  };
}
