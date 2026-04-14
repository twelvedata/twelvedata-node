/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetStatistics200ResponseMeta } from "./GetStatistics200ResponseMeta";
import {
  GetStatistics200ResponseMetaFromJSON,
  GetStatistics200ResponseMetaFromJSONTyped,
  GetStatistics200ResponseMetaToJSON,
  GetStatistics200ResponseMetaToJSONTyped,
} from "./GetStatistics200ResponseMeta";
import type { GetStatistics200ResponseStatistics } from "./GetStatistics200ResponseStatistics";
import {
  GetStatistics200ResponseStatisticsFromJSON,
  GetStatistics200ResponseStatisticsFromJSONTyped,
  GetStatistics200ResponseStatisticsToJSON,
  GetStatistics200ResponseStatisticsToJSONTyped,
} from "./GetStatistics200ResponseStatistics";

/**
 *
 * @export
 * @interface GetStatistics200Response
 */
export interface GetStatistics200Response {
  /**
   *
   * @type {GetStatistics200ResponseMeta}
   * @memberof GetStatistics200Response
   */
  meta?: GetStatistics200ResponseMeta;
  /**
   *
   * @type {GetStatistics200ResponseStatistics}
   * @memberof GetStatistics200Response
   */
  statistics?: GetStatistics200ResponseStatistics;
}

/**
 * Check if a given object implements the GetStatistics200Response interface.
 */
export function instanceOfGetStatistics200Response(
  value: object,
): value is GetStatistics200Response {
  return true;
}

export function GetStatistics200ResponseFromJSON(
  json: any,
): GetStatistics200Response {
  return GetStatistics200ResponseFromJSONTyped(json, false);
}

export function GetStatistics200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetStatistics200ResponseMetaFromJSON(json["meta"]),
    statistics:
      json["statistics"] == null
        ? undefined
        : GetStatistics200ResponseStatisticsFromJSON(json["statistics"]),
  };
}

export function GetStatistics200ResponseToJSON(
  json: any,
): GetStatistics200Response {
  return GetStatistics200ResponseToJSONTyped(json, false);
}

export function GetStatistics200ResponseToJSONTyped(
  value?: GetStatistics200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetStatistics200ResponseMetaToJSON(value["meta"]),
    statistics: GetStatistics200ResponseStatisticsToJSON(value["statistics"]),
  };
}
