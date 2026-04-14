/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetMutualFundsWorld200ResponseMutualFundRatings } from "./GetMutualFundsWorld200ResponseMutualFundRatings";
import {
  GetMutualFundsWorld200ResponseMutualFundRatingsFromJSON,
  GetMutualFundsWorld200ResponseMutualFundRatingsFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundRatingsToJSON,
  GetMutualFundsWorld200ResponseMutualFundRatingsToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundRatings";
import type { GetMutualFundsWorld200ResponseMutualFundPerformance } from "./GetMutualFundsWorld200ResponseMutualFundPerformance";
import {
  GetMutualFundsWorld200ResponseMutualFundPerformanceFromJSON,
  GetMutualFundsWorld200ResponseMutualFundPerformanceFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundPerformanceToJSON,
  GetMutualFundsWorld200ResponseMutualFundPerformanceToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundPerformance";
import type { GetMutualFundsWorld200ResponseMutualFundPurchaseInfo } from "./GetMutualFundsWorld200ResponseMutualFundPurchaseInfo";
import {
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoFromJSON,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoToJSON,
  GetMutualFundsWorld200ResponseMutualFundPurchaseInfoToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundPurchaseInfo";
import type { GetMutualFundsWorld200ResponseMutualFundRisk } from "./GetMutualFundsWorld200ResponseMutualFundRisk";
import {
  GetMutualFundsWorld200ResponseMutualFundRiskFromJSON,
  GetMutualFundsWorld200ResponseMutualFundRiskFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundRiskToJSON,
  GetMutualFundsWorld200ResponseMutualFundRiskToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundRisk";
import type { GetMutualFundsWorld200ResponseMutualFundSummary } from "./GetMutualFundsWorld200ResponseMutualFundSummary";
import {
  GetMutualFundsWorld200ResponseMutualFundSummaryFromJSON,
  GetMutualFundsWorld200ResponseMutualFundSummaryFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundSummaryToJSON,
  GetMutualFundsWorld200ResponseMutualFundSummaryToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundSummary";
import type { GetMutualFundsWorld200ResponseMutualFundSustainability } from "./GetMutualFundsWorld200ResponseMutualFundSustainability";
import {
  GetMutualFundsWorld200ResponseMutualFundSustainabilityFromJSON,
  GetMutualFundsWorld200ResponseMutualFundSustainabilityFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundSustainabilityToJSON,
  GetMutualFundsWorld200ResponseMutualFundSustainabilityToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundSustainability";
import type { GetMutualFundsWorld200ResponseMutualFundComposition } from "./GetMutualFundsWorld200ResponseMutualFundComposition";
import {
  GetMutualFundsWorld200ResponseMutualFundCompositionFromJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionFromJSONTyped,
  GetMutualFundsWorld200ResponseMutualFundCompositionToJSON,
  GetMutualFundsWorld200ResponseMutualFundCompositionToJSONTyped,
} from "./GetMutualFundsWorld200ResponseMutualFundComposition";

/**
 * Mutual fund information
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFund
 */
export interface GetMutualFundsWorld200ResponseMutualFund {
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundSummary}
   * @memberof GetMutualFundsWorld200ResponseMutualFund
   */
  summary?: GetMutualFundsWorld200ResponseMutualFundSummary;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundPerformance}
   * @memberof GetMutualFundsWorld200ResponseMutualFund
   */
  performance?: GetMutualFundsWorld200ResponseMutualFundPerformance;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundRisk}
   * @memberof GetMutualFundsWorld200ResponseMutualFund
   */
  risk?: GetMutualFundsWorld200ResponseMutualFundRisk;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundRatings}
   * @memberof GetMutualFundsWorld200ResponseMutualFund
   */
  ratings?: GetMutualFundsWorld200ResponseMutualFundRatings;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundComposition}
   * @memberof GetMutualFundsWorld200ResponseMutualFund
   */
  composition?: GetMutualFundsWorld200ResponseMutualFundComposition;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundPurchaseInfo}
   * @memberof GetMutualFundsWorld200ResponseMutualFund
   */
  purchaseInfo?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfo;
  /**
   *
   * @type {GetMutualFundsWorld200ResponseMutualFundSustainability}
   * @memberof GetMutualFundsWorld200ResponseMutualFund
   */
  sustainability?: GetMutualFundsWorld200ResponseMutualFundSustainability;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFund interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFund(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFund {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFund {
  return GetMutualFundsWorld200ResponseMutualFundFromJSONTyped(json, false);
}

export function GetMutualFundsWorld200ResponseMutualFundFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFund {
  if (json == null) {
    return json;
  }
  return {
    summary:
      json["summary"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundSummaryFromJSON(
            json["summary"],
          ),
    performance:
      json["performance"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundPerformanceFromJSON(
            json["performance"],
          ),
    risk:
      json["risk"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundRiskFromJSON(json["risk"]),
    ratings:
      json["ratings"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundRatingsFromJSON(
            json["ratings"],
          ),
    composition:
      json["composition"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundCompositionFromJSON(
            json["composition"],
          ),
    purchaseInfo:
      json["purchase_info"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundPurchaseInfoFromJSON(
            json["purchase_info"],
          ),
    sustainability:
      json["sustainability"] == null
        ? undefined
        : GetMutualFundsWorld200ResponseMutualFundSustainabilityFromJSON(
            json["sustainability"],
          ),
  };
}

export function GetMutualFundsWorld200ResponseMutualFundToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFund {
  return GetMutualFundsWorld200ResponseMutualFundToJSONTyped(json, false);
}

export function GetMutualFundsWorld200ResponseMutualFundToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFund | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    summary: GetMutualFundsWorld200ResponseMutualFundSummaryToJSON(
      value["summary"],
    ),
    performance: GetMutualFundsWorld200ResponseMutualFundPerformanceToJSON(
      value["performance"],
    ),
    risk: GetMutualFundsWorld200ResponseMutualFundRiskToJSON(value["risk"]),
    ratings: GetMutualFundsWorld200ResponseMutualFundRatingsToJSON(
      value["ratings"],
    ),
    composition: GetMutualFundsWorld200ResponseMutualFundCompositionToJSON(
      value["composition"],
    ),
    purchase_info: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoToJSON(
      value["purchaseInfo"],
    ),
    sustainability:
      GetMutualFundsWorld200ResponseMutualFundSustainabilityToJSON(
        value["sustainability"],
      ),
  };
}
