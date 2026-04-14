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
 * @interface GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner
 */
export interface GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner {
  /**
   * Manager name
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner
   */
  name?: string;
  /**
   * Manager tenuring date
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner
   */
  tenureSince?: string;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInnerFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner {
  return GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    tenureSince:
      json["tenure_since"] == null ? undefined : json["tenure_since"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInnerToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner {
  return GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInnerToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInnerToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundSummaryPeopleInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    tenure_since: value["tenureSince"],
  };
}
