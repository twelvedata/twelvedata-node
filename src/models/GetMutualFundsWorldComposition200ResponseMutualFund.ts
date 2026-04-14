/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ResponseMutualFundWorldComposition } from "./ResponseMutualFundWorldComposition";
import {
  ResponseMutualFundWorldCompositionFromJSON,
  ResponseMutualFundWorldCompositionFromJSONTyped,
  ResponseMutualFundWorldCompositionToJSON,
  ResponseMutualFundWorldCompositionToJSONTyped,
} from "./ResponseMutualFundWorldComposition";

/**
 * Mutual fund information
 * @export
 * @interface GetMutualFundsWorldComposition200ResponseMutualFund
 */
export interface GetMutualFundsWorldComposition200ResponseMutualFund {
  /**
   *
   * @type {ResponseMutualFundWorldComposition}
   * @memberof GetMutualFundsWorldComposition200ResponseMutualFund
   */
  composition?: ResponseMutualFundWorldComposition;
}

/**
 * Check if a given object implements the GetMutualFundsWorldComposition200ResponseMutualFund interface.
 */
export function instanceOfGetMutualFundsWorldComposition200ResponseMutualFund(
  value: object,
): value is GetMutualFundsWorldComposition200ResponseMutualFund {
  return true;
}

export function GetMutualFundsWorldComposition200ResponseMutualFundFromJSON(
  json: any,
): GetMutualFundsWorldComposition200ResponseMutualFund {
  return GetMutualFundsWorldComposition200ResponseMutualFundFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldComposition200ResponseMutualFundFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldComposition200ResponseMutualFund {
  if (json == null) {
    return json;
  }
  return {
    composition:
      json["composition"] == null
        ? undefined
        : ResponseMutualFundWorldCompositionFromJSON(json["composition"]),
  };
}

export function GetMutualFundsWorldComposition200ResponseMutualFundToJSON(
  json: any,
): GetMutualFundsWorldComposition200ResponseMutualFund {
  return GetMutualFundsWorldComposition200ResponseMutualFundToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldComposition200ResponseMutualFundToJSONTyped(
  value?: GetMutualFundsWorldComposition200ResponseMutualFund | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    composition: ResponseMutualFundWorldCompositionToJSON(value["composition"]),
  };
}
