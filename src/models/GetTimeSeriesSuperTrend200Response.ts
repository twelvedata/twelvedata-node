/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSuperTrend200ResponseMeta } from "./GetTimeSeriesSuperTrend200ResponseMeta";
import {
  GetTimeSeriesSuperTrend200ResponseMetaFromJSON,
  GetTimeSeriesSuperTrend200ResponseMetaFromJSONTyped,
  GetTimeSeriesSuperTrend200ResponseMetaToJSON,
  GetTimeSeriesSuperTrend200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesSuperTrend200ResponseMeta";
import type { GetTimeSeriesSuperTrend200ResponseValuesInner } from "./GetTimeSeriesSuperTrend200ResponseValuesInner";
import {
  GetTimeSeriesSuperTrend200ResponseValuesInnerFromJSON,
  GetTimeSeriesSuperTrend200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesSuperTrend200ResponseValuesInnerToJSON,
  GetTimeSeriesSuperTrend200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesSuperTrend200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesSuperTrend200Response
 */
export interface GetTimeSeriesSuperTrend200Response {
  /**
   *
   * @type {GetTimeSeriesSuperTrend200ResponseMeta}
   * @memberof GetTimeSeriesSuperTrend200Response
   */
  meta?: GetTimeSeriesSuperTrend200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesSuperTrend200ResponseValuesInner>}
   * @memberof GetTimeSeriesSuperTrend200Response
   */
  values?: Array<GetTimeSeriesSuperTrend200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSuperTrend200Response interface.
 */
export function instanceOfGetTimeSeriesSuperTrend200Response(
  value: object,
): value is GetTimeSeriesSuperTrend200Response {
  return true;
}

export function GetTimeSeriesSuperTrend200ResponseFromJSON(
  json: any,
): GetTimeSeriesSuperTrend200Response {
  return GetTimeSeriesSuperTrend200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesSuperTrend200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSuperTrend200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesSuperTrend200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesSuperTrend200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesSuperTrend200ResponseToJSON(
  json: any,
): GetTimeSeriesSuperTrend200Response {
  return GetTimeSeriesSuperTrend200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesSuperTrend200ResponseToJSONTyped(
  value?: GetTimeSeriesSuperTrend200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesSuperTrend200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesSuperTrend200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
