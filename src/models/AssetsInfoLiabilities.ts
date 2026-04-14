/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { AssetsInfoLiabilitiesNonCurrentLiabilities } from "./AssetsInfoLiabilitiesNonCurrentLiabilities";
import {
  AssetsInfoLiabilitiesNonCurrentLiabilitiesFromJSON,
  AssetsInfoLiabilitiesNonCurrentLiabilitiesFromJSONTyped,
  AssetsInfoLiabilitiesNonCurrentLiabilitiesToJSON,
  AssetsInfoLiabilitiesNonCurrentLiabilitiesToJSONTyped,
} from "./AssetsInfoLiabilitiesNonCurrentLiabilities";
import type { EquityInfo } from "./EquityInfo";
import {
  EquityInfoFromJSON,
  EquityInfoFromJSONTyped,
  EquityInfoToJSON,
  EquityInfoToJSONTyped,
} from "./EquityInfo";
import type { AssetsInfoLiabilitiesCurrentLiabilities } from "./AssetsInfoLiabilitiesCurrentLiabilities";
import {
  AssetsInfoLiabilitiesCurrentLiabilitiesFromJSON,
  AssetsInfoLiabilitiesCurrentLiabilitiesFromJSONTyped,
  AssetsInfoLiabilitiesCurrentLiabilitiesToJSON,
  AssetsInfoLiabilitiesCurrentLiabilitiesToJSONTyped,
} from "./AssetsInfoLiabilitiesCurrentLiabilities";

/**
 * Liabilities information
 * @export
 * @interface AssetsInfoLiabilities
 */
export interface AssetsInfoLiabilities {
  /**
   * Total liabilities net minority interest
   * @type {number}
   * @memberof AssetsInfoLiabilities
   */
  totalLiabilitiesNetMinorityInterest?: number;
  /**
   *
   * @type {AssetsInfoLiabilitiesCurrentLiabilities}
   * @memberof AssetsInfoLiabilities
   */
  currentLiabilities?: AssetsInfoLiabilitiesCurrentLiabilities;
  /**
   *
   * @type {AssetsInfoLiabilitiesNonCurrentLiabilities}
   * @memberof AssetsInfoLiabilities
   */
  nonCurrentLiabilities?: AssetsInfoLiabilitiesNonCurrentLiabilities;
  /**
   *
   * @type {EquityInfo}
   * @memberof AssetsInfoLiabilities
   */
  equity?: EquityInfo;
}

/**
 * Check if a given object implements the AssetsInfoLiabilities interface.
 */
export function instanceOfAssetsInfoLiabilities(
  value: object,
): value is AssetsInfoLiabilities {
  return true;
}

export function AssetsInfoLiabilitiesFromJSON(
  json: any,
): AssetsInfoLiabilities {
  return AssetsInfoLiabilitiesFromJSONTyped(json, false);
}

export function AssetsInfoLiabilitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfoLiabilities {
  if (json == null) {
    return json;
  }
  return {
    totalLiabilitiesNetMinorityInterest:
      json["total_liabilities_net_minority_interest"] == null
        ? undefined
        : json["total_liabilities_net_minority_interest"],
    currentLiabilities:
      json["current_liabilities"] == null
        ? undefined
        : AssetsInfoLiabilitiesCurrentLiabilitiesFromJSON(
            json["current_liabilities"],
          ),
    nonCurrentLiabilities:
      json["non_current_liabilities"] == null
        ? undefined
        : AssetsInfoLiabilitiesNonCurrentLiabilitiesFromJSON(
            json["non_current_liabilities"],
          ),
    equity:
      json["equity"] == null ? undefined : EquityInfoFromJSON(json["equity"]),
  };
}

export function AssetsInfoLiabilitiesToJSON(json: any): AssetsInfoLiabilities {
  return AssetsInfoLiabilitiesToJSONTyped(json, false);
}

export function AssetsInfoLiabilitiesToJSONTyped(
  value?: AssetsInfoLiabilities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_liabilities_net_minority_interest:
      value["totalLiabilitiesNetMinorityInterest"],
    current_liabilities: AssetsInfoLiabilitiesCurrentLiabilitiesToJSON(
      value["currentLiabilities"],
    ),
    non_current_liabilities: AssetsInfoLiabilitiesNonCurrentLiabilitiesToJSON(
      value["nonCurrentLiabilities"],
    ),
    equity: EquityInfoToJSON(value["equity"]),
  };
}
