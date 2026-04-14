/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Current month recommendations
 * @export
 * @interface GetRecommendations200ResponseTrendsCurrentMonth
 */
export interface GetRecommendations200ResponseTrendsCurrentMonth {
  /**
   * Number of analysts that give a strong buy recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrendsCurrentMonth
   */
  strongBuy?: number;
  /**
   * Number of analysts that give a buy recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrendsCurrentMonth
   */
  buy?: number;
  /**
   * Number of analysts that give a hold recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrendsCurrentMonth
   */
  hold?: number;
  /**
   * Number of analysts that give a sell recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrendsCurrentMonth
   */
  sell?: number;
  /**
   * Number of analysts that give a strong sell recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrendsCurrentMonth
   */
  strongSell?: number;
}

/**
 * Check if a given object implements the GetRecommendations200ResponseTrendsCurrentMonth interface.
 */
export function instanceOfGetRecommendations200ResponseTrendsCurrentMonth(
  value: object,
): value is GetRecommendations200ResponseTrendsCurrentMonth {
  return true;
}

export function GetRecommendations200ResponseTrendsCurrentMonthFromJSON(
  json: any,
): GetRecommendations200ResponseTrendsCurrentMonth {
  return GetRecommendations200ResponseTrendsCurrentMonthFromJSONTyped(
    json,
    false,
  );
}

export function GetRecommendations200ResponseTrendsCurrentMonthFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetRecommendations200ResponseTrendsCurrentMonth {
  if (json == null) {
    return json;
  }
  return {
    strongBuy: json["strong_buy"] == null ? undefined : json["strong_buy"],
    buy: json["buy"] == null ? undefined : json["buy"],
    hold: json["hold"] == null ? undefined : json["hold"],
    sell: json["sell"] == null ? undefined : json["sell"],
    strongSell: json["strong_sell"] == null ? undefined : json["strong_sell"],
  };
}

export function GetRecommendations200ResponseTrendsCurrentMonthToJSON(
  json: any,
): GetRecommendations200ResponseTrendsCurrentMonth {
  return GetRecommendations200ResponseTrendsCurrentMonthToJSONTyped(
    json,
    false,
  );
}

export function GetRecommendations200ResponseTrendsCurrentMonthToJSONTyped(
  value?: GetRecommendations200ResponseTrendsCurrentMonth | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    strong_buy: value["strongBuy"],
    buy: value["buy"],
    hold: value["hold"],
    sell: value["sell"],
    strong_sell: value["strongSell"],
  };
}
