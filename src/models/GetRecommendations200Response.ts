/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetRecommendations200ResponseMeta } from "./GetRecommendations200ResponseMeta";
import {
  GetRecommendations200ResponseMetaFromJSON,
  GetRecommendations200ResponseMetaFromJSONTyped,
  GetRecommendations200ResponseMetaToJSON,
  GetRecommendations200ResponseMetaToJSONTyped,
} from "./GetRecommendations200ResponseMeta";
import type { GetRecommendations200ResponseTrends } from "./GetRecommendations200ResponseTrends";
import {
  GetRecommendations200ResponseTrendsFromJSON,
  GetRecommendations200ResponseTrendsFromJSONTyped,
  GetRecommendations200ResponseTrendsToJSON,
  GetRecommendations200ResponseTrendsToJSONTyped,
} from "./GetRecommendations200ResponseTrends";

/**
 *
 * @export
 * @interface GetRecommendations200Response
 */
export interface GetRecommendations200Response {
  /**
   *
   * @type {GetRecommendations200ResponseMeta}
   * @memberof GetRecommendations200Response
   */
  meta?: GetRecommendations200ResponseMeta;
  /**
   *
   * @type {GetRecommendations200ResponseTrends}
   * @memberof GetRecommendations200Response
   */
  trends?: GetRecommendations200ResponseTrends;
  /**
   * Rating from 0 to 10 represents overall analysts' recommendation. 0 to 2 - strong sell, 2 to 4 - sell, 4 to 6 - hold, 6 to 8 - buy, 8 to 10 - strong buy.
   * @type {number}
   * @memberof GetRecommendations200Response
   */
  rating?: number;
  /**
   * Response status
   * @type {string}
   * @memberof GetRecommendations200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetRecommendations200Response interface.
 */
export function instanceOfGetRecommendations200Response(
  value: object,
): value is GetRecommendations200Response {
  return true;
}

export function GetRecommendations200ResponseFromJSON(
  json: any,
): GetRecommendations200Response {
  return GetRecommendations200ResponseFromJSONTyped(json, false);
}

export function GetRecommendations200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetRecommendations200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetRecommendations200ResponseMetaFromJSON(json["meta"]),
    trends:
      json["trends"] == null
        ? undefined
        : GetRecommendations200ResponseTrendsFromJSON(json["trends"]),
    rating: json["rating"] == null ? undefined : json["rating"],
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetRecommendations200ResponseToJSON(
  json: any,
): GetRecommendations200Response {
  return GetRecommendations200ResponseToJSONTyped(json, false);
}

export function GetRecommendations200ResponseToJSONTyped(
  value?: GetRecommendations200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetRecommendations200ResponseMetaToJSON(value["meta"]),
    trends: GetRecommendations200ResponseTrendsToJSON(value["trends"]),
    rating: value["rating"],
    status: value["status"],
  };
}
