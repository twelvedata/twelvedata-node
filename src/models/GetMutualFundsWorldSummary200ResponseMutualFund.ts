/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ResponseMutualFundWorldSummary } from "./ResponseMutualFundWorldSummary";
import {
  ResponseMutualFundWorldSummaryFromJSON,
  ResponseMutualFundWorldSummaryFromJSONTyped,
  ResponseMutualFundWorldSummaryToJSON,
  ResponseMutualFundWorldSummaryToJSONTyped,
} from "./ResponseMutualFundWorldSummary";

/**
 * Mutual fund information
 * @export
 * @interface GetMutualFundsWorldSummary200ResponseMutualFund
 */
export interface GetMutualFundsWorldSummary200ResponseMutualFund {
  /**
   *
   * @type {ResponseMutualFundWorldSummary}
   * @memberof GetMutualFundsWorldSummary200ResponseMutualFund
   */
  summary?: ResponseMutualFundWorldSummary;
}

/**
 * Check if a given object implements the GetMutualFundsWorldSummary200ResponseMutualFund interface.
 */
export function instanceOfGetMutualFundsWorldSummary200ResponseMutualFund(
  value: object,
): value is GetMutualFundsWorldSummary200ResponseMutualFund {
  return true;
}

export function GetMutualFundsWorldSummary200ResponseMutualFundFromJSON(
  json: any,
): GetMutualFundsWorldSummary200ResponseMutualFund {
  return GetMutualFundsWorldSummary200ResponseMutualFundFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldSummary200ResponseMutualFundFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldSummary200ResponseMutualFund {
  if (json == null) {
    return json;
  }
  return {
    summary:
      json["summary"] == null
        ? undefined
        : ResponseMutualFundWorldSummaryFromJSON(json["summary"]),
  };
}

export function GetMutualFundsWorldSummary200ResponseMutualFundToJSON(
  json: any,
): GetMutualFundsWorldSummary200ResponseMutualFund {
  return GetMutualFundsWorldSummary200ResponseMutualFundToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldSummary200ResponseMutualFundToJSONTyped(
  value?: GetMutualFundsWorldSummary200ResponseMutualFund | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    summary: ResponseMutualFundWorldSummaryToJSON(value["summary"]),
  };
}
