/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Previous month recommendations
 * @export
 * @interface GetRecommendations200ResponseTrendsPreviousMonth
 */
export interface GetRecommendations200ResponseTrendsPreviousMonth {
  /**
   * Number of analysts that give a strong buy recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrendsPreviousMonth
   */
  strongBuy?: number;
  /**
   * Number of analysts that give a buy recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrendsPreviousMonth
   */
  buy?: number;
  /**
   * Number of analysts that give a hold recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrendsPreviousMonth
   */
  hold?: number;
  /**
   * Number of analysts that give a sell recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrendsPreviousMonth
   */
  sell?: number;
  /**
   * Number of analysts that give a strong sell recommendation
   * @type {number}
   * @memberof GetRecommendations200ResponseTrendsPreviousMonth
   */
  strongSell?: number;
}

/**
 * Check if a given object implements the GetRecommendations200ResponseTrendsPreviousMonth interface.
 */
export function instanceOfGetRecommendations200ResponseTrendsPreviousMonth(
  value: object,
): value is GetRecommendations200ResponseTrendsPreviousMonth {
  return true;
}

export function GetRecommendations200ResponseTrendsPreviousMonthFromJSON(
  json: any,
): GetRecommendations200ResponseTrendsPreviousMonth {
  return GetRecommendations200ResponseTrendsPreviousMonthFromJSONTyped(
    json,
    false,
  );
}

export function GetRecommendations200ResponseTrendsPreviousMonthFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetRecommendations200ResponseTrendsPreviousMonth {
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

export function GetRecommendations200ResponseTrendsPreviousMonthToJSON(
  json: any,
): GetRecommendations200ResponseTrendsPreviousMonth {
  return GetRecommendations200ResponseTrendsPreviousMonthToJSONTyped(
    json,
    false,
  );
}

export function GetRecommendations200ResponseTrendsPreviousMonthToJSONTyped(
  value?: GetRecommendations200ResponseTrendsPreviousMonth | null,
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
