/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Two months ago recommendations
 * @export
 * @interface GetRecommendations200ResponseTrends2MonthsAgo
 */
export interface GetRecommendations200ResponseTrends2MonthsAgo {
  /**
   * Number of analysts that give a strong buy recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrends2MonthsAgo
   */
  strongBuy?: number;
  /**
   * Number of analysts that give a buy recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrends2MonthsAgo
   */
  buy?: number;
  /**
   * Number of analysts that give a hold recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrends2MonthsAgo
   */
  hold?: number;
  /**
   * Number of analysts that give a sell recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrends2MonthsAgo
   */
  sell?: number;
  /**
   * Number of analysts that give a strong sell recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrends2MonthsAgo
   */
  strongSell?: number;
}

/**
 * Check if a given object implements the GetRecommendations200ResponseTrends2MonthsAgo interface.
 */
export function instanceOfGetRecommendations200ResponseTrends2MonthsAgo(
  value: object,
): value is GetRecommendations200ResponseTrends2MonthsAgo {
  return true;
}

export function GetRecommendations200ResponseTrends2MonthsAgoFromJSON(
  json: any,
): GetRecommendations200ResponseTrends2MonthsAgo {
  return GetRecommendations200ResponseTrends2MonthsAgoFromJSONTyped(
    json,
    false,
  );
}

export function GetRecommendations200ResponseTrends2MonthsAgoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetRecommendations200ResponseTrends2MonthsAgo {
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

export function GetRecommendations200ResponseTrends2MonthsAgoToJSON(
  json: any,
): GetRecommendations200ResponseTrends2MonthsAgo {
  return GetRecommendations200ResponseTrends2MonthsAgoToJSONTyped(json, false);
}

export function GetRecommendations200ResponseTrends2MonthsAgoToJSONTyped(
  value?: GetRecommendations200ResponseTrends2MonthsAgo | null,
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
