/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ResponseMutualFundWorldSustainability } from "./ResponseMutualFundWorldSustainability";
import {
  ResponseMutualFundWorldSustainabilityFromJSON,
  ResponseMutualFundWorldSustainabilityFromJSONTyped,
  ResponseMutualFundWorldSustainabilityToJSON,
  ResponseMutualFundWorldSustainabilityToJSONTyped,
} from "./ResponseMutualFundWorldSustainability";

/**
 * Mutual fund information
 * @export
 * @interface GetMutualFundsWorldSustainability200ResponseMutualFund
 */
export interface GetMutualFundsWorldSustainability200ResponseMutualFund {
  /**
   *
   * @type {ResponseMutualFundWorldSustainability}
   * @memberof GetMutualFundsWorldSustainability200ResponseMutualFund
   */
  sustainability?: ResponseMutualFundWorldSustainability;
}

/**
 * Check if a given object implements the GetMutualFundsWorldSustainability200ResponseMutualFund interface.
 */
export function instanceOfGetMutualFundsWorldSustainability200ResponseMutualFund(
  value: object,
): value is GetMutualFundsWorldSustainability200ResponseMutualFund {
  return true;
}

export function GetMutualFundsWorldSustainability200ResponseMutualFundFromJSON(
  json: any,
): GetMutualFundsWorldSustainability200ResponseMutualFund {
  return GetMutualFundsWorldSustainability200ResponseMutualFundFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldSustainability200ResponseMutualFundFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorldSustainability200ResponseMutualFund {
  if (json == null) {
    return json;
  }
  return {
    sustainability:
      json["sustainability"] == null
        ? undefined
        : ResponseMutualFundWorldSustainabilityFromJSON(json["sustainability"]),
  };
}

export function GetMutualFundsWorldSustainability200ResponseMutualFundToJSON(
  json: any,
): GetMutualFundsWorldSustainability200ResponseMutualFund {
  return GetMutualFundsWorldSustainability200ResponseMutualFundToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorldSustainability200ResponseMutualFundToJSONTyped(
  value?: GetMutualFundsWorldSustainability200ResponseMutualFund | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    sustainability: ResponseMutualFundWorldSustainabilityToJSON(
      value["sustainability"],
    ),
  };
}
