/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities } from "./GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities";
import {
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesFromJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesFromJSONTyped,
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesToJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesToJSONTyped,
} from "./GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities";
import type { GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities } from "./GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities";
import {
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesFromJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesFromJSONTyped,
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesToJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesToJSONTyped,
} from "./GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities";

/**
 * Liabilities section of the balance sheet
 * @export
 * @interface GetBalanceSheet200ResponseBalanceSheetInnerLiabilities
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerLiabilities {
  /**
   *
   * @type {GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilities
   */
  currentLiabilities?: GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities;
  /**
   *
   * @type {GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilities
   */
  nonCurrentLiabilities?: GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities;
  /**
   * The sum of total_current_liabilities + total_non_current_liabilities
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerLiabilities
   */
  totalLiabilities?: number;
}

/**
 * Check if a given object implements the GetBalanceSheet200ResponseBalanceSheetInnerLiabilities interface.
 */
export function instanceOfGetBalanceSheet200ResponseBalanceSheetInnerLiabilities(
  value: object,
): value is GetBalanceSheet200ResponseBalanceSheetInnerLiabilities {
  return true;
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesFromJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerLiabilities {
  return GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesFromJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheet200ResponseBalanceSheetInnerLiabilities {
  if (json == null) {
    return json;
  }
  return {
    currentLiabilities:
      json["current_liabilities"] == null
        ? undefined
        : GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesFromJSON(
            json["current_liabilities"],
          ),
    nonCurrentLiabilities:
      json["non_current_liabilities"] == null
        ? undefined
        : GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesFromJSON(
            json["non_current_liabilities"],
          ),
    totalLiabilities:
      json["total_liabilities"] == null ? undefined : json["total_liabilities"],
  };
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesToJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerLiabilities {
  return GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesToJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesToJSONTyped(
  value?: GetBalanceSheet200ResponseBalanceSheetInnerLiabilities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    current_liabilities:
      GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilitiesToJSON(
        value["currentLiabilities"],
      ),
    non_current_liabilities:
      GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilitiesToJSON(
        value["nonCurrentLiabilities"],
      ),
    total_liabilities: value["totalLiabilities"],
  };
}
