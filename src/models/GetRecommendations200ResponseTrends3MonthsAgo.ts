/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Three months ago recommendations
 * @export
 * @interface GetRecommendations200ResponseTrends3MonthsAgo
 */
export interface GetRecommendations200ResponseTrends3MonthsAgo {
  /**
   * Number of analysts that give a strong buy recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrends3MonthsAgo
   */
  strongBuy?: number;
  /**
   * Number of analysts that give a buy recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrends3MonthsAgo
   */
  buy?: number;
  /**
   * Number of analysts that give a hold recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrends3MonthsAgo
   */
  hold?: number;
  /**
   * Number of analysts that give a sell recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrends3MonthsAgo
   */
  sell?: number;
  /**
   * Number of analysts that give a strong sell recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrends3MonthsAgo
   */
  strongSell?: number;
}

/**
 * Check if a given object implements the GetRecommendations200ResponseTrends3MonthsAgo interface.
 */
export function instanceOfGetRecommendations200ResponseTrends3MonthsAgo(
  value: object,
): value is GetRecommendations200ResponseTrends3MonthsAgo {
  return true;
}

export function GetRecommendations200ResponseTrends3MonthsAgoFromJSON(
  json: any,
): GetRecommendations200ResponseTrends3MonthsAgo {
  return GetRecommendations200ResponseTrends3MonthsAgoFromJSONTyped(
    json,
    false,
  );
}

export function GetRecommendations200ResponseTrends3MonthsAgoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetRecommendations200ResponseTrends3MonthsAgo {
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

export function GetRecommendations200ResponseTrends3MonthsAgoToJSON(
  json: any,
): GetRecommendations200ResponseTrends3MonthsAgo {
  return GetRecommendations200ResponseTrends3MonthsAgoToJSONTyped(json, false);
}

export function GetRecommendations200ResponseTrends3MonthsAgoToJSONTyped(
  value?: GetRecommendations200ResponseTrends3MonthsAgo | null,
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
