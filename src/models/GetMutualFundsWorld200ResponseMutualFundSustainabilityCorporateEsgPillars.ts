/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Corporate ESG pillars
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars
 */
export interface GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars {
  /**
   * ESG environmental score
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars
   */
  environmental?: number;
  /**
   * ESG social score
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars
   */
  social?: number;
  /**
   * ESG governance score
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars
   */
  governance?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars {
  return GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars {
  if (json == null) {
    return json;
  }
  return {
    environmental:
      json["environmental"] == null ? undefined : json["environmental"],
    social: json["social"] == null ? undefined : json["social"],
    governance: json["governance"] == null ? undefined : json["governance"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars {
  return GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillarsToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    environmental: value["environmental"],
    social: value["social"],
    governance: value["governance"],
  };
}
