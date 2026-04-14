/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetRecommendations200ResponseTrends2MonthsAgo } from "./GetRecommendations200ResponseTrends2MonthsAgo";
import {
  GetRecommendations200ResponseTrends2MonthsAgoFromJSON,
  GetRecommendations200ResponseTrends2MonthsAgoFromJSONTyped,
  GetRecommendations200ResponseTrends2MonthsAgoToJSON,
  GetRecommendations200ResponseTrends2MonthsAgoToJSONTyped,
} from "./GetRecommendations200ResponseTrends2MonthsAgo";
import type { GetRecommendations200ResponseTrendsCurrentMonth } from "./GetRecommendations200ResponseTrendsCurrentMonth";
import {
  GetRecommendations200ResponseTrendsCurrentMonthFromJSON,
  GetRecommendations200ResponseTrendsCurrentMonthFromJSONTyped,
  GetRecommendations200ResponseTrendsCurrentMonthToJSON,
  GetRecommendations200ResponseTrendsCurrentMonthToJSONTyped,
} from "./GetRecommendations200ResponseTrendsCurrentMonth";
import type { GetRecommendations200ResponseTrends3MonthsAgo } from "./GetRecommendations200ResponseTrends3MonthsAgo";
import {
  GetRecommendations200ResponseTrends3MonthsAgoFromJSON,
  GetRecommendations200ResponseTrends3MonthsAgoFromJSONTyped,
  GetRecommendations200ResponseTrends3MonthsAgoToJSON,
  GetRecommendations200ResponseTrends3MonthsAgoToJSONTyped,
} from "./GetRecommendations200ResponseTrends3MonthsAgo";
import type { GetRecommendations200ResponseTrendsPreviousMonth } from "./GetRecommendations200ResponseTrendsPreviousMonth";
import {
  GetRecommendations200ResponseTrendsPreviousMonthFromJSON,
  GetRecommendations200ResponseTrendsPreviousMonthFromJSONTyped,
  GetRecommendations200ResponseTrendsPreviousMonthToJSON,
  GetRecommendations200ResponseTrendsPreviousMonthToJSONTyped,
} from "./GetRecommendations200ResponseTrendsPreviousMonth";

/**
 * Analyst recommendations trends
 * @export
 * @interface GetRecommendations200ResponseTrends
 */
export interface GetRecommendations200ResponseTrends {
  /**
   *
   * @type {GetRecommendations200ResponseTrendsCurrentMonth}
   * @memberof GetRecommendations200ResponseTrends
   */
  currentMonth?: GetRecommendations200ResponseTrendsCurrentMonth;
  /**
   *
   * @type {GetRecommendations200ResponseTrendsPreviousMonth}
   * @memberof GetRecommendations200ResponseTrends
   */
  previousMonth?: GetRecommendations200ResponseTrendsPreviousMonth;
  /**
   *
   * @type {GetRecommendations200ResponseTrends2MonthsAgo}
   * @memberof GetRecommendations200ResponseTrends
   */
  _2monthsAgo?: GetRecommendations200ResponseTrends2MonthsAgo;
  /**
   *
   * @type {GetRecommendations200ResponseTrends3MonthsAgo}
   * @memberof GetRecommendations200ResponseTrends
   */
  _3monthsAgo?: GetRecommendations200ResponseTrends3MonthsAgo;
}

/**
 * Check if a given object implements the GetRecommendations200ResponseTrends interface.
 */
export function instanceOfGetRecommendations200ResponseTrends(
  value: object,
): value is GetRecommendations200ResponseTrends {
  return true;
}

export function GetRecommendations200ResponseTrendsFromJSON(
  json: any,
): GetRecommendations200ResponseTrends {
  return GetRecommendations200ResponseTrendsFromJSONTyped(json, false);
}

export function GetRecommendations200ResponseTrendsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetRecommendations200ResponseTrends {
  if (json == null) {
    return json;
  }
  return {
    currentMonth:
      json["current_month"] == null
        ? undefined
        : GetRecommendations200ResponseTrendsCurrentMonthFromJSON(
            json["current_month"],
          ),
    previousMonth:
      json["previous_month"] == null
        ? undefined
        : GetRecommendations200ResponseTrendsPreviousMonthFromJSON(
            json["previous_month"],
          ),
    _2monthsAgo:
      json["2_months_ago"] == null
        ? undefined
        : GetRecommendations200ResponseTrends2MonthsAgoFromJSON(
            json["2_months_ago"],
          ),
    _3monthsAgo:
      json["3_months_ago"] == null
        ? undefined
        : GetRecommendations200ResponseTrends3MonthsAgoFromJSON(
            json["3_months_ago"],
          ),
  };
}

export function GetRecommendations200ResponseTrendsToJSON(
  json: any,
): GetRecommendations200ResponseTrends {
  return GetRecommendations200ResponseTrendsToJSONTyped(json, false);
}

export function GetRecommendations200ResponseTrendsToJSONTyped(
  value?: GetRecommendations200ResponseTrends | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    current_month: GetRecommendations200ResponseTrendsCurrentMonthToJSON(
      value["currentMonth"],
    ),
    previous_month: GetRecommendations200ResponseTrendsPreviousMonthToJSON(
      value["previousMonth"],
    ),
    "2_months_ago": GetRecommendations200ResponseTrends2MonthsAgoToJSON(
      value["_2monthsAgo"],
    ),
    "3_months_ago": GetRecommendations200ResponseTrends3MonthsAgoToJSON(
      value["_3monthsAgo"],
    ),
  };
}
